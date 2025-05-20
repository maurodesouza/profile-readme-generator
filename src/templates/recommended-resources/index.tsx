import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Page } from 'components/ui/primitives/atoms/page';
import { AffiliateWarning, Footer, ResourceItem } from 'components';

import { recommended_resources } from 'resources';

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
    <Page.Container>
      <Page.Wrapper centered>
        <Page.Content>
          <h1>Recommended Resources for Developers</h1>

          <p className="py-lg">
            Here you&apos;ll find a hand-picked selection of books and tools
            that are frequently recommended by experienced developers and
            educators. These resources cover essential topics like clean code,
            software architecture, design patterns, and legacy code — everything
            you need to level up as a developer.
          </p>

          <div className="grid grid-cols-2 gap-xl">
            {(resources ?? []).map(resource => (
              <ResourceItem
                key={resource.name}
                {...resource}
                linkLabel="Get the book"
              />
            ))}
          </div>
        </Page.Content>

        <AffiliateWarning />

        <Footer.Container>
          <Footer.Owner />
          <Footer.Navs />
          <Footer.GenericLink href="/" label="Try Generator" />
        </Footer.Container>
      </Page.Wrapper>
    </Page.Container>
  );
};

export { RecommendedResourcesTemplate };
