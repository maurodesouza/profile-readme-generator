import { File } from './file';
import { Folder } from './folder';

import * as S from './styles';

export type File = {
  file: string;
  content: string;
};

export type FilesTree = {
  name: string;
  files: File[];
};

type TreeProps = {
  tree: FilesTree[];
};

const Tree = ({ tree }: TreeProps) => {
  return (
    <S.Container>
      {tree.map(item => {
        const hasFiles = !!item.files.length;
        const isRoot = !item.name;

        if (isRoot && hasFiles)
          return item.files.map(file => <File key={file.file} {...file} />);

        return <Folder key={item.name} {...item} />;
      })}
    </S.Container>
  );
};

export { Tree };
