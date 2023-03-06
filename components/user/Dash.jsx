import React, { useEffect, useState } from 'react'
import { getCookie, isAuth, signOut, toastify } from '../../utils/setCookie';
import Router, { useRouter } from 'next/router';
import axios from 'axios';
import ViewLayout from '../Layout/ViewLayout';
import UserNav from '../Layout/UserNav'
import LoadingScreen from '../containers/LoadingScreen';
import UserDetails from './UserDetails';

export const Dash = () => {
  const [isAuthenticated, setAuthenticated] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [myUser, setUser] = useState({})
  const router = useRouter()
  const [avatar, setImage] = useState([]);

  const getUserDetails = async () => {
    var config = {
      method: 'get',
      url: `${process.env.NEXT_PUBLIC_HOST}api/me`,
      headers: {
        'Authorization': `Bearer ${getCookie()}`
      },
    };

    setLoading(true)
    axios(config)
      .then(function (response) {
        // console.log(response.data.avatar.url);
        setUser(response.data);
        setLoading(false)
      })
      .catch(function (error) {
        toastify("user not exist")
        setLoading(false)
      });
  }

  useEffect(() => {
    isAuth() === true ? setAuthenticated(true) : setAuthenticated(false)
    getUserDetails();

  }, [])


  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
    // console.log(file);
  }

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    }
  }

  // console.log(user.avatar.url)
  if (isAuthenticated && isLoading === false) {
    // console.log(myUser);
    return (
        <UserDetails {...myUser} />
    )

  } else {
    <div>
      <LoadingScreen />
    </div>
  }
}


