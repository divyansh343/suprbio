import React, { useEffect, useState } from 'react'
import { getCookie, isAuth, signOut, toastify } from '../../utils/setCookie';
import Router, { useRouter } from 'next/router';
import axios from 'axios';
import ViewLayout from '../Layout/ViewLayout';
import UserNav from '../Layout/UserNav'
import LoadingScreen from '../containers/LoadingScreen';

export const Dash = () => {
  const [isAuthenticated, setAuthenticated] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [myUser, setUser] = useState({})
  const router = useRouter()

  const getUserDetails = async () => {
    var config = {
      method: 'get',
      url: `${process.env.NEXT_PUBLIC_HOST}api/me`,
      headers: {
        'Authorization': `Bearer ${getCookie()}`
      },
    };

    axios(config)
      .then(function (response) {
        setLoading(true)
        console.log(response.data.avatar.url);
        setUser(response.data);
        setLoading(false)
      })
      .catch(function (error) {
        router.push('/register')
        toastify("user not exist")
      });
  }
  useEffect(() => {
    isAuth() === true ? setAuthenticated(true) : setAuthenticated(false)
    getUserDetails();

  }, [])

  // console.log(user.avatar.url)
  if (isAuthenticated) {
    return (
      <div>
        {/* <UserNav user={myUser} /> */}
        <html data-theme="winter">
          {myUser.name}
          {myUser.username}
          {/* {myUser.avatar.url} */}
          <span onClick={signOut}>log out</span>
        </html>
      </div>
    )

  } else {
    <div>
      logged out
    </div>
  }
}


