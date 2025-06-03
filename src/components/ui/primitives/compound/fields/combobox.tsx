import React, { useEffect, useState } from 'react';

import { Fields } from 'components/ui/primitives/fields';
import { Text } from 'components/ui/primitives/atoms/text';
import { Icon } from 'components/ui/primitives/atoms/icon';
import { Command } from 'components/ui/primitives/atoms/command';
import { Popover } from 'components/ui/primitives/atoms/popover';
import { Clickable } from 'components/ui/primitives/atoms/clickable';

import { cn } from 'utils';

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
} & Omit<React.ComponentProps<typeof Fields.Atoms.Input>, 'onChange'>;

const DEFAULT_PLACEHOLDER = 'Chose an option';

export function Combobox(props: ComboboxProps) {
  const {
    options = [],
    value,
    onChange,
    label,
    error,
    className,
    ...rest
  } = props;

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
    <div className={cn('w-full flex flex-col items-start gap-xs', className)}>
      {label && <Text.Label>{label}</Text.Label>}

      <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
        <Popover.Trigger asChild>
          <div className="relative w-full">
            <Fields.Atoms.Input
              placeholder={DEFAULT_PLACEHOLDER}
              value={selectedOption?.label}
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
            <Command.Input placeholder="Search framework..." />
            <Command.List>
              <Command.Empty>No framework found.</Command.Empty>
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
                      className={cn(
                        'size-4',
                        selectedOption?.value === option.value
                          ? 'opacity-100'
                          : 'opacity-0'
                      )}
                    />

                    {option.label}
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
