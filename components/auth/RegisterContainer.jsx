import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import ReactLoading from "react-loading";
import React, { useState } from 'react'
import power from '../../assets/images/power.png'
import { getCookie, isAuth, setCookie, toastify } from '../../utils/setCookie'
import { useRouter } from 'next/router'
import user from '../../assets/images/user.png'
import { useEffect } from 'react';
import { FiZap, FiTrendingUp } from 'react-icons/fi';


const RegisterContainer = () => {
  const [isAuthenticated, setAuthenticated] = useState(false)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPass] = useState("")
  let router = useRouter()
  const [avatar, setImage] = useState([]);

  const [loading, setloading] = useState(false)
  // console.log(loading);


  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
    // console.log(file);
  }

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    }

  }


  const handleRegister = (e) => {
    e.preventDefault()
    var data = JSON.stringify({
      "username": username,
      "email": email,
      "password": password,
      avatar
    });

    var config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_HOST}api/user`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    setloading(true)
    axios(config)
      .then(function (response) {
        setCookie(response.data.token)
        toastify("update request gone to admin")
        router.push('/user')
        setloading(false)
      })
      .catch(function (error) {
        setloading(true)
        // console.log("username or email already exist");
        toastify("Select image less than 1 mb")
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
            <form onSubmit={handleRegister} >
  
              <div className='grid place-items-center '>
                <p className='text-[28px] font-semibold tracking-wide'>Create Suprr link
                <span className='px-2 inline-block text-primary'><FiTrendingUp /></span>
                </p>
                {/* <p className='text-[26px] -mt-2'>to get started</p> */}
  
              </div>
              <div className='grid place-items-center grid-flow-row gap-4 mt-10 '>
  
                <input
                  className="input input-bordered input-primary tracking-wide text-base input-md w-full max-w-xs"
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
  
                <input
                  className="input input-bordered input-primary tracking-wide text-base input-md w-full max-w-xs"
                  value={password}
                  onChange={e => setPass(e.target.value)}
                  type="text"
                  required
                  placeholder="Create password"
                />
  
                <input type="username"
                  className="input input-bordered input-primary tracking-wide text-base input-md w-full max-w-xs"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  placeholder="Create username"
                  required
                />
                <div className='grid grid-flow-col gap-3  '>
                  {
                    avatar.length === 0 ?
                      <Image className='rounded-full ml-4 lg:ml-10 ' src={user} height={50} width={50} alt='' />
                      :
                      <Image className='rounded-full ml-4 lg:ml-10 ' src={avatar} height={50} width={50} alt='' />
                  }
  
                  <input type="file" onChange={handleImage} id="formupload" name="avatar" className="file-input file-input-bordered text-primary text-sm  w-5/6 max-w-xs" required />
                </div>

  
                <a className=" text-[13px] link-secondary -mt-3 text-start">* Image less than 1 MB</a>
              </div>
              <div className='my-4 '>
                <p className="btn btn-ghost btn-primary normal-case text-lg lg:text-lg font-medium tracking-wide">
                  <span className='mx-1'>
                    <Image src={power} height={25} width={25} alt="" />
                  </span>
                  suprr.link/
                  <span className='mx-[2px]  saturate-150 font-medium  tracking-wide'>
                    { username}
                  </span>
  
                </p>
              </div>
              {/* <p className='my-3 mx-[6px] text-[13px]'>⚡username will we the same as your link</p> */}
              <div className='mx-[18px] grid place-items-center '>
                {
                  loading ?
                    <button type='submit' className={`btn btn-wide btn-primary  tracking-wide btn-md`}>
                      <ReactLoading type='spin' className='-mt-2 p-4' color="#fff" />
                    </button>
                    :
                    <button type='submit' className={`btn btn-wide btn-primary tracking-wide btn-md`}>Sign Up
                                        <span className='px-1'><FiTrendingUp /></span>

                    </button>
                }
              </div>
              <div className='grid place-items-center mt-2'>
                <p className='text-[14px]'>or</p>
                <Link href="/login">
                  <p className="link link-primary">Sign In</p>
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

export default RegisterContainer