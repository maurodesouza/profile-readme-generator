'use client';

import { useTranslations } from 'next-intl';

import { useEffect, useRef } from 'react';
import primsjs from 'prismjs';

import { Icon } from '#/components/atoms/icon';
import { Tooltip } from '#/components/atoms/tooltip';
import { Clickable } from '#/components/atoms/clickable';

import { CopyToClipboard } from '#/components/molecules/copy-to-clipboard';

type ReadmeResultProps = {
  content: string;
};

export function ReadmeResult(props: ReadmeResultProps) {
  const t = useTranslations('ui');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    primsjs.highlightAllUnder(containerRef.current!);
  }, [props.content]);

  return (
    <div ref={containerRef} className="code w-0">
      <ul className="absolute top-xl right-xl flex bg-palette-base">
        <CopyToClipboard content={props.content}>
          {({ copy, isCopied }) => {
            return (
              <Tooltip
                key={String(isCopied)}
                content={
                  isCopied
                    ? t('readme-result.copied-tooltip')
                    : t('readme-result.copy-tooltip')
                }
                position="top"
              >
                <Clickable.Button
                  onClick={copy}
                  size="icon"
                  variant="icon"
                  className="box-border rounded-full!"
                >
                  <Icon name={isCopied ? 'check' : 'copy'} />
                </Clickable.Button>
              </Tooltip>
            );
          }}
        </CopyToClipboard>
      </ul>

      <pre className={`language-html`}>
        <code className={`language-html`}>{props.content}</code>
      </pre>
    </div>
  );
}
