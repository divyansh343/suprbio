import React, { useEffect, useState } from 'react'
import { getCookie, isAuth, signOut, toastify } from '../../utils/setCookie';
import Router, { useRouter } from 'next/router';
import axios from 'axios';
import ViewLayout from '../Layout/ViewLayout';
import UserNav from '../Layout/UserNav'
import LoadingScreen from '../containers/LoadingScreen';
import Image from 'next/image';

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

    axios(config)
      .then(function (response) {
        setLoading(true)
        console.log(response.data.avatar.url);
        setUser(response.data);
        setLoading(false)
      })
      .catch(function (error) {
        toastify("user not exist")
      });
  }

  useEffect(() => {
    isAuth() === true ? setAuthenticated(true) : setAuthenticated(false)
    getUserDetails();

  }, [])


  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
    console.log(file);
  }

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    }
  }

  //submit the form
  const submitForm = async (e) => {
    e.preventDefault()
    var data = JSON.stringify({
      "name": "Divyansh Pal",
      "bio": "Social Media Manager & Consultant 🤓 | I help brands and entrepreneurs succeed on social media 🚀 | Proud whippet owner 🐶",
      "theme": "luxury",
      avatar
    });

    var config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: 'http://localhost:3000/api/profile',
      headers: {
        'Authorization': `Bearer ${getCookie()}`
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  // console.log(user.avatar.url)
  if (isAuthenticated) {
    console.log(myUser);
    return (
      <div>
        <html data-theme="winter">
          <UserNav />
          <div>

            fdsfdfdsfds        </div>

          {/* <span onClick={signOut}>log out</span> */}
        </html>
      </div>
    )

  } else {
    <div>
      logged out
    </div>
  }
}


