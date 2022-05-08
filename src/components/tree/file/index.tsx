import { File as FileIcon } from '@styled-icons/feather';
import { events } from 'app';

import { File } from '..';
import * as S from './styles';

type FileProps = File;

const File = ({ file, content }: FileProps) => {
  const handleClick = () => events.result.show(content);

  return (
    <S.Container onClick={handleClick}>
      <FileIcon />
      {file}
    </S.Container>
  );
};

export { File };
