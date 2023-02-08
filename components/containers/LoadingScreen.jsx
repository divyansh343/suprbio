import React from 'react'
import ReactLoading from "react-loading";

const LoadingScreen = () => {
  return (
    <>
      <div className='h-screen'>
        <div className='flex justify-center items-center'>
        <ReactLoading type="spin" color="#e2554b" />
        </div>
      </div>
    </>
  )
}

export default LoadingScreen