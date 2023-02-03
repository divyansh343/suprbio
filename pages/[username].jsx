import axios from 'axios'
import React from 'react'
import NoUser from '../components/NoUser'
import Profile from '../components/Profile'
const index = ({
  user, username, userPresent
}) => {
  if (userPresent === false) {
    return (
      <NoUser username={username} />
    )
  } else {
    return (
      <Profile {...user} usersearch={username} />
    )
  }
}

export async function getServerSideProps(context) {
  const {
    username
  } = context.query

  const response = await axios.get(
    `${process.env.PUBLIC_NEXT_HOST}api/bio?username=${username}`
  );

  // console.log(response.data.data);

  // check user exist or not
  const user = response.data.data
  let userPresent = null
  if (response.data.data === null) {
    userPresent = false
  } else {
    userPresent = true
  }

  return {
    props: {
      user,
      userPresent,
      username
    }
  }
}

export default index