import { useRouter } from 'next/router';

import { recommended_resources } from 'resources';
import { RecommendedResourcesTemplate } from 'templates';

const Resources = () => {
  const router = useRouter();

  return (
    <RecommendedResourcesTemplate
      resourceId={router.query.resourceId as keyof typeof recommended_resources}
    />
  );
};

export default Resources;
