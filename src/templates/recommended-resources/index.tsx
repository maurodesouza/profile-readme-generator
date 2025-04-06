import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { recommended_resources } from 'resources';
import { AffiliateWarning, Footer, ResourceItem } from 'components';

import * as S from './styles';

type RecommendedResourcesTemplateProps = {
  resourceId: keyof typeof recommended_resources;
};

const RecommendedResourcesTemplate = (
  props: RecommendedResourcesTemplateProps
) => {
  const { resourceId } = props;

  const resources = recommended_resources[resourceId];
  const router = useRouter();

  useEffect(() => {
    if (!resources) router.replace('/resources/books');
  }, []);

  return (
    <S.Container>
      <S.Wrapper>
        <S.Content>
          <h1>Recommended Resources for Developers</h1>
          <p>
            Here you&apos;ll find a hand-picked selection of books and tools
            that are frequently recommended by experienced developers and
            educators. These resources cover essential topics like clean code,
            software architecture, design patterns, and legacy code — everything
            you need to level up as a developer.
          </p>

          <S.Resources>
            {(resources ?? []).map(resource => (
              <ResourceItem key={resource.name} {...resource} />
            ))}
          </S.Resources>
        </S.Content>

        <AffiliateWarning />

        <Footer.Container>
          <Footer.Owner />
          <Footer.Navs />
          <Footer.GenericLink href="/" label="Try Generator" />
        </Footer.Container>
      </S.Wrapper>
    </S.Container>
  );
};

export { RecommendedResourcesTemplate };
