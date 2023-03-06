import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import ReactLoading from "react-loading";
import React, { useState } from 'react'
import power from '../../assets/images/power.png'
import { setCookie, toastify } from '../../utils/setCookie'
import { useRouter } from 'next/router'
import user from '../../assets/images/user.png'

const RegisterContainer = () => {
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
        // console.log(response.data.token);
        setCookie(response.data.token)
        toastify("user created sucessfully")
        router.push('/profile')
        setloading(false)
      })
      .catch(function (error) {
        setloading(true)
        // console.log("username or email already exist");
        toastify("image less than 1 mb")
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
              {/* <p className='text-[26px] -mt-2'>to get started</p> */}

            </div>
            <div className='grid place-items-center grid-flow-row gap-4 mt-10 '>

              <input
                className="input input-bordered input-accent tracking-wide text-lg input-md w-full max-w-xs"
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email Address"
              />

              <input
                className="input input-bordered input-accent tracking-wide text-lg input-md w-full max-w-xs"
                value={password}
                onChange={e => setPass(e.target.value)}
                type="text"
                required
                placeholder="Password"
              />

              <input type="username"
                className="input input-bordered input-accent tracking-wide text-lg input-md w-full max-w-xs"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Username"
                required
              />
              <div className='grid grid-flow-col gap-3  '>
                {
                  avatar.length === 0 ?
                    <Image className='rounded-full ml-4 lg:ml-10 ' src={user} height={50} width={50} alt='' />
                    :
                    <Image className='rounded-full ml-4 lg:ml-10 ' src={avatar} height={50} width={50} alt='' />
                }

                <input type="file" onChange={handleImage} id="formupload" name="avatar" className="file-input file-input-bordered text-sm  w-5/6 max-w-xs" required />
              </div>

            </div>
            <div className='my-4 '>
              <p className="btn btn-ghost normal-case text-lg lg:text-lg font-medium tracking-wide">
                <span className='mx-1'>
                  <Image src={power} height={25} width={25} alt="" />
                </span>
                unfold.bio/
                <span className='mx-[2px]  saturate-150 font-medium  tracking-wide'>
                  { username}
                </span>

              </p>
            </div>
            {/* <p className='my-3 mx-[6px] text-[13px]'>⚡username will we the same as your link</p> */}
            <div className='mx-[18px] grid place-items-center '>
              {
                loading ?
                  <button type='submit' className={`btn btn-wide btn-secondary  tracking-wide btn-md`}>
                    <ReactLoading type='spin' className='-mt-2 p-4' color="#fff" />
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