import Image from 'next/image'
import React, { useState } from 'react'
import UserNav from '../Layout/UserNav'
import power from '../../assets/images/power.png'
import { getCookie, signOut, toastify } from '../../utils/setCookie'
import { options } from '../../utils/theme'
import LinkCard from '../links/LinkCard'
import { LinksEditModal } from './LinksEditModal'
import axios from 'axios'
import ReactLoading from "react-loading";
import Link from 'next/link'
import deleteImg from '../../assets/images/delete.png'
import editImg from '../../assets/images/edit.png'
// import cloudinary from '../../utils/cloudinary'
import { CiWavePulse1 } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import { FiEdit, FiTrendingUp } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineArticle } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import { ProjectsEditModal } from './ProjectsEditModal'


const UserDetails = ({ name, avatar, bio, theme, links_text, links, socials, gallery_text, gallery, username, socialPosition, visitorCount, projects }) => {

  const [showState, setShowState] = useState(0)
  const [ename, setEName] = useState(name)
  const [etheme, setEtheme] = useState(theme)
  const [esocialPosition, setSocialPosition] = useState(socialPosition)
  const [eavatar, setEavatar] = useState([]);
  const [ebio, setEbio] = useState(bio)
  const [eLinksText, setELinks] = useState(links_text)
  const [eLinks, setElinksArray] = useState(links);
  const [eGalleryText, setEGallerytext] = useState(gallery_text)
  const [eSocials, setSocials] = useState(socials);
  const [eProjects, setEprojects] = useState(projects);

  // loading
  const [loadingProfileSave, setLoadingProfileSave] = useState(false)
  const [loadingAvatarSave, setLoadingAvatarSave] = useState(false)
  const [loadingSocialSave, setLoadingSocialSave] = useState(false)
  const [loadingLinksSave, setLoadingLinksSave] = useState(false)


  // modal
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState({})
  
  // projects Modal
  const [showProjectsModal, setProjectsModal] = useState(false)
  const [projectsModalData, setProjectsModalData] = useState({})

  //socials

  const handleChange = (e) => {
    setEtheme(e.target.value);
  }
  const handlePosition = (e) => {
    setSocialPosition(e.target.value);
  }

  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
    // console.log(file);
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
      "socialPosition": esocialPosition,
      "socials": {
        "site": eSocials.site,
        "twitter": eSocials.twitter,
        "instagram": eSocials.instagram,
        "linkdin": eSocials.linkdin,
        "youtube": eSocials.youtube,
        "spotify": eSocials.spotify,
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
    setLoadingSocialSave(true)
    axios(config)
      .then(function (response) {
        toastify("Social links saved")
        setLoadingSocialSave(false)
        // console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // console.log(error);
        setLoadingSocialSave(false)
      });

  }

  const saveProfile = () => {
    // console.log(eavatar);
    const data = {
      "name": ename,
      "bio": ebio,
      "theme": etheme,
    }

    var config = {
      method: 'put',
      url: `${process.env.NEXT_PUBLIC_HOST}api/profile`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getCookie()}`
      },
      data: data
    };
    setLoadingProfileSave(true)
    axios(config)
      .then(function (response) {
        // console.log(response.data);
        setLoadingProfileSave(false)
        toastify("profile updated")
      })
      .catch(function (error) {
        setLoadingProfileSave(false)
        // console.log(error);
      });
  }
  const saveAvatar = () => {
    console.log(eavatar);
    if (eavatar.length === 0) {
      toastify("choose avatar first")
    } else {
      var config = {
        method: 'put',
        url: `${process.env.NEXT_PUBLIC_HOST}api/profile/avatar`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getCookie()}`
        },
        data: {
          "avatar": eavatar
        }
      };
      setLoadingAvatarSave(true)
      axios(config)
        .then(function (response) {
          // console.log(response.data);
          setLoadingAvatarSave(false)
          toastify("Avatar updated")
        })
        .catch(function (error) {
          setLoadingAvatarSave(false)
          // console.log(error);
        });
    }
  }

  const SaveLinks = () => {
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
      data: data
    };
    setLoadingLinksSave(true)
    axios(config)
      .then(function (response) {
        setLoadingLinksSave(false)
        toastify("links updated sucessfully")
      })
      .catch(function (error) {
        setLoadingLinksSave(false)
        // console.log(error);
      });
  }

  const handleRemoveItem = i => {
    const nl = eLinks.filter(item => item.id !== i)
    // console.log(nl);
    setElinksArray(nl);
  }

  const AddLink = () => {
    let nextId = eLinks.length;
    setElinksArray([
      ...eLinks,
      { id: nextId++, title: '', url: '' }
    ])
  }

  const openMyMan = (item) => {
    setShowModal(true)
    setModalData(item)
  }

  const openMyProjectsModal = (item) => {
    setProjectsModal(true)
    setProjectsModalData(item)
  }

  const soptions = [
    {
      label: "Top",
      value: "top",
    },
    {
      label: "Bottom",
      value: "bottom",
    },
  ]

  // const setFileToBaseGal = (file) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = async() => {
  //     // setEavatar(reader.result);
  //     const result = await cloudinary.uploader.upload(reader.result, {
  //       folder: "gallery",
  //     })
  //     let nextId = eGallery.length;
  //     setEGalleryArray([
  //       ...eGallery,
  //       { id: nextId++, img_title: '', imgUrl: result.secure_url }
  //     ])

  //   }

  // }

  // const addImage = (e) => {
  //   const file = e.target.files[0];
  //   setFileToBaseGal(file);
  // }

  return (
    <>
      <body data-theme={"light"} >

        <UserNav username={username} avatar={avatar?.url} />
        <div className='mx-[20px] lg:mx-[150px] py-[20px] ' >
          <div className="tabs tabs-boxed mb-3">
            <p onClick={() => setShowState(0)} className={`tab  ${showState === 0 ? "tab-active" : null}`}>
              <span className={`px-1 ${showState === 0 ? "text-base-100" : "text-accent"} inline-block  `}><CgProfile /></span>Profile</p>
            <p onClick={() => setShowState(2)} className={`tab  ${showState === 2 ? "tab-active" : null}`}>
              <span className={`px-1 ${showState === 2 ? "text-base-100" : null} inline-block  `}><MdOutlineArticle /></span>Projects
            </p>
            <p onClick={() => setShowState(1)} className={`tab  ${showState === 1 ? "tab-active" : null}`}>                 <span className={`px-1 ${showState === 1 ? "text-base-100" : null} inline-block  `}><FiTrendingUp /></span>Analytics
            </p>
            <p onClick={() => setShowState(3)} className={`tab  ${showState === 3 ? "tab-active" : null}`}>
              <span className={`px-1 ${showState === 3 ? "text-base-100" : null} inline-block  `}><MdOutlineArticle /></span>Blogs
            </p>
            {/* <p onClick={() => setShowState(3)} className={`tab  ${showState === 3 ? "tab-active" : null}`}>Projects</p> */}
          </div>
          {
            showState === 0 ? <>
              <div className='grid lg:grid-cols-2'>
                <div className="col-span-1">
                  <div className=' mt-4 grid grid-cols-4'>
                    <div className='hidden lg:block col-span-1'></div>
                    <div className='col-span-2 lg:col-span-1 '>
                      <div className='grid grid-cols-2 '>
                        <div className='grid place-items-start  ml-5 lg:-ml-4'>
                          <section>
                            <div class="flex gap-4 mb-4">
                              <div className=''>
                                <div className="avatar relative ">
                                  <div className=" w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    {
                                      eavatar.length === 0 ?
                                        <Image src={avatar?.url} height={50} width={50} alt="" />
                                        :
                                        <Image src={eavatar} height={50} width={50} alt='' />
                                    }
                                  </div>
                                </div>
                              </div>
                              <div class="space-y-1 flex-1">

                                <div>
                                  <div className='grid grid-flow-row lg:ml-6'>

                                    <label htmlFor="my-drawer" className="link drawer-button no-underline">@{username}</label>
                                    <input onChange={handleImage} type="file" className="file-input file-input-bordered file-input-xs w-5/6 max-w-xs my-1" />
                                    <a className=" text-[13px] link-secondary ">*Image less than 1 mb.</a>

                                    <div>
                                      <a href={`/${username}`} target="_blank" rel='noreferrer' className="btn btn-primary font-medium btn-sm m-[0.2px] normal-case tracking-wide">Preview</a>
                                    </div>
                                    <div>
                                      {
                                        loadingAvatarSave ?
                                          <button className="btn btn-primary btn-sm my-1">
                                            <ReactLoading type='spin' className='-mt-4 p-5' color="#fff" />
                                          </button>
                                          :
                                          <button onClick={saveAvatar} className="btn btn-primary font-medium btn-sm my-1 normal-case tracking-wide">Save Avatar</button>
                                      }
                                    </div>

                                  </div>
                                </div>
                              </div>
                            </div>

                          </section>
                        </div>
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
                        <option disabled selected>Choose Theme?</option>
                        {options.map((option) => (
                          <>
                            <option value={option.value}>{option.label}</option>
                          </>
                        ))}

                      </select>
                    </div>

                    <div className='mt-4'>
                      {
                        loadingProfileSave ?
                          <button className={`btn btn-wide btn-primary  tracking-wide btn-md`}>
                            <ReactLoading type='spin' className='-mt-2 p-4' color="#fff" />
                          </button>
                          :
                          <button onClick={saveProfile} className="btn btn-wide text-lg  font-medium normal-case btn-primary">Save profile</button>
                      }

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
                    <div className="form-control w-full max-w-xs mt-8">
                      <label className="label">
                        <span className="label-text font-medium text-base">Social Icon Position</span>
                      </label>
                      <select value={esocialPosition} onChange={handlePosition}
                        className="select select-primary w-full max-w-xs select-sm ">
                        <option disabled selected>Position</option>
                        {soptions.map((option) => (
                          <>
                            <option value={option.value}>{option.label}</option>
                          </>
                        ))}

                      </select>
                    </div>
                    <div className="form-control w-full max-w-xs mt-5">
                      <label className="label">
                        <span className="label-text font-medium text-base">Site</span>
                      </label>
                      <input id='site' type="text" onChange={handleSocialChange} value={eSocials?.site} placeholder="site address" className="input input-bordered input-primary   input-sm  w-full max-w-xs" />
                    </div>
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
                      <input id='instagram' type="text" onChange={handleSocialChange} value={eSocials?.instagram} placeholder="Instagram address" className="input input-bordered input-primary  input-sm  w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs mt-2">
                      <label className="label">
                        <span className="label-text font-medium text-base">Spotify</span>
                      </label>
                      <input id='spotify' type="text" onChange={handleSocialChange} value={eSocials?.spotify} placeholder="Spotify link" className="input input-bordered input-primary  input-sm  w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs mt-2">
                      <label className="label">
                        <span className="label-text font-medium text-base">Youtube</span>
                      </label>
                      <input id='youtube' type="text" onChange={handleSocialChange} value={eSocials?.youtube} placeholder="youtube address" className="input input-bordered input-primary  input-sm  w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs mt-2">
                      <label className="label">
                        <span className="label-text font-medium text-base">Linkdin</span>
                      </label>
                      <input id='linkdin' type="text" onChange={handleSocialChange} value={eSocials?.linkdin} placeholder="linkdin address" className="input input-bordered input-primary  input-sm  w-full max-w-xs" />
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
                      {
                        loadingSocialSave ?
                          <button type='submit' className={`btn btn-wide btn-primary  tracking-wide btn-md`}>
                            <ReactLoading type='spin' className='-mt-2 p-4' color="#fff" />
                          </button>
                          :
                          <button onClick={saveSocialLinks} className="btn btn-wide text-lg  font-medium normal-case btn-primary">Save   Socials</button>
                      }
                    </div>
                  </div>

                </div>

                <div className="col-span-1">
                  <div className='ml-[20px] lg:ml-[86px] mt-8'>
                    <div className="text-lg font-medium breadcrumbs underline">
                      <ul>
                        <li><a>Profile</a></li>
                        <li><a>Links</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className='grid place-items-center'>
                    <div className="form-control w-full max-w-xs mt-8">
                      <label className="label">
                        <span className="label-text font-medium text-base">Links Title</span>
                      </label>
                      <input type="text" onChange={e => setELinks(e.target.value)} value={eLinksText} placeholder="name" className="input input-bordered input-primary  w-full max-w-xs" />
                    </div>
                  </div>
                  <div className='mx-[10px] mt-[20px] lg:mx-[80px]'>
                    <ul class="space-y-4">

                      {
                        eLinks?.map(item => (
                          <>

                            <div id={item?.id}>

                              <div class="cursor-pointer bg-base-200 hover:bg-base-300 duration-200 space-y-1 p-4 group hover:scale-[1.02]" href={item?.link} target="_blank" rel='noreferrer'><div class="flex items-center gap-2 flex-wrap">
                                {/* <img src="https://d3m8mk7e1mf7xn.cloudfront.net/642c72c18380eb2be1733917/1680639583867artist-palette_1f3a8.png" alt="Freelance Design Logo" class="w-5 h-5  duration-200 drop-shadow-sm object-cover group-hover:-rotate-12 delay-100" width="20" height="20"> */}
                                <p class="font-medium text-md mr-auto">
                                  {
                                    item?.title === "" ? "Empty" :
                                      item?.title
                                  }
                                </p>

                              </div>
                                <p className='text-sm'> {
                                  item?.url
                                }
                                </p>
                                <div className='grid place-items-end'>
                                  <span className='font-thin'>
                                    <button onClick={() => openMyMan(item)} className="text-xl text-secondary">
                                      <FiEdit />
                                      {/* <Image className='mx-1 hover:drop-shadow' src={editImg} height={25} width={25} alt="" /> */}
                                    </button>
                                    <button onClick={() => handleRemoveItem(item.id)} className="text-xl mx-2">
                                      {/* <Image className='mx-1 hover:drop-shadow' src={deleteImg} height={25} width={25} alt="" /> */}
                                      <MdDelete />
                                    </button>
                                  </span>
                                </div>
                              </div>

                            </div>
                            {
                              showModal ?
                                <LinksEditModal eLinks={eLinks} setElinksArray={setElinksArray} item={modalData} setShowModal={setShowModal} />
                                : null
                            }
                          </>
                        ))
                      }
                    </ul>
                    <button onClick={AddLink} className="btn btn-block btn-secondary mt-4">Add Link</button>
                    {
                      loadingLinksSave ?
                        <button type='submit' className={`btn btn-block mt-1 btn-secondary`}>
                          <ReactLoading type='spin' className='-mt-2 p-4' color="#fff" />
                        </button>
                        :

                        <button onClick={SaveLinks} className="btn btn-block mt-1 btn-secondary">Save Links</button>
                    }
                  </div>

                </div>
              </div>
              <div className='grid lg:grid-flow-col place-items-center mt-10 gap-2'>
                <Link href="/user/change_username">
                  <button className="btn btn-primary btn-wide font-medium btn-sm normal-case tracking-wide">Change Username</button>
                </Link>
                <Link href="/user/change_password">
                  <button className="btn btn-secondary btn-wide font-medium btn-sm  normal-case tracking-wide">Change password</button>
                </Link>
                <Link href="/user/delete_user">
                  <button className="btn btn-wide btn-error btn-sm  ">
                    Delete Account</button>
                </Link>
              </div>
            </> : null
          }
          {/* stats */}
          {
            showState === 1 ?
              <>
                <div className="stats shadow grid place-items-center my-5 lg:mx-10">
                  <div className="stat">
                    <div className="stat-figure text-primary text-4xl">
                      <FiTrendingUp />
                    </div>
                    <div className="stat-title">Page Views</div>
                    <div className="stat-value text-primary">{visitorCount}<span className='inline-block text-lg'> <AiOutlinePlus /> </span>
                    </div>
                    <div className="stat-desc mt-1">21% more than last month</div>
                  </div>
                </div>
              </> : null
          }
          {/* stats */}
          {
            showState === 2 ?
              <>
                <ul class="space-y-4 lg:mx-44">

                  {
                    eProjects?.map(item => (
                      <>

                        <div id={item?.id}>

                          <div class="cursor-pointer bg-base-200 hover:bg-base-300 card duration-200 space-y-1 p-4 group hover:scale-[1.02]" ><div class="flex items-center gap-2 flex-wrap">
                            {/* <img src="https://d3m8mk7e1mf7xn.cloudfront.net/642c72c18380eb2be1733917/1680639583867artist-palette_1f3a8.png" alt="Freelance Design Logo" class="w-5 h-5  duration-200 drop-shadow-sm object-cover group-hover:-rotate-12 delay-100" width="20" height="20"> */}
                            <p class="font-medium text-md mr-auto">
                              {
                                item?.title === "" ? "Empty" :
                                  item?.title
                              }
                            </p>
                            <div class=" flex gap-2">
                              <span class="badge badge-sm whitespace-nowrap badge-info ">
                                {item?.status}
                              </span>
                            </div>
                          </div>
                            <p className='text-sm link-primary'> {
                              item?.link
                            }
                            </p>
                            <p className='text-sm'> {
                              item?.description
                            }
                            </p>
                            <div className='grid place-items-end'>
                              <span className='font-thin'>
                                <button onClick={() => openMyProjectsModal(item)} className="text-xl text-secondary">
                                  <FiEdit />
                                  {/* <Image className='mx-1 hover:drop-shadow' src={editImg} height={25} width={25} alt="" /> */}
                                </button>
                                <button onClick={() => handleRemoveItem(item.id)} className="text-xl mx-2">
                                  {/* <Image className='mx-1 hover:drop-shadow' src={deleteImg} height={25} width={25} alt="" /> */}
                                  <MdDelete />
                                </button>
                              </span>
                            </div>
                          </div>

                        </div>
                        {
                          showProjectsModal ?
                            <ProjectsEditModal eProjects={eProjects} setElinksArray={setEprojects} item={projectsModalData} setProjectsModal={setProjectsModal} />
                            : null
                        }
                      </>
                    ))
                  }
                </ul>
              </>
              : null}
          {
            showState === 3 ?
              <>
                <div className='h-fit flex items-center justify-center mt-44'>
                  <h1 class="mt-5 text-4xl font-bold leading-tight text-primary sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">Coming soon
                    <span className='px-1 inline-block'><CiWavePulse1 /></span>
                  </h1>
                </div>

              </> : null
          }

        </div>

      </body>
    </>
  )
}

export default UserDetails