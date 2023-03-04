import {
  useEffect
} from "react"
import {
  toast
} from "react-hot-toast"
import Router from 'next/router';


export const setCookie = (value) => {
  localStorage.setItem('token', value)
  console.log('token set as cookie!!')
}

export const getCookie = () => {
  let token = localStorage.getItem('token')
  return token;
}
export const isAuth = () => {
  if (getCookie() !== null) {
    return true
  } else {
    return false
  }
}

// export const CheckAuthenticated = (setAuthenticated) => {
//   useEffect(() => {
//     if (getCookie() !== null) {
//       setAuthenticated(true)
//     } else {
//       setAuthenticated(false)
//     }
//   }, [setAuthenticated])
// }


export const signOut = () => {
  localStorage.removeItem("token");
  Router.push('/login')
  toastify("user logged out")
}

export const toastify = (msg) => {
  toast.success(msg);
}

export const getMyDate = (createdAT) => {
  var d = new Date(createdAT);
  var date = d.getDate();
  var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
  var year = d.getFullYear();
  var newDate = date + "/" + month + "/" + year;
  return newDate
}