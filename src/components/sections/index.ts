import dynamic from 'next/dynamic';

import { Sections } from 'types';
import { BaseSection } from './base';

const sectionMap = {
  [Sections.MUSIC]: dynamic(() =>
    import('./music').then(
      mod => mod.MusicSection,
      () => () => null
    )
  ),

  [Sections.ACTIVITIES]: dynamic(() =>
    import('./activities').then(
      mod => mod.ActivitiesSection,
      () => () => null
    )
  ),

  [Sections.SNAKE]: dynamic(() =>
    import('./snake').then(
      mod => mod.SnakeSection,
      () => () => null
    )
  ),

  [Sections.STATS]: dynamic(() =>
    import('./stats').then(
      mod => mod.StatsSection,
      () => () => null
    )
  ),

  [Sections.TEXT]: dynamic(() =>
    import('./text').then(
      mod => mod.TextSection,
      () => () => null
    )
  ),

  [Sections.TECHS]: dynamic(() =>
    import('./techs').then(
      mod => mod.TechsSection,
      () => () => null
    )
  ),

  [Sections.IMAGE]: dynamic(() =>
    import('./image').then(
      mod => mod.ImageSection,
      () => () => null
    )
  ),

  [Sections.SOCIALS]: dynamic(() =>
    import('./socials').then(
      mod => mod.SocialsSection,
      () => () => null
    )
  ),

  [Sections.PROFILE_VIEWS]: dynamic(() =>
    import('./profile-views').then(
      mod => mod.ProfileViewsSection,
      () => () => null
    )
  ),
};

export { BaseSection, sectionMap };
