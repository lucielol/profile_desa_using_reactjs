import React, {useEffect } from 'react'
import Header from './Header'

const Layout = ({ children }) => {
  useEffect(() => {
    document.body.classList.add('antialiased', 'text-slate-500', 'bg-slate-900')

    return () => {
      document.body.classList.remove('antialiased', 'text-slate-500', 'bg-slate-900')
    }
  }, [])

  return (
    <>
      <Header />
      {/* <div className='container px-10'>{children}</div> */}
      {children}
    </>
  )
}

export default Layout
