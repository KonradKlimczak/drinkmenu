import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { ApplicationBar } from '../components/ApplicationBar';

type PageProps = {
  children?: ReactNode;
};

export const Page = (props: PageProps) => {
  return (
    <div>
      <ApplicationBar />
      <Outlet />
    </div>
  );
};
