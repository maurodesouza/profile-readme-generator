import dynamic from 'next/dynamic';
import { PanelsEnum } from 'types';

const editingPanels = {
  default: dynamic(() =>
    import('./default').then(
      mod => mod.DefaultEditPanel,
      () => () => null
    )
  ),

  [PanelsEnum.MUSIC]: dynamic(() =>
    import('./music').then(
      mod => mod.MusicEditPanel,
      () => () => null
    )
  ),

  [PanelsEnum.ACTIVITIES]: dynamic(() =>
    import('./activities').then(
      mod => mod.ActivitiesEditPanel,
      () => () => null
    )
  ),

  [PanelsEnum.SNAKE]: dynamic(() =>
    import('./snake').then(
      mod => mod.SnakePanel,
      () => () => null
    )
  ),

  [PanelsEnum.STATS]: dynamic(() =>
    import('./stats').then(
      mod => mod.StatsEditPanel,
      () => () => null
    )
  ),

  [PanelsEnum.TEXT]: dynamic(() =>
    import('./text').then(
      mod => mod.TextEditPanel,
      () => () => null
    )
  ),

  [PanelsEnum.TECHS]: dynamic(() =>
    import('./techs').then(
      mod => mod.TechsEditPanel,
      () => () => null
    )
  ),

  [PanelsEnum.IMAGE]: dynamic(() =>
    import('./image').then(
      mod => mod.ImageEditPanel,
      () => () => null
    )
  ),

  [PanelsEnum.SOCIALS]: dynamic(() =>
    import('./socials').then(
      mod => mod.SocialsEditPanel,
      () => () => null
    )
  ),

  [PanelsEnum.PROFILE_VIEWS]: dynamic(() =>
    import('./profile-views').then(
      mod => mod.ProfileViewsPanel,
      () => () => null
    )
  ),
};

export { editingPanels };
