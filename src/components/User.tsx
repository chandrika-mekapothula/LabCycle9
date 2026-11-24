// import React from 'react'
// import { useParams } from 'react-router-dom'
// import { users } from '../data/UserData';
// import NotFound from './NotFound';

// const User = () => {
//     const {id}=useParams<{id:string}>();
//     const checkUser=users.find(
//         (user)=>user.id===Number(id)
//     )
//   return (
//    <>
//    {
//     checkUser ? (
//         <div><h1>{checkUser.id}-{checkUser.name}</h1></div>
//     ):(<NotFound/>)
//    }
//    </>
//   )
// }

// export default User