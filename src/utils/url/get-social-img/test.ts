import { config } from '#/config';
import { describe, it, expect } from 'vitest';

import { getSocialImg } from '.';

const { iconBaseUrl, badgeBaseUrl } = config.general.urls.sections.socials;

describe('UTILS - Get social image url', () => {
  it('should return the correct icon url', () => {
    const result = getSocialImg('icon', 'github', { icon: 'mark' });

    expect(result).toBe(`${iconBaseUrl}/github/mark.svg`);
  });

  it('should return the correct badge url with default props', () => {
    const result = getSocialImg('badge', 'github', {});

    expect(result).toBe(
      `${badgeBaseUrl}?message=Github&logo=github&label=&color=000&logoColor=white&labelColor=&style=for-the-badge`
    );
  });

  it('should return the correct badge url with custom props', () => {
    const result = getSocialImg('badge', 'twitter', {
      icon: 'x',
      message: 'follow',
      logo: 'x',
      label: 'x',
      color: '111',
      logoColor: 'blue',
      labelColor: 'black',
      style: 'flat',
    });

    expect(result).toBe(
      `${badgeBaseUrl}?message=follow&logo=x&label=x&color=111&logoColor=blue&labelColor=black&style=flat`
    );
  });
});
