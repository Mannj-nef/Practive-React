import { ReactNode, Suspense } from 'react';

interface IApp {
  children: ReactNode;
}

const App = ({ children }: IApp) => {
  return (
    <div className='app'>
      <Suspense fallback={<div>...loading</div>}>{children}</Suspense>
    </div>
  );
};

export default App;
