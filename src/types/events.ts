export enum Events {
  CANVAS_ADD_SECTION = 'canvas.section.add',
  CANVAS_REMOVE_SECTION = 'canvas.section.remove',
  CANVAS_EDIT_SECTION = 'canvas.section.edit',
  CANVAS_SET_CURRENT_SECTION = 'canvas.section.current',
  CANVAS_REORDER_SECTIONS = 'canvas.section.reorder',
  CANVAS_DUPLICATE_SECTION = 'canvas.section.duplicate',
  CANVAS_CLEAR_SECTIONS = 'canvas.clear',

  TEMPLATE_USE = 'template.use',
  TEMPLATE_PREVIEW = 'template.preview',

  RESULT_SHOW_CONTENT = 'result.canvas.show',

  SETTINGS_EDIT = 'settings.edit',

  CONTEXT_MENU_OPEN = 'contextmenu.open',
  CONTEXT_MENU_CLOSE = 'contextmenu.close',

  // Panels

  PANEL_RIGHT_SHOW = 'panel.right.show',
  PANEL_LEFT_SHOW = 'panel.left.show',

  PANEL_RIGHT_CLEAR = 'panel.right.clear',
  PANEL_LEFT_CLEAR = 'panel.left.clear',

  PANEL_RIGHT_OPEN = 'panel.right.open',
  PANEL_LEFT_OPEN = 'panel.left.open',

  PANEL_RIGHT_CLOSE = 'panel.right.close',
  PANEL_LEFT_CLOSE = 'panel.left.close',

  // Modal

  MODAL_OPEN = 'modal.open',
  MODAL_CLOSE = 'modal.close',

  // Extensions

  REGISTER_EXTENSION = 'extensions.register',
}
