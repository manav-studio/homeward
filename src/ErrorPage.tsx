import * as React from 'react';
import NotificationPage from './NotificationPage';

const ErrorPage = ({ text }: { text: string }) => {
  return <NotificationPage text={text} title="Error" />;
};
export default ErrorPage;
