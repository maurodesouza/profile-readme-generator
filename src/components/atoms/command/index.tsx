'use client';

import { useTranslations } from 'next-intl';

import { tailwind } from '#/utils/tailwind';

import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { SearchIcon } from 'lucide-react';

import { Dialog } from '#/components/atoms/dialog';

function CommandRoot({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={tailwind.cn(
        'bg-palette-base text-palette-contrast flex h-full w-full flex-col overflow-hidden rounded-md',
        className
      )}
      {...props}
    />
  );
}

function CommandDialog({
  title,
  description,
  children,
  className,
  ...props
}: React.ComponentProps<typeof Dialog.Provider> & {
  title?: string;
  description?: string;
  className?: string;
}) {
  const t = useTranslations('ui');
  const resolvedTitle = title ?? t('command.title');
  const resolvedDescription = description ?? t('command.description');

  return (
    <Dialog.Provider {...props}>
      <Dialog.Header className="sr-only">
        <Dialog.Title>{resolvedTitle}</Dialog.Title>
        <Dialog.Description>{resolvedDescription}</Dialog.Description>
      </Dialog.Header>
      <Dialog.Content className={tailwind.cn('overflow-hidden p-0', className)}>
        <CommandRoot className="[&_[cmdk-group-heading]]:text-palette-contrast **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-xs [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group]]:px-xs [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-xs [&_[cmdk-item]]:py-sm [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </CommandRoot>
      </Dialog.Content>
    </Dialog.Provider>
  );
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="flex h-9 items-center gap-2 border-b border-palette-line px-sm"
    >
      <SearchIcon className="size-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={tailwind.cn(
          'placeholder:text-palette-accent/85 flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      />
    </div>
  );
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={tailwind.cn(
        'max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto scrollbar',
        className
      )}
      {...props}
    />
  );
}

function CommandEmpty({
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="py-md text-center text-sm"
      {...props}
    />
  );
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={tailwind.cn(
        'text-palette-contrast [&_[cmdk-group-heading]]:text-palette-contrast overflow-hidden [&_[cmdk-group-heading]]:px-sm [&_[cmdk-group-heading]]:py-xs [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold',
        className
      )}
      {...props}
    />
  );
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={tailwind.cn('bg-palette-line -mx-1 h-px', className)}
      {...props}
    />
  );
}

function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={tailwind.cn(
        "data-[selected=true]:bg-palette-soft data-[selected=true]:text-palette-contrast [&_svg:not([class*='text-'])]:text-palette-contrast relative flex cursor-default items-center gap-xs px-sm py-xs text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  );
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="command-shortcut"
      className={tailwind.cn(
        'text-palette-contrast ml-auto text-xs tracking-widest',
        className
      )}
      {...props}
    />
  );
}

export const Command = {
  Root: CommandRoot,
  Dialog: CommandDialog,
  Input: CommandInput,
  List: CommandList,
  Empty: CommandEmpty,
  Group: CommandGroup,
  Item: CommandItem,
  Shortcut: CommandShortcut,
  Separator: CommandSeparator,
};
