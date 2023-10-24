"use client";
import React from "react";
import { useState } from "react";

const NewPost = ({ 
    addPostInParent 
}) => {
  const [postObject, setPostObject] = useState({
    userId: "",
    message: "",
    image: "",
    likes: "",
    shares: "",
  });
  return (
    <form className="flex flex-col justify-center gap-4 p-4"
      onSubmit={(event) => {
        event.preventDefault();
        addPostInParent(postObject);
        setPostObject({
          userId: "",
          title: "",
          message: "",
          image: "",
          likes: "",
          shares: "",
        });
      }}
    >
       <input
        type="text"
        placeholder="Add Title"
        className="p-2 rounded-xl border-2 border-gray-600"
        onChange={(event) => {
          setPostObject({ ...postObject, title: event.target.value });
        }}
        value={postObject.title}
      />
      <input
        type="text"
        placeholder="Your Message"
        className="p-2 rounded-xl border-2 border-gray-600"
        onChange={(event) => {
          setPostObject({ ...postObject, message: event.target.value });
        }}
        value={postObject.message}
      />
      <input
        type="text"
        placeholder="Upload Image"
        className="p-2 rounded-xl border-2 border-gray-600"
        onChange={(event) => {
          setPostObject({ ...postObject, image: event.target.value });
        }}
        value={postObject.image}
      />
      <div className="flex justify-center">
      <button className="bg-cyan-300 p-2 rounded-full w-fit">
        Share Post
      </button>
      </div>
    </form>
  );
};

export default NewPost;
