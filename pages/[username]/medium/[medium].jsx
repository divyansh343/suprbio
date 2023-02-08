import axios from 'axios';
import React from 'react'

const index = ({data}) => {
  // console.log(mPosts);
  // console.log(mFeed);
  console.log(data);
  // if (isUser) {
  return (
    <div>got uset </div>
  )
  // } else {
  //   <p>hagdiya</p>
  // }
}

export async function getServerSideProps(context) {
  const {
    medium
  } = context.query

  var config = {
    method: 'get',
    url: `${process.env.PUBLIC_NEXT_HOST}/api/profile/medium?mediumid=@${medium}`,
  };
  let result
  axios(config)
    .then(function (response) {
      result = JSON.stringify(response)
    })
    .catch(function (error) {
      console.log("bad request");
    });

  return {
    props: {
      data : result
      // isUser,
      // mPosts: response.data.posts,
      // mUser: response.data.user
    }
  }
}

export default index