import { Icon } from 'components/ui/primitives/atoms/icon';

import { File } from '../file';
import { Label } from '../label';

import { FilesTree } from '..';
import * as S from './styles';

type FolderProps = FilesTree;

const Folder = ({ name, files }: FolderProps) => {
  const hasFiles = !!files.length;

  return hasFiles ? (
    <S.Container>
      <Label>
        <Icon name="folder" size={20} />
        {name}
      </Label>

      <S.Gap>
        {files.map(file => (
          <File key={file.file} {...file} />
        ))}
      </S.Gap>
    </S.Container>
  ) : null;
};

export { Folder };
