import { tailwind } from '#/utils/tailwind';
import React from 'react';
import { IconName } from 'lucide-react/dynamic';

import { Icon } from '#/components/atoms/icon';
import { Text } from '#/components/atoms/text';

import { actions } from '#/lib/command';

export type TFile = {
  file: string;
  content: string;
  className?: string;
};

export type TFolder = {
  name?: string;
  className?: string;
  files: TFile[];
};

type LabelProps = React.ComponentProps<'div'> & {
  icon?: IconName;
};

function Label(props: LabelProps) {
  const { children, className, icon = 'file', ...rest } = props;

  return (
    <div
      className={tailwind.cn('flex items-center gap-sm', className)}
      {...rest}
    >
      <Icon name={icon} size={20} />

      <Text.Paragraph className="text-inherit">{children}</Text.Paragraph>
    </div>
  );
}

type FileProps = TFile;

function File(props: FileProps) {
  const { content, file, className } = props;

  function onClick() {
    actions.result.show(content);
  }

  return (
    <button className="flex w-full mt-xs **:cursor-pointer hover:text-tone-foreground-context!">
      <Label
        onClick={onClick}
        icon="file"
        className={className}
        data-testid="tree-file"
      >
        {file}
      </Label>
    </button>
  );
}

type FolderProps = TFolder;

function Folder(props: FolderProps) {
  const { name, files, className } = props;

  const hasFiles = !!files.length;

  return hasFiles ? (
    <div>
      <Label icon="folder" className={className} data-testid="tree-folder">
        {name}
      </Label>

      <div className="ml-md">
        {files.map(file => (
          <File key={file.file} {...file} />
        ))}
      </div>
    </div>
  ) : null;
}

type TreeProps = {
  tree: TFolder[];
};

export function Tree(props: TreeProps) {
  const { tree } = props;

  return (
    <div>
      {tree.map(item => {
        const hasFiles = !!item.files.length;
        const isRoot = !item.name;

        if (isRoot && hasFiles)
          return item.files.map(file => <File key={file.file} {...file} />);

        return <Folder key={item.name} {...item} />;
      })}
    </div>
  );
}
