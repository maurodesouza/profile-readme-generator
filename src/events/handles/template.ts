import { CanvasSection, Events } from 'types';

import { BaseEventHandle } from './base';

class TemplateHandleEvents extends BaseEventHandle {
  constructor() {
    super();

    this.use = this.use.bind(this);
  }

  use() {
    this.emit(Events.TEMPLATE_USE);
  }

  preview(template?: CanvasSection[]) {
    this.emit(Events.TEMPLATE_PREVIEW, template ?? []);
  }
}

export { TemplateHandleEvents };
