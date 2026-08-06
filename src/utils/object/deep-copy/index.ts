const deepCopy = (obj: any): any => {
  if (obj === undefined || obj === null || typeof obj !== 'object') {
    return obj;
  }

  return JSON.parse(JSON.stringify(obj));
};

export { deepCopy };
