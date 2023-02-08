import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import power from '../../assets/images/power.png'
import { setCookie } from '../../utils/setCookie'
import { useRouter } from 'next/router'

const RegisterContainer = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPass] = useState("")
  let router= useRouter()

  const [loading, setloading] = useState(false)

  const handleRegister = (e) => {
    e.preventDefault()
    var data = JSON.stringify({
      "username": username,
      "email": email,
      "password": password
    });

    var config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_HOST}api/user`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)

      .then(function (response) {
        setloading(true)
        console.log(response.data.token);
        setCookie(response.data.token)
        router.push('/profile')
        setloading(false)
      })
      .catch(function (error) {
        setloading(true)
        console.log("username or email already exist");
        setloading(false)
      });
  }

  return (
    <>
      <div>
        <div className=' mx-[20px] '>
          <form onSubmit={handleRegister} >

            <div className='grid place-items-center '>
              <p className='text-[28px] font-semibold tracking-wide'>Create your  ✨Suprr link</p>
              <p className='text-[26px] -mt-2'>to get started</p>

            </div>
            <div className='grid place-items-center grid-flow-row gap-4 mt-10 '>

              <input
                className="input input-bordered input-accent tracking-wide text-lg input-md w-full max-w-xs"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email Address"
              />

              <input
                className="input input-bordered input-accent tracking-wide text-lg input-md w-full max-w-xs"
                value={password}
                onChange={e => setPass(e.target.value)}
                type="text"
                placeholder="Password"
              />

              <input type="username"
                className="input input-bordered input-accent tracking-wide text-lg input-md w-full max-w-xs"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Username"
              />

            </div>
            <p className='my-3 mx-[6px] text-[13px]'>⚡username will we the same as your link</p>
            <div className='my-4 '>
              <p className="btn btn-ghost normal-case text-lg lg:text-lg font-medium tracking-wide">
                <span className='mx-1'>
                  <Image src={power} height={25} width={25} alt="" />
                </span>
                unfold.bio/
                <span className='mx-[2px]  saturate-150 font-medium  tracking-wide'>
                  {'@' + username}
                </span>

              </p>
            </div>
            <div className='mx-[18px] grid place-items-center '>
              {
                loading ?
                  <button type='submit' className={`btn btn-wide animate-pulse tracking-wide btn-md`}>
                    Sign Up
                  </button>
                  :
                  <button type='submit' className={`btn btn-wide tracking-wide btn-md`}>Sign Up</button>
              }
            </div>
            <div className='grid place-items-center mt-2'>
              <p className='text-[14px]'>or</p>
              <Link href="/login">
                <p className="link link-secondary">Sign In</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default RegisterContainer