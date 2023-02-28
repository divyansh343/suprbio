import React from 'react'

const SocialBlock = (eSocials, handleSocialChange) => {
  
  return (
    <>
      <div className='grid place-items-center'>

        <div className="form-control w-full max-w-xs mt-8">
          <label className="label">
            <span className="label-text font-medium text-base">Site</span>
          </label>
          <input id='site' type="text" onChange={handleSocialChange} value={eSocials.site} placeholder="twitter address" className="input input-bordered input-secondary input-sm  w-full max-w-xs" />
        </div>
        <div className="form-control w-full max-w-xs mt-8">
          <label className="label">
            <span className="label-text font-medium text-base">Twitter</span>
          </label>
          <input id='twitter' type="text" onChange={handleSocialChange} value={eSocials.twitter} placeholder="twitter address" className="input input-bordered input-secondary input-sm  w-full max-w-xs" />
        </div>
        <div className="form-control w-full max-w-xs mt-2">
          <label className="label">
            <span className="label-text font-medium text-base">Instagram</span>
          </label>
          <input id='instagram' type="text" onChange={handleSocialChange} value={eSocials.instagram} placeholder="name" className="input input-bordered input-secondary input-sm  w-full max-w-xs" />
        </div>
        <div className="form-control w-full max-w-xs mt-2">
          <label className="label">
            <span className="label-text font-medium text-base">Instagram</span>
          </label>
          <input id='instagram' type="text" onChange={handleSocialChange} value={eSocials.instagram} placeholder="name" className="input input-bordered input-secondary input-sm  w-full max-w-xs" />
        </div>
        <div className="form-control w-full max-w-xs mt-2">
          <label className="label">
            <span className="label-text font-medium text-base">Instagram</span>
          </label>
          <input id='instagram' type="text" onChange={handleSocialChange} value={eSocials.instagram} placeholder="name" className="input input-bordered input-secondary input-sm  w-full max-w-xs" />
        </div>
        <div className="form-control w-full max-w-xs mt-2">
          <label className="label">
            <span className="label-text font-medium text-base">Instagram</span>
          </label>
          <input id='instagram' type="text" onChange={handleSocialChange} value={eSocials.instagram} placeholder="name" className="input input-bordered input-secondary input-sm  w-full max-w-xs" />
        </div>

      </div>

    </>
  )
}

export default SocialBlock