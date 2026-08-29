'use client';

import { useLocale, useTranslations } from 'next-intl';

import { LOCALES } from '#/i18n/locales';
import { actions } from '#/lib/command';
import { Clickable } from '#/components/atoms/clickable';
import { DropdownMenu } from '#/components/atoms/dropdown-menu';
import { Icon } from '#/components/atoms/icon';
import { Tooltip } from '#/components/atoms/tooltip';

export function LanguageSwitcher() {
  const t = useTranslations('ui');
  const currentLocale = useLocale();

  return (
    <DropdownMenu.Root>
      <Tooltip
        position="left"
        content={t('canvas-actions.change-language')}
        className="palette-blue"
      >
        <DropdownMenu.Trigger asChild>
          <Clickable.Button
            aria-label={t('canvas-actions.change-language')}
            data-testid="canvas-action-change-language"
            size="icon"
            variant="icon"
            className="palette-blue"
          >
            <Icon name="languages" />
          </Clickable.Button>
        </DropdownMenu.Trigger>
      </Tooltip>

      <DropdownMenu.Content side="left" align="center">
        <DropdownMenu.RadioGroup value={currentLocale}>
          {LOCALES.map(({ code, label, flag }) => (
            <DropdownMenu.RadioItem
              key={code}
              value={code}
              onSelect={() => actions.locale.use(code)}
              data-testid={`language-option-${code}`}
            >
              <span aria-hidden>{flag}</span>
              {label}
            </DropdownMenu.RadioItem>
          ))}
        </DropdownMenu.RadioGroup>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
