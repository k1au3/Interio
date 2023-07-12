// import logo from './logo.svg';
import './styles/app.css';
import React, { lazy, Suspense} from 'react';


const Hero = lazy(() => import ('./components/hero'));
const Icons = lazy (() => import ('./components/icons'));
const Awards = lazy(() => import ('./components/award'));
const Process = lazy(() => import ('./components/process'));
const Blog = lazy(() => import ('./components/blog'));
const Footer = lazy(() => import ('./components/footer'));

function App() {
  return (
   <Suspense fallback={<div>Fetching...</div>}>
      <Hero />
      <Icons />
      <Awards />
      <Process />
      <Blog />
      <Footer />
   </Suspense>
  );
}

export default App;
