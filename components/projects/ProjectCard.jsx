import React from 'react'

// Name
// Link
// Description
// Tags

const ProjectCard = ({ item }) => {
  return (
    <a class="card cursor-pointer bg-base-200 hover:bg-base-300 duration-200 space-y-1 p-4 group hover:scale-[1.02]" href={item?.link} target="_blank" rel='noreferrer'>
      <div class="flex items-center gap-2 flex-wrap">
      {/* <img src="https://d3m8mk7e1mf7xn.cloudfront.net/642c72c18380eb2be1733917/1680639583867artist-palette_1f3a8.png" alt="Freelance Design Logo" class="w-5 h-5  duration-200 drop-shadow-sm object-cover group-hover:-rotate-12 delay-100" width="20" height="20"> */}
      <p class="font-bold mr-auto">{item?.title}</p>
     
    </div>
      <p class="text-sm text-base-content/80">{item?.description}</p>
    </a>
  )
}

export default ProjectCard