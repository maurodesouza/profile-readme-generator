import { twc, TwcComponentProps } from 'react-twc';

export const Container = twc.div`flex gap-x-xl h-screen p-lg max-w-page mx-auto`;

type DivProps = TwcComponentProps<'div'> & { centered?: boolean };

export const Wrapper = twc.div<DivProps>(props => [
  `flex flex-col gap-xl w-full h-full flex-1 relative`,
  props.centered ? 'mx-auto max-w-centered-content items-center' : '',
]);

export const Content = twc.div`flex flex-col h-full w-full p-lg pr-sm overflow-auto scrollbar box-border`;

export const Page = {
  Container,
  Wrapper,
  Content,
};
