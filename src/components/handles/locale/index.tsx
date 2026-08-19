'use client';

import { useEffect } from 'react';

import { usePathname, useRouter } from '#/i18n/navigation';
import { command } from '#/lib/command';
import type { AppLocale } from '#/i18n/locales';

export function LocaleHandler() {
  const router = useRouter();
  const pathname = usePathname();

  function changeLocale(locale: AppLocale) {
    router.replace(pathname, { locale });
  }

  useEffect(() => {
    const dispose = command.handle('locale.use', changeLocale);

    return () => {
      dispose();
    };
  }, [pathname, router]);

  return null;
}
