import { getStorageItem as getItem, setStorageItem as setItem } from 'utils';

function parse(e) {
  try {
    const {
      target: { result },
    } = e;
    const parsed = JSON.parse(result);
    for (const key in parsed) {
      setItem(key, parsed[key]);
    }
    window?.location?.reload();
  } catch (err) {
    localStorage?.clear();
    window?.location?.reload();
  }
}

export function restore({ target }) {
  const [file] = target.files;
  if (!file) return;
  const reader = new FileReader();
  reader.onload = parse;
  reader.readAsText(file);
}

export function backup({ target }) {
  const data = JSON.stringify(
    ['user.settings', 'canvas.sections'].reduce(
      (acc, cur) => ({ ...acc, [cur]: getItem(cur) }),
      {}
    ),
    null,
    2
  );

  target.href = URL.createObjectURL(
    new Blob([data], { type: 'application/json' })
  );
}
