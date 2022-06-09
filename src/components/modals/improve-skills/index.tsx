import { useEffect, useState } from 'react';
import { BaseModal } from '../base';

import { getItems } from './items';
import * as S from './styles';

const ImproveSkillsModal = () => {
  const [isPtBr, setIsPtBr] = useState(false);

  useEffect(() => {
    const hasLangPtBr = !!navigator.languages.find(lang => lang.match(/br/));

    setIsPtBr(hasLangPtBr);
  }, []);

  const items = getItems(isPtBr);

  return (
    <BaseModal title="Improve your skills!">
      <S.Container>
        {items.map(item => (
          <S.Card key={item.name}>
            <S.Image src={item.image} />

            <S.Name>{item.name}</S.Name>
            <S.Description>{item.description}</S.Description>

            <S.Tags>
              {item.tags.map(tag => (
                <S.Tag key={tag}>{tag}</S.Tag>
              ))}
            </S.Tags>

            <S.SeeMore href={item.link} target="_blank">
              See more
            </S.SeeMore>
          </S.Card>
        ))}
      </S.Container>
    </BaseModal>
  );
};

export { ImproveSkillsModal };
