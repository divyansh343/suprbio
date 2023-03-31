import { useRouter } from 'next/router'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { getCookie, toastify } from '../../utils/setCookie'
import { RiChatDeleteLine } from 'react-icons/ri';

const DeleteUser = () => {
  let router = useRouter()

  const handleDeleteUser = (e) => {
    e.preventDefault()
   
    var config = {
      method: 'delete',
      url: `${process.env.NEXT_PUBLIC_HOST}api/user`,
      headers: {
        'Authorization': `Bearer ${getCookie()}`
      },
    };

    axios(config)
      .then(function (response) {
        // console.log(response.data);
        toastify(response.data.message)
        router.push('/')
      })
      .catch(function (error) {
        toastify("Try again")
      });
  }

  return (
    <div data-theme="light" >
      <form onSubmit={handleDeleteUser} className='grid place-items-center'>
        <div className='mt-9'>
          <p className='text-2xl font-semibold text-error'><span className='inline-block mx-2 text-2xl'><RiChatDeleteLine/></span>Delete Account</p>
        </div>

       
      
        <div className='mt-20'>
          <button type='submit' className="btn btn-wide font-medium tracking-wide btn-error"> Delete This Account</button>
        </div>
        <Link href="/profile">
          <button className="btn btn-wide font-medium tracking-wide mt-4"> Go Back</button>
        </Link>
      </form>
    </div>
  )
}

export default DeleteUser