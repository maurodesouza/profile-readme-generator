import ReactDOM from 'react-dom';

type PortalProps = {
  children: React.ReactNode;
};

const Portal = ({ children }: PortalProps) =>
  ReactDOM.createPortal(children, document.body);

export { Portal };
