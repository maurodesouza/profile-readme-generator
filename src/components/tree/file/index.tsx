import { Icon } from 'components/ui/primitives/atoms/icon';

import { events } from 'app';

import { File as FileType } from '..';
import * as S from './styles';

type FileProps = FileType;

const File = ({ file, content }: FileProps) => {
  const handleClick = () => events.result.show(content);

  return (
    <S.Container onClick={handleClick}>
      <Icon name="file" size={20} />
      {file}
    </S.Container>
  );
};

export { File };
