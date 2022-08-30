import React from 'react'
import Head from '../Head/Head'
import NotFoundStyle from './style'

const NotFound = () => {
  return (
    <NotFoundStyle>
        <Head title='Error 404' />
        <h1>Error: 404</h1>
        <p>Page not found.</p>
    </NotFoundStyle>
  )
}

export default NotFound