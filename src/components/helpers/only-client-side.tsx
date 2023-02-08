import { useEffect, useState } from 'react';

type OnlyClientSideProps = {
  children: React.ReactNode;
};

const OnlyClientSide = ({ children }: OnlyClientSideProps) => {
  const [canRender, setCanRender] = useState(false);
  useEffect(() => {
    setCanRender(true);
  }, []);

  return canRender ? <>{children}</> : null;
};

export { OnlyClientSide };
