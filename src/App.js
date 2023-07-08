// import logo from './logo.svg';
import './styles/app.css';
import React, { lazy, Suspense} from 'react';


const Hero = lazy(() => import ('./components/hero'));
const Icons = lazy (() => import ('./components/icons'));
const Awards = lazy(() => import ('./components/award'));

function App() {
  return (
   <Suspense fallback={<div>Fetching...</div>}>
      <Hero />
      <Icons />
      <Awards />
   </Suspense>
  );
}

export default App;
