import React from 'react';
import { IconName } from 'lucide-react/dynamic';

import { Icon } from 'components/ui/primitives/atoms/icon';
import { Text } from 'components/ui/primitives/atoms/text';

import { cn } from 'utils';
import { events } from '@events';

export type TFile = {
  file: string;
  content: string;
};

export type TFolder = {
  name?: string;
  files: TFile[];
};

type LabelProps = React.ComponentProps<'div'> & {
  icon?: IconName;
};

function Label(props: LabelProps) {
  const { children, className, icon = 'file', ...rest } = props;

  return (
    <div className={cn('flex items-center gap-sm', className)} {...rest}>
      <Icon name={icon} size={20} />

      <Text.Paragraph className="text-inherit">{children}</Text.Paragraph>
    </div>
  );
}

type FileProps = TFile;

function File(props: FileProps) {
  const { content, file } = props;

  function onClick() {
    events.result.show(content);
  }

  return (
    <button className="flex w-full mt-xs **:cursor-pointer hover:!text-tone-foreground-context">
      <Label onClick={onClick} icon="file">
        {file}
      </Label>
    </button>
  );
}

type FolderProps = TFolder;

function Folder(props: FolderProps) {
  const { name, files } = props;

  const hasFiles = !!files.length;

  return hasFiles ? (
    <div>
      <Label icon="folder">{name}</Label>

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
