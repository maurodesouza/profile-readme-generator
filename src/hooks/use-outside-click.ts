import { RefObject, useEffect } from 'react';

type Ref = RefObject<Node | undefined>;

const useOutsideClick = (
  els: Ref | Ref[],
  callback: (event: Event) => void,
  opened: boolean
) => {
  const handleOutsideClick = (event: Event) => {
    console.log(event.target);

    const refs = Array.isArray(els) ? els : [els];

    const outsideClick = refs.every(
      ref => ref.current && !ref.current.contains(event.target as Node)
    );

    if (outsideClick) callback(event);
  };

  useEffect(() => {
    const method = opened ? 'addEventListener' : 'removeEventListener';

    setTimeout(() => {
      window[method]('mousedown', handleOutsideClick);
      window[method]('click', handleOutsideClick);
    });

    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [opened]);
};

export { useOutsideClick };
