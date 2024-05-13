import React, { useEffect } from 'react';
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  useEffect(() => {
    document.body.classList.add('overflow-x-hidden');

    return () => {
      document.body.classList.remove('overflow-x-hidden');
    }
  }, []);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
