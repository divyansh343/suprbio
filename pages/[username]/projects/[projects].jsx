import axios from 'axios';
import React from 'react'

const index = ({username, projects}) => {
  // console.log(mPosts);
  // console.log(mFeed);
  // console.log(data);
  // if (isUser) {
  return (
    <div>got uset {username} {projects}</div>
  )
  // } else {
  //   <p>hagdiya</p>
  // }
}

export async function getServerSideProps(context) {
  const {
    username, projects
  } = context.query
console.log(username)
console.log(projects)
  // var config = {
  //   method: 'get',
  //   url: `${process.env.PUBLIC_NEXT_HOST}/api/profile/medium?mediumid=@${medium}`,
  // };
  // let result
  // axios(config)
  //   .then(function (response) {
  //     result = JSON.stringify(response)
  //   })
  //   .catch(function (error) {
  //     console.log("bad request");
  //   });

  return {
    props: {
      username,
      projects
      // data : result
      // isUser,
      // mPosts: response.data.posts,
      // mUser: response.data.user
    }
  }
}

export default index