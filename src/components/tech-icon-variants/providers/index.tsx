import { useEffect, useRef, useState } from 'react';

import { IconProviders } from 'types';
import * as S from './styles';
import { events } from 'app';

type ProvidersProps = {
  icon: string;
  current: string;
  available: IconProviders[];
};

const Providers = ({ icon, current, available }: ProvidersProps) => {
  const openTimetouRef = useRef<NodeJS.Timeout>();
  const closeTimetouRef = useRef<NodeJS.Timeout>();

  const [isOpen, setIsOpen] = useState(false);
  const [mount, setMount] = useState(false);

  const handleToggle = (open: boolean) => () => {
    if (open) {
      clearTimeout(closeTimetouRef.current!);
      setMount(true);

      openTimetouRef.current = setTimeout(() => {
        setIsOpen(true);
      });

      return;
    }

    setIsOpen(false);

    closeTimetouRef.current = setTimeout(() => {
      setMount(false);
    }, 350);
  };

  const handleChangeProvider = (value: string) => () => {
    if (value === current) return;

    const path = `content.icons.${icon}.currentProvider`;

    events.canvas.edit({ path, value });
  };

  useEffect(() => {
    return () => {
      clearTimeout(openTimetouRef.current!);
      clearTimeout(closeTimetouRef.current!);
    };
  }, []);

  return (
    <S.Container
      onMouseEnter={handleToggle(true)}
      onMouseLeave={handleToggle(false)}
    >
      {mount && (
        <S.Wrapper isOpen={isOpen}>
          {Object.values(IconProviders).map(provider => {
            const isCurrent = provider === current;
            const isUnavailable = !available.includes(provider);

            return (
              <li key={provider}>
                <S.Item
                  onClick={handleChangeProvider(provider)}
                  active={isCurrent}
                  disabled={isUnavailable}
                >
                  {provider} {isCurrent ? '(current)' : ''}
                </S.Item>
              </li>
            );
          })}
        </S.Wrapper>
      )}

      <span>{current}</span>
    </S.Container>
  );
};

export { Providers };
