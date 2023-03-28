import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { isAuth, setCookie } from '../../utils/setCookie'
import { useRouter } from 'next/router'
import ReactLoading from "react-loading";

const LoginContainer = () => {
  const [isAuthenticated, setAuthenticated] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPass] = useState("")
  const [loading, setloading] = useState(false)
  let router= useRouter()

  const handleLogin = (e) => {
    e.preventDefault()
    var data = JSON.stringify({
      "email": email,
      "password": password
    });

    var config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_HOST}api/user/login`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    setloading(true)
    axios(config)
      .then(function (response) {
        // console.log(response.data.token);
        setCookie(response.data.token)
        router.push('/profile')
        setloading(false)
      })
      .catch(function (error) {
        // console.log("invalid details");
        setloading(false)
      });
  }
  useEffect(() => {
    isAuth() === true ? setAuthenticated(true) : setAuthenticated(false)
  }, [])

  if (!isAuthenticated) {
    return (
      <>
        <div>
          <div className=' mx-[20px] '>
            <form onSubmit={handleLogin}>
  
              <div className='grid place-items-center '>
                <p className='text-[28px] font-semibold tracking-wide'>Sign In</p>
                {/* <p className='text-[26px] -mt-2'>to get started</p> */}
              </div>
              <div className='grid place-items-center grid-flow-row gap-4 mt-10 '>
                <input type="text"
                  className="input input-bordered input-primary tracking-wide text-base input-md w-full max-w-xs"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <input
                  className="input input-bordered input-primary tracking-wide text-base input-md w-full max-w-xs"
                  value={password}
                  onChange={e => setPass(e.target.value)}
                  type="text"
                  placeholder="Password"
                />
  
              </div>
  
              <div className='mt-4 mx-[18px] grid place-items-center '>
              {
                  loading ?
                    <button type='submit' className={`btn btn-wide btn-primary  tracking-wide btn-md`}>
                      <ReactLoading type='spin' className='-mt-2 p-4' color="#fff" />
                    </button>
                    :
                    <button type='submit' className={`btn btn-wide btn-primary tracking-wide btn-md`}>Sign In
                    </button>
                }
              </div>
              <div className='grid place-items-center mt-2'>
                <p className='text-[14px]'>or</p>
                <Link href="/register">
                  <p className="link link-primary">Register New Account</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  } else {
    router.push('/profile')
  }
}

export default LoginContainer