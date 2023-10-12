import axios from 'axios'
import React from 'react'
import NoUser from '../../components/NoUser'
import Profile from '../../components/Profile'
import Head from 'next/head';

const index = ({
  user, username, userPresent
}) => {
  if (userPresent === false) {
    return (
      <NoUser username={username} />
    )
  } else {
    return (
      <>
        <Head>
          <title>
            {user.name} | Suprr.link profile
          </title>
          <meta
            name="description"
            content={user.username + " is " + user.bio}
            key="desc"
          />
        </Head>
        <Profile {...user} usersearch={username} />
      </>
    )
  }
}

export async function getServerSideProps(context) {
  const {
    username
  } = context.query
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_HOST}api/bio?username=${username}`
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