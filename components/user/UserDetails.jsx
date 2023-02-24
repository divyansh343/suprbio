import Image from 'next/image'
import React, { useState } from 'react'
import UserNav from '../Layout/UserNav'
import power from '../../assets/images/power.png'
import { getCookie, signOut, toastify } from '../../utils/setCookie'
import { options } from '../../utils/theme'
import LinkCard from '../links/LinkCard'
import { LinksEditModal } from './LinksEditModal'
import axios from 'axios'
import Link from 'next/link'

const UserDetails = ({ name, avatar, bio, theme, links_text, links, socials }) => {

  const [ename, setEName] = useState(name)
  const [etheme, setEtheme] = useState(`${theme}`)
  const [eavatar, setEavatar] = useState([]);
  const [ebio, setEbio] = useState(bio)
  const [eLinksText, setELinks] = useState(links_text)
  const [eLinks, setElinksArray] = useState(links);
  const [eSocials, setSocials] = useState(socials);

  // modal
  const [showModal, setShowModal] = useState(false)

  //socials

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

  const handleSocialChange = e => {
    setSocials((eSocials) => (
      {
        ...eSocials,
        [e.target.id]: e.target.value
      }
    )
    )
  }

  const saveSocialLinks = () => {
    var data = {
      "socials": {
        "twitter": eSocials.twitter,
        "instagram": eSocials.instagram,
        "linkdin": eSocials.linkdin,
        "youtube": eSocials.youtube,
        "medium": eSocials.medium,
        "dev": eSocials.dev
      }
    };

    var config = {
      method: 'put',
      url: `${process.env.NEXT_PUBLIC_HOST}api/profile/socials`,
      headers: {
        'Authorization': `Bearer ${getCookie()}`
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        toastify("Social links saved")
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  const retData = () => {
    if (eavatar.length === 0) {
      return {
        "name": ename,
        "bio": ebio,
        "theme": etheme,
      }
    } else {
      return {
        "name": ename,
        "bio": ebio,
        "theme": etheme,
        "avatar": eavatar
      }
    }
  }

  const saveProfile = () => {
    console.log(eavatar);

    var config = {
      method: 'put',
      url: `${process.env.NEXT_PUBLIC_HOST}api/profile`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getCookie()}`
      },
      data: retData()
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        toastify("profile updated")
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const SaveLinks = ()=> {
    var data = {
      "links_text": eLinksText,
      "links": eLinks
    }
    
    var config = {
      method: 'put',
      url: `${process.env.NEXT_PUBLIC_HOST}api/profile/links`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getCookie()}`
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      toastify("links updated sucessfully")
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const handleRemoveItem = i => {
    const nl = eLinks.filter(item => item.id !== i)
    console.log(nl);
    setElinksArray(nl);
  }

  const AddLink = () => {
    let nextId = eLinks.length;
    setElinksArray([
      ...eLinks,
      { id: nextId++, title: '', url: '' }
    ])
  }


  return (
    <>
      <body data-theme={etheme} >

        {/* <UserNav avatar={avatar.url} /> */}

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
                              <Image src={avatar?.url} height={50} width={50} alt="" />
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
                    {/* <input type="file" onChange={handleImage} id="formupload" name="avatar" className="file-input file-input-bordered text-sm  w-5/6 max-w-xs" required /> */}
                    <input onChange={handleImage} type="file" className="file-input file-input-bordered file-input-xs w-5/6 max-w-xs" />

                    <label htmlFor="my-drawer" className="link link-primary drawer-button">{etheme}</label>
                    <Link href="/user/change_username">
                      <p className="link link-primary">Change Username</p>
                    </Link>
                    <Link href="/user/change_password">
                      <p className="link link-primary">Change password</p>
                    </Link>
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
                    <span className="label-text font-medium text-base">Bio - ({ebio?.length} / 160) </span>
                  </label>
                  <textarea onChange={e => setEbio(e.target.value)} value={ebio} placeholder="Bio"
                    rows="6"
                    className="textarea textarea-primary textarea-bordered  overflow-y-auto	text-base textarea-lg w-full " ></textarea>


                </div>

                <div className="form-control w-full max-w-xs mt-8">
                  <label className="label">
                    <span className="label-text font-medium text-base">Theme</span>
                  </label>
                  <select data-theme={etheme} value={etheme} onChange={handleChange}
                    className="select select-primary w-full max-w-xs">
                    <option disabled selected>What is the best TV show?</option>
                    {options.map((option) => (
                      <>
                        <option value={option.value}>{option.label}</option>
                      </>
                    ))}

                  </select>
                </div>

                <div className='mt-4'>

                  <button onClick={saveProfile} className="btn btn-wide text-lg  font-medium normal-case btn-primary">Save profile</button>
                </div>
              </div>

              <div className='ml-[20px] lg:ml-[86px] mt-8'>
                <div className="text-lg font-medium breadcrumbs underline">
                  <ul>
                    <li><a>Profile</a></li>
                    <li><a>Socials</a></li>
                  </ul>
                </div>
                <a className=" text-[13px] link-secondary -mt-3 ">*Optional</a>
              </div>

              <div className='grid place-items-center '>
                <div className="form-control w-full max-w-xs mt-5">
                  <label className="label">
                    <span className="label-text font-medium text-base">Twitter</span>
                  </label>
                  <input id='twitter' type="text" onChange={handleSocialChange} value={eSocials?.twitter} placeholder="twitter address" className="input input-bordered input-primary   input-sm  w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs mt-2">
                  <label className="label">
                    <span className="label-text font-medium text-base">Instagram</span>
                  </label>
                  <input id='instagram' type="text" onChange={handleSocialChange} value={eSocials?.instagram} placeholder="name" className="input input-bordered input-primary  input-sm  w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs mt-2">
                  <label className="label">
                    <span className="label-text font-medium text-base">Linkdin</span>
                  </label>
                  <input id='linkdin' type="text" onChange={handleSocialChange} value={eSocials?.linkdin} placeholder="name" className="input input-bordered input-primary  input-sm  w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs mt-2">
                  <label className="label">
                    <span className="label-text font-medium text-base">Youtube</span>
                  </label>
                  <input id='youtube' type="text" onChange={handleSocialChange} value={eSocials?.youtube} placeholder="name" className="input input-bordered input-primary  input-sm  w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs mt-2">
                  <label className="label">
                    <span className="label-text font-medium text-base">Medium</span>
                  </label>
                  <input id='medium' type="text" onChange={handleSocialChange} value={eSocials?.medium} placeholder="medium" className="input input-bordered input-primary  input-sm  w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs mt-2">
                  <label className="label">
                    <span className="label-text font-medium text-base">Dev</span>
                  </label>
                  <input id='dev' type="text" onChange={handleSocialChange} value={eSocials?.dev} placeholder="Dev" className="input input-bordered input-primary  input-sm  w-full max-w-xs" />
                </div>
                <div className='mt-4'>

                  <button onClick={saveSocialLinks} className="btn btn-wide text-lg  font-medium normal-case btn-primary">Save   Socials</button>
                </div>
              </div>

            </div>

            <div className="col-span-1">
              <div className='grid place-items-center'>
                <div className="form-control w-full max-w-xs mt-8">
                  <label className="label">
                    <span className="label-text font-medium text-base">Links Title</span>
                  </label>
                  <input type="text" onChange={e => setELinks(e.target.value)} value={eLinksText} placeholder="name" className="input input-bordered input-primary  w-full max-w-xs" />
                </div>
              </div>
              <div className='mx-[10px] mt-[20px] lg:mx-[80px]'>
                {
                  eLinks?.map(item => (
                    <>
                      {
                        showModal ?
                          <LinksEditModal eLinks={eLinks} setElinksArray={setElinksArray} item={item} setShowModal={setShowModal} />
                          : null
                      }
                      <div>
                        <div className='saturate-150 border-[0.1px] border-primary hover:shadow hover:scale-105 normal-case  my-3 border-opacity-70 grid  rounded-[7px] px-2 py-3 lg:px-3 '>
                          <div className='text-md lg:text-md  text-start font-medium  tracking-wide '>

                            <p> {
                              item.title === "" ? "Empty" :
                                item.title
                            }
                            </p>
                            <p> {
                              item.url
                            }
                            </p>
                          </div>
                          <div className='grid place-items-end'>
                            <span className='font-thin'>
                              <button onClick={() => setShowModal(true)} className=" btn-secondary font-thin mx-1 btn-xs btn">Edit</button>
                              <button onClick={() => handleRemoveItem(item.id)} className="btn  btn-error font-thin btn-xs">Delete</button>
                            </span>
                          </div>
                        </div>
                      </div>

                    </>
                  ))
                }
                <button onClick={AddLink} className="btn btn-block btn-secondary">Add Link</button>
                <button onClick={ SaveLinks} className="btn btn-block mt-1 btn-secondary">Save Links</button>
              </div>

            </div>

          </div>


        </div>

      </body>
    </>
  )
}

export default UserDetails