import React from 'react'
import { useState } from 'react';

export const ProjectsEditModal = ({ setProjectsModal, item, eProjects }) => {
  const [title, setTitle] = useState(item.title)
  const [link, setLink] = useState("https://" + item.link)
  const [description, setDescription] = useState(item.description)
  const [status, setStatus] = useState(item.status)

  const handleSubmit = () => {
    eProjects[item.id] = { id: item.id, title: title, link: link, description: description, status: status }
    setProjectsModal(false)
    setTitle("")
    setLink("")
    setDescription("")
    setStatus("")
  }
  const cancelModal = () => {
    setProjectsModal(false)
    setTitle("")
    setLink("")
    setDescription("")
    setStatus("")
  }
  return (
    <>
      <section>
        <div
          className="fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-base-300  px-4 py-5"
        >
          <div
            className="w-full max-w-[570px] rounded-[4px] bg-base-100 py-8 px-8 text-center md:py-[60px] md:px-[70px]"
          >
            <div className="form-control w-full max-w-xs mt-2 ">
              <label className="label">
                <span className="label-text font-medium text-base">Title</span>
              </label>
              <input type="text" onChange={e => setTitle(e.target.value)} value={title} placeholder="title here" className="input input-bordered input-primary  w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs mt-2 pb-8">
              <label className="label">
                <span className="label-text font-medium text-base">Link</span>
              </label>
              <input type="text" onChange={e => setLink(e.target.value)} value={link} placeholder="https://www.name.com/" className="input input-bordered input-primary  w-full max-w-xs" />
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-1/2 px-3">
                <button
                  onClick={cancelModal}
                  className="text-dark block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                >
                  Cancel
                </button>
              </div>
              <div className="w-1/2 px-3">
                <button
                  onClick={handleSubmit}
                  className="bg-primary border-primary block w-full rounded-lg border p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
                >
                  Save Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
