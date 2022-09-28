import { NotificationPage } from './NotificationPage';

export const ErrorPage = ({ text }: { text: string }) => {
  return <NotificationPage text={text} title="Error" />;
};
