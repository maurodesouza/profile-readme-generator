import { useState, useImperativeHandle, forwardRef, useEffect } from 'react';

import { useDragControls, usePresence } from 'framer-motion';

import { Icon } from 'components/ui/primitives/atoms/icon';

import { events } from 'app';

import { EditableIcon } from 'types';
import { variants, animations } from './animations';

import { Providers } from './providers';
import { Variants } from './variants';

import * as S from './styles';

type TechIconVariantsProps = EditableIcon & {
  refs: TechIconVariantsRef[];
};

export type TechIconVariantsRef = {
  closeEditForm: () => void;
};

const TechIconVariants: React.ForwardRefRenderFunction<
  TechIconVariantsRef,
  TechIconVariantsProps
> = (
  {
    name,
    shortname,
    refs,
    providers,
    available_providers,
    currentProvider,
    config,
  },
  ref
) => {
  const dragControls = useDragControls();
  const [isPresent, safeToRemove] = usePresence();

  const [isOpenEditForm, setIsOpenEditForm] = useState(false);

  const handleDeleteTech = () => {
    const path = `content.icons.${name}`;

    events.canvas.edit({ path, value: undefined });
  };

  const handleToggleEditForm = () => {
    if (!isOpenEditForm) handleCloseAllEditForms();

    setIsOpenEditForm(!isOpenEditForm);
  };

  const handleCloseEditForm = () => setIsOpenEditForm(false);

  const handleCloseAllEditForms = () =>
    refs.forEach(item => item?.closeEditForm());

  useImperativeHandle(
    ref,
    () => ({
      closeEditForm: handleCloseEditForm,
    }),
    []
  );

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove!, 1000);
  }, [isPresent]);

  const provider = providers[currentProvider]!;

  const providerVariants = provider.variants || [];
  const hasVariants = !!providerVariants.length;

  const logo = hasVariants
    ? providerVariants[(config[currentProvider]?.variant ?? 0) as number]
    : provider!.path;

  return (
    <S.Container
      value={name}
      variants={variants.container}
      dragListener={false}
      dragControls={dragControls}
      layout
      {...animations.container}
    >
      <S.Content>
        <S.Drag
          onPointerDown={event => [
            handleCloseAllEditForms(),
            dragControls.start(event),
          ]}
        >
          <Icon name="menu" size={20} />
        </S.Drag>

        <S.Logo
          key={`${name}`}
          alt={`${name} logo`}
          src={logo.replace(/ /g, '').replace(/(?<=badge\/)(.+)(?=-\w+\?)/, '')}
        />

        <S.Wrapper>
          <S.Name>{shortname || name}</S.Name>

          <S.DeleteButton onClick={handleDeleteTech}>
            <Icon name="trash" />
          </S.DeleteButton>
        </S.Wrapper>

        <Providers
          icon={name}
          current={currentProvider}
          available={available_providers}
        />

        {hasVariants && (
          <S.EditButton onClick={handleToggleEditForm}>
            <Icon name="edit-2" />
          </S.EditButton>
        )}
      </S.Content>

      <S.Grow
        initial={false}
        animate={isOpenEditForm && hasVariants ? 'open' : 'closed'}
        variants={variants.icons_container}
      >
        <Variants
          icon={name}
          provider={currentProvider}
          variants={providers[currentProvider]?.variants}
        />
      </S.Grow>
    </S.Container>
  );
};

const TechIconVariantsFoward = forwardRef(TechIconVariants);
export { TechIconVariantsFoward as TechIconVariants };
