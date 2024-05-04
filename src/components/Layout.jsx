import React, {useEffect } from 'react'
import Header from './Header'

const Layout = ({ children }) => {
  // useEffect(() => {
  //   document.body.classList.add('text-slate-500', 'dark:text-slate-400', 'bg-white', 'dark:bg-slate-900')

  //   return () => {
  //     document.body.classList.remove('text-slate-500', 'dark:text-slate-400', 'bg-white', 'dark:bg-slate-900')
  //   }
  // }, [])

  return (
    <>
      <Header />
      {/* <div className='container px-10'>{children}</div> */}
      {children}
    </>
  )
}

export default Layout
