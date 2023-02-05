import React from 'react'
import BioNav from './BioNav'

const ViewLayout = ({children}) => {
  return (
    <>
      <BioNav />
      {children}
    </>
  )
}

export default ViewLayout