import axios from 'axios';
import React from 'react'
import GalleryView from '../../components/gallery/GalleryView';
import NoUser from '../../components/NoUser';

const gallery = ({ userPresent, user, username }) => {
  console.log(userPresent);
  console.log(user);
  console.log(username);

  if (userPresent === false) {
    return (
      <NoUser username={username} />
    )
  } else {
    return (
      <GalleryView {...user} />
    )
  }


}
export async function getServerSideProps(context) {
  const {
    username
  } = context.query

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_HOST}api/profile/gallery?username=${username}`
  );

  // check user exist or not
  let userPresent = null
  if (response.data.sucess === false) {
    userPresent = false
  } else {
    userPresent = true
  }
  const user = response.data

  return {
    props: {
      userPresent,
      user,
      username
    }
  }
}


export default gallery