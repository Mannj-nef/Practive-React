import { ReactNode } from 'react';

interface IApp {
  children: ReactNode;
}

const App = ({ children }: IApp) => {
  return <div>{children}</div>;
};

export default App;
