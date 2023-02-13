import Image from 'next/image'
import React, { useState } from 'react'
import UserNav from '../Layout/UserNav'
import power from '../../assets/images/power.png'
import { signOut } from '../../utils/setCookie'
import { options } from '../../utils/theme'
const UserDetails = ({ name, avatar, bio, theme }) => {
  const [ename, setEName] = useState(name)
  const [ebio, setEbio] = useState(bio)
  const [etheme, setEtheme] = useState(`${theme}`)
  const [eavatar, setEavatar] = useState([]);


  const handleChange = (e) => {
    setEtheme(e.target.value);
  }

  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
    console.log(file);
  }

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setEavatar(reader.result);
    }

  }


  return (
    <>
      <html data-theme={etheme} class=" ">
        <UserNav avatar={avatar.url} />

        <div className='mx-[20px] lg:mx-[150px] py-[20px] ' >
          <div className='grid lg:grid-cols-2'>
            <div className="col-span-1">

              <div className=' mt-4 grid grid-cols-4'>
                <div className='hidden lg:block col-span-1'></div>
                <div className='col-span-2 lg:col-span-1 '>
                  <div className='grid grid-cols-2 '>
                    <div className='grid place-items-start '>

                      <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          {
                            eavatar.length === 0 ?
                              <Image src={avatar.url} height={50} width={50} alt="" />
                              :
                              <Image src={eavatar} height={50} width={50} alt='' />
                          }

                        </div>
                      </div>

                    </div>


                  </div>
                </div>

                <div className="col-span-2">
                  <div className='grid grid-flow-row mt-3 lg:ml-6'>
                    <input type="file" onChange={handleImage} id="formupload" name="avatar" className="file-input file-input-bordered text-sm  w-5/6 max-w-xs" required />

                    <label htmlFor="my-drawer" className="link link-primary drawer-button">{etheme}</label>
                    <a className="link link-primary">Change Username</a>
                    <a className="link link-primary">Change password</a>
                  </div>
                </div>

              </div>

              <div className='grid place-items-center'>

                <div className="form-control w-full max-w-xs mt-8">
                  <label className="label">
                    <span className="label-text font-medium text-base">Name</span>
                  </label>
                  <input type="text" onChange={e => setEName(e.target.value)} value={ename} placeholder="name" className="input input-bordered input-primary  w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs mt-8">
                  <label className="label">
                    <span className="label-text font-medium text-base">Bio - ({ebio.length} / 160) </span>
                  </label>
                  <textarea onChange={e => setEbio(e.target.value)} value={ebio} placeholder="Bio"
                    rows="6"
                    className="textarea textarea-primary textarea-bordered  overflow-y-auto	text-base textarea-lg w-full " ></textarea>


                </div>

                <div className="form-control w-full max-w-xs mt-8">
                  <label className="label">
                    <span className="label-text font-medium text-base">Name</span>
                  </label>
                  <select value={etheme} onChange={handleChange}
                    className="select select-primary w-full max-w-xs">
                    <option disabled selected>What is the best TV show?</option>
                    {options.map((option) => (
                      <>
                        <option value={option.value}>{option.label}</option>
                      </>
                    ))}

                  </select>
                </div>


              </div>

            </div>

            <div className="col-span-1">

            </div>

          </div>

        </div>
      </html>
    </>
  )
}

export default UserDetails