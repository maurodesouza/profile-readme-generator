import { describe, it, expect, vi } from 'vitest';

import { Sections } from '#/types';

import { statsSectionParser, statsWorkflowParser } from '../parser';

vi.mock('#/utils/url', () => ({
  url: {
    getStats: vi.fn(
      (type: string, github: string) =>
        `https://stats.example.com/${type}?username=${github}`
    ),
  },
}));

vi.mock('#/utils/object', () => ({
  object: {
    toQueryParams: vi.fn((params: Record<string, unknown>) =>
      Object.entries(params)
        .filter(([, v]) => v !== undefined && v !== null && v !== '')
        .map(([k, v]) => `${k}=${v}`)
        .join('&')
    ),
  },
}));

const settings = { user: { github: 'octocat' } } as any;

describe('FEATURE - stats parser (readme)', () => {
  it('emits a div with data-importer="stats"', () => {
    const result = statsSectionParser(
      {
        content: { graphs: { stats: { show: true } } as any },
        styles: { align: 'center', direction: 'row' },
      },
      settings
    );

    expect(result).toContain(`data-importer="${Sections.STATS}"`);
    expect(result).toContain('<div');
    expect(result).toContain('</div>');
  });

  it('includes the align attribute on the wrapper div', () => {
    const result = statsSectionParser(
      {
        content: { graphs: { stats: { show: true } } as any },
        styles: { align: 'right', direction: 'row' },
      },
      settings
    );

    expect(result).toContain('align="right"');
  });

  it('filters out graphs where show is false', () => {
    const result = statsSectionParser(
      {
        content: {
          graphs: {
            stats: { show: true },
            languages: { show: false },
          } as any,
        },
        styles: { align: 'center', direction: 'row' },
      },
      settings
    );

    expect(result).toContain('alt="stats graph"');
    expect(result).not.toContain('alt="languages graph"');
  });

  it('emits one img per visible graph', () => {
    const result = statsSectionParser(
      {
        content: {
          graphs: {
            stats: { show: true },
            languages: { show: true },
          } as any,
        },
        styles: { align: 'center', direction: 'row' },
      },
      settings
    );

    const imgCount = (result.match(/<img /g) || []).length;
    expect(imgCount).toBe(2);
  });

  it('adds <br> between graphs when direction is column', () => {
    const result = statsSectionParser(
      {
        content: {
          graphs: {
            stats: { show: true },
            languages: { show: true },
          } as any,
        },
        styles: { align: 'center', direction: 'column' },
      },
      settings
    );

    expect(result).toContain('<br>');
  });

  it('does not add <br> when direction is row', () => {
    const result = statsSectionParser(
      {
        content: {
          graphs: {
            stats: { show: true },
            languages: { show: true },
          } as any,
        },
        styles: { align: 'center', direction: 'row' },
      },
      settings
    );

    expect(result).not.toContain('<br>');
  });

  it('uses workflow file URL for workflow-based graphs (stats, languages, trophy, activity-graph)', () => {
    const result = statsSectionParser(
      {
        content: {
          graphs: {
            stats: { show: true, theme: 'dark' },
          } as any,
        },
        styles: { align: 'center', direction: 'row' },
      },
      settings
    );

    expect(result).toContain(
      'src="https://raw.githubusercontent.com/octocat/octocat/stats-output/stats.svg?'
    );
  });

  it('uses url.getStats for non-workflow graphs (streak)', () => {
    const result = statsSectionParser(
      {
        content: {
          graphs: {
            streak: { show: true },
          } as any,
        },
        styles: { align: 'center', direction: 'row' },
      },
      settings
    );

    expect(result).toContain(
      'src="https://stats.example.com/streak?username=octocat&"'
    );
  });

  it('defaults height to 150 when not provided', () => {
    const result = statsSectionParser(
      {
        content: {
          graphs: { stats: { show: true } } as any,
        },
        styles: { align: 'center', direction: 'row' },
      },
      settings
    );

    expect(result).toContain('height="150"');
  });
});

describe('FEATURE - stats parser (workflow)', () => {
  it('returns null when no graphs are visible', () => {
    const result = statsWorkflowParser({
      content: {
        graphs: {
          stats: { show: false },
          languages: { show: false },
          trophy: { show: false },
          'activity-graph': { show: false },
        } as any,
      },
      styles: { align: 'center', direction: 'row' },
    });

    expect(result).toBeNull();
  });

  it('returns an array of TFile when at least one graph is visible', () => {
    const result = statsWorkflowParser({
      content: {
        graphs: {
          stats: { show: true },
          languages: { show: false },
          trophy: { show: false },
          'activity-graph': { show: false },
        } as any,
      },
      styles: { align: 'center', direction: 'row' },
    });

    expect(result).not.toBeNull();
    expect(Array.isArray(result)).toBe(true);
    expect(result!.length).toBe(1);
    expect(result![0].file).toBe('stats.yml');
  });

  it('returns multiple workflow files when multiple graphs are visible', () => {
    const result = statsWorkflowParser({
      content: {
        graphs: {
          stats: { show: true },
          languages: { show: true },
          trophy: { show: true },
          'activity-graph': { show: true },
        } as any,
      },
      styles: { align: 'center', direction: 'row' },
    });

    expect(result).not.toBeNull();
    expect(result!.length).toBe(4);
    const files = result!.map((w: any) => w.file);
    expect(files).toContain('stats.yml');
    expect(files).toContain('languages.yml');
    expect(files).toContain('trophy.yml');
    expect(files).toContain('activity-graph.yml');
  });

  it('stats workflow content contains the workflow name', () => {
    const result = statsWorkflowParser({
      content: {
        graphs: { stats: { show: true } } as any,
      },
      styles: { align: 'center', direction: 'row' },
    });

    expect(result![0].content).toContain('name: Generate stats card');
  });

  it('languages workflow content contains the workflow name', () => {
    const result = statsWorkflowParser({
      content: {
        graphs: { languages: { show: true } } as any,
      },
      styles: { align: 'center', direction: 'row' },
    });

    expect(result![0].content).toContain('name: Generate languages card');
  });

  it('trophy workflow content contains the workflow name', () => {
    const result = statsWorkflowParser({
      content: {
        graphs: { trophy: { show: true } } as any,
      },
      styles: { align: 'center', direction: 'row' },
    });

    expect(result![0].content).toContain('name: Generate trophy card');
  });

  it('activity-graph workflow content contains the workflow name', () => {
    const result = statsWorkflowParser({
      content: {
        graphs: { 'activity-graph': { show: true } } as any,
      },
      styles: { align: 'center', direction: 'row' },
    });

    expect(result![0].content).toContain('name: Update Activity Graph');
  });
});
