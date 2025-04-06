import * as S from './styles';

type ResourceItemProps = {
  name: string;
  image: string;
  description: string;
  link: string;
  linkLabel: string;
};

const ResourceItem = (props: ResourceItemProps) => {
  return (
    <S.Container key={props.name}>
      <S.Image src={props.image} />

      <S.Name>{props.name}</S.Name>
      <S.Description>{props.description}</S.Description>

      <S.SeeMore href={props.link} target="_blank">
        {props.linkLabel}
      </S.SeeMore>
    </S.Container>
  );
};

export { ResourceItem };
