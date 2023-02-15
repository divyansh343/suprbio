import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { getCookie, toastify } from '../../utils/setCookie'

const ChangePassword = () => {
  const [pass, setPass] = useState("")
  const [cpass, setCPass] = useState("")

  const handleChangePassword = (e) => {
    e.preventDefault()
    if (pass !== cpass) {
      toastify("password & confirm passwords don't match")
      console.log(pass);
      console.log(cpass);
      return
    }
    var data = {
      "password": pass
    }
    var config = {
      method: 'put',
      url: `${process.env.NEXT_PUBLIC_HOST}api/user/cpass`,
      headers: {
        'Authorization': `Bearer ${getCookie()}`
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        toastify("password changed sucessfully")
        setPass("")
        setCPass("")
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  return (
    <div data-theme="winter" >
      <form onSubmit={handleChangePassword} className='grid place-items-center'>
        <div className='mt-9'>
          <p className='text-xl font-semibold'>Change Password</p>
        </div>

        <div className="form-control w-full max-w-xs mt-16">
          <label className="label">
            <span className="label-text font-medium text-base">New Password</span>
          </label>
          <input type="text" minLength={6} onChange={e => setPass(e.target.value)} value={pass} placeholder="new password" className="input input-bordered input-primary  w-full max-w-xs" required />
        </div>
        <div className="form-control w-full max-w-xs mt-6">
          <label className="label">
            <span className="label-text font-medium text-base">Confirm new password</span>
          </label>
          <input type="password" min={6} onChange={e => setCPass(e.target.value)} value={cpass} placeholder="confirm password" className="input input-bordered input-primary  w-full max-w-xs" required />
        </div>
        <div className='mt-8'>
          <button type='submit' className="btn btn-wide font-medium tracking-wide">change password</button>
        </div>
        <Link href="/profile">
          <button className="btn btn-wide font-medium tracking-wide mt-4"> Go Back</button>
        </Link>
      </form>
    </div>
  )
}

export default ChangePassword