import { FocusEvent, useEffect, useRef, useState } from 'react';
import { X as CloseIcon } from '@styled-icons/feather';

import { events } from '@events/base';
import { useCanvas, useForceUpdate } from 'hooks';

import {
  debounce,
  getDeepObjectProperty,
  filterArrayByQueryMatch,
} from 'utils';

import * as S from './styles';

type SelectOption = {
  label: string;
  value: string;
  disable?: boolean;
};

type SelectProps = {
  path: string;
  label: string;
  placeholder?: string;
  clearable?: boolean;
  options?: SelectOption[];
};

const Select = ({ label, path, options = [], ...rest }: SelectProps) => {
  const defaultPlaceholder = 'Escolha uma opção';

  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const forceUpdate = useForceUpdate();
  const { currentSection } = useCanvas();

  const [selectedOption, setSelectedOption] = useState<SelectOption>();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isToUpDropdown, setIsToUpDropdown] = useState(false);

  const clearInputValue = () => (inputRef.current!.value = '');

  const handleSelect = (option?: SelectOption) => () => {
    setSelectedOption(option);
    clearInputValue();

    setIsDropdownOpen(false);

    const id = currentSection!.id;
    const value = option?.value || '';

    events.canvas.edit({ id, path, value });
  };

  const handleBlur = (event: FocusEvent) => {
    if (dropdownRef.current?.contains(event.relatedTarget as Node)) return;

    setIsDropdownOpen(false);
    clearInputValue();
  };

  useEffect(() => {
    const marginToBottom = 40;
    const translate = 10;

    const dropdown = dropdownRef.current;

    const offsetBottom = dropdown?.getBoundingClientRect().bottom || 0;
    const windownHeight = window.innerHeight - marginToBottom;

    setIsToUpDropdown(offsetBottom - translate > windownHeight);
  }, []);

  useEffect(() => {
    const value = getDeepObjectProperty<string>(currentSection?.props, path);

    const option = options.find(option => option.value === value);

    setSelectedOption(option);
  }, [currentSection]);

  const { value = '' } = inputRef.current || {};

  const filteredOptions = filterArrayByQueryMatch(value, options, ['label']);
  const canShowClearButton = !!selectedOption && !!rest.clearable;

  const placeholder =
    selectedOption?.label || rest.placeholder || defaultPlaceholder;

  return (
    <S.Container>
      <S.Label>{label}</S.Label>

      <S.Input
        ref={inputRef}
        isSelected={!!selectedOption}
        placeholder={placeholder}
        onInput={debounce(forceUpdate, 200)}
        onFocus={() => setIsDropdownOpen(true)}
        onBlur={handleBlur}
      />

      <S.Wrapper show={canShowClearButton} onClick={handleSelect()}>
        <CloseIcon size={20} />
      </S.Wrapper>

      <S.Dropdown
        ref={dropdownRef}
        open={isDropdownOpen}
        openToUp={isToUpDropdown}
      >
        {!!filteredOptions.length ? (
          filteredOptions.map(option => (
            <S.Option key={option.value} onClick={handleSelect(option)}>
              {option.label}
            </S.Option>
          ))
        ) : (
          <S.Option>Sem resultados para &quot;{value}&quot;</S.Option>
        )}
      </S.Dropdown>
    </S.Container>
  );
};

export { Select };
