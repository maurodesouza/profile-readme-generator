import { NextApiRequest, NextApiResponse } from 'next';

import { config } from 'config';
import { CountApiKeys, HTTPMethods, StatusCode } from 'types';

const {
  environment,
  urls: { count_api: baseUrl },
  options: {
    count_api: { namespace, keys },
  },
} = config.envs;

const errorResponse = {
  status: StatusCode.INTERNAL_SERVER_ERROR,
  body: {
    error: 'An internal server error has occurred',
  },
};

const putHandle = async (key: string) => {
  const response = await fetch(`${baseUrl}/hit/${namespace}/${key}`);

  if (response.ok) return { status: StatusCode.OK, body: {} };

  return errorResponse;
};

const getHandle = async (key: string) => {
  const response = await fetch(`${baseUrl}/get/${namespace}/${key}`);

  if (response.ok) {
    const body = await response.json();

    return { status: StatusCode.OK, body };
  }

  return errorResponse;
};

const handles = {
  PUT: putHandle,
  GET: getHandle,
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (environment) return res.status(StatusCode.OK).json({});

  const allowedMethods = [HTTPMethods.GET, HTTPMethods.PUT];

  const key = keys[req.query.key as CountApiKeys];
  const method = req.method as HTTPMethods;

  if (!allowedMethods.includes(method))
    return res
      .status(StatusCode.METHOD_NOT_ALLOWED)
      .json({ error: 'method not allowed' });

  if (!key)
    return res
      .status(StatusCode.BAD_REQUEST)
      .json({ error: 'no valid key found' });

  const handle = handles[method];
  const { status, body } = await handle(key);

  res.status(status).json(body);
};

export default handler;
