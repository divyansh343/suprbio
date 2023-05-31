import React from 'react'

const index = ({ username }) => {
  return (
    <div>index {username} all projects</div>
  )
}
export async function getServerSideProps(context) {
  const {
    username
  } = context.query
  console.log(username)
  return {
    props: {
      username
    }
  }
}

export default index