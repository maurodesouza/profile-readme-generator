import { useEffect, useState } from 'react';

type RenderOnlyClientSideProps = {
  children: React.ReactNode;
};

const RenderOnlyClientSide = ({ children }: RenderOnlyClientSideProps) => {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    setCanRender(true);
  }, []);

  return canRender ? <>{children}</> : null;
};

export { RenderOnlyClientSide };
