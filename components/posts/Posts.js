"use client";
import React from 'react'
import { useState } from 'react'

        // {
        //     id: "1",
        //     userId: "User1",
        //     message: "Hey guys how are you?!?! this is my first time here",
        //     image: "",
        //     likes: "2",
        //     shares: "1"
        // },
        // {
        //     id: "2",
        //     userId: "User2",
        //     message: "OMG HI WELCOME!!",
        //     image: "",
        //     likes: "1",
        //     shares: ""
        // }
    

const Posts = ({userId, message, image, likes, shares}) => {
  return (
    <div className="flex flex-col gap-4 p-4 w-96 bg-gray-800 rounded-xl">
        <h1>{userId}</h1>
        <img src={image}/>
        <p>{message}</p>
        <div>{likes}</div>
    </div>
  )
}

export default Posts