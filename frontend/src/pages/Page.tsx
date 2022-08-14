import { ReactNode } from 'react';

type PageProps = {
  children?: ReactNode;
};

export const Page = (props: PageProps) => {
  return <div>{props.children}xxx</div>;
};
