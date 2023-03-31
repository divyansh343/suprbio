import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { getCookie, toastify } from '../../utils/setCookie'

const ChangeUsername = () => {
  const [uname, setUname] = useState("")

  const handleChangeUsername = (e) => {
    e.preventDefault()
    var data = {
      "username": uname
    }
    var config = {
      method: 'put',
      url: `${process.env.NEXT_PUBLIC_HOST}api/user/cusername`,
      headers: {
        'Authorization': `Bearer ${getCookie()}`
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        // console.log(response.data);
        toastify(response.data.message)
        setUname("")
      })
      .catch(function (error) {
        toastify("Try again")
        // console.log(error);
      });
  }

  return (
    <div data-theme="light" >
      <form onSubmit={handleChangeUsername} className='grid place-items-center'>
        <div className='mt-9'>
          <p className='text-xl font-semibold'>Change Username</p>
        </div>

        <div className="form-control w-full max-w-xs mt-16">
          <label className="label">
            <span className="label-text font-medium text-base">New Username</span>
          </label>
          <input type="text" minLength={6} onChange={e => setUname(e.target.value)} value={uname} placeholder="new username" className="input input-bordered input-primary  w-full max-w-xs" required />
        </div>
      
        <div className='mt-8'>
          <button type='submit' className="btn btn-wide font-medium tracking-wide">change username</button>
        </div>
        <Link href="/profile">
          <button className="btn btn-wide font-medium tracking-wide mt-4"> Go Back</button>
        </Link>
      </form>
    </div>
  )
}

export default ChangeUsername