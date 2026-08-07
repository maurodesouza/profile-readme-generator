'use client';

import { useTranslations } from 'next-intl';

import { tailwind } from '#/utils/tailwind';
import React, { useEffect, useState } from 'react';

import { Text } from '#/components/atoms/text';
import { Icon } from '#/components/atoms/icon';
import { Command } from '#/components/atoms/command';
import { Popover } from '#/components/atoms/popover';
import { Clickable } from '#/components/atoms/clickable';
import { Input } from '#/components/atoms/field-input';

type ComboboxOption = {
  label: string;
  value: string;
  disable?: boolean;
};

type ComboboxProps = {
  label?: string;
  error?: string;
  value?: string;
  options?: ComboboxOption[];
  onChange?: (value: ComboboxOption) => void;
} & Omit<React.ComponentProps<typeof Input>, 'onChange'>;

export function Combobox(props: ComboboxProps) {
  const {
    options = [],
    value,
    onChange,
    label,
    error,
    className,
    placeholder,
    ...rest
  } = props;

  const tFields = useTranslations('fields');
  const tUi = useTranslations('ui');

  const translate = (text: string) =>
    tFields(text.replace(/\./g, '__dot__')) as string;

  function getOptionByValue(value?: string) {
    if (!value) return undefined;

    return options.find(option => option.value === value);
  }

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<
    ComboboxOption | undefined
  >(getOptionByValue(value));

  useEffect(() => {
    setSelectedOption(getOptionByValue(value));
  }, [value]);

  return (
    <div
      className={tailwind.cn(
        'w-full flex flex-col items-start gap-xs',
        className
      )}
    >
      {label && <Text.Label>{label}</Text.Label>}

      <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
        <Popover.Trigger asChild>
          <div className="relative w-full">
            <Input
              placeholder={
                placeholder || tUi('fieldCombobox.choosePlaceholder')
              }
              value={
                selectedOption ? translate(selectedOption.label) : undefined
              }
              {...rest}
            />

            <Clickable.Button
              size="icon"
              variant="icon"
              className="absolute right-1 bottom-0.5"
            >
              <Icon name="chevrons-up-down" />
            </Clickable.Button>
          </div>
        </Popover.Trigger>
        <Popover.Content className="w-(--radix-popover-trigger-width) p-0">
          <Command.Root>
            <Command.Input
              placeholder={tUi('fieldCombobox.searchPlaceholder')}
            />
            <Command.List>
              <Command.Empty>{tUi('fieldCombobox.empty')}</Command.Empty>
              <Command.Group>
                {options.map(option => (
                  <Command.Item
                    key={option.value}
                    value={option.value}
                    onSelect={() => {
                      setSelectedOption(option);
                      setIsOpen(false);

                      onChange?.(option);
                    }}
                  >
                    <Icon
                      name="check"
                      className={tailwind.cn(
                        'size-4',
                        selectedOption?.value === option.value
                          ? 'opacity-100'
                          : 'opacity-0'
                      )}
                    />

                    {translate(option.label)}
                  </Command.Item>
                ))}
              </Command.Group>
            </Command.List>
          </Command.Root>
        </Popover.Content>
      </Popover.Root>

      {error && <Text.Error>{error}</Text.Error>}
    </div>
  );
}
