"use client";
import Title from "@/components/typography/Title";
import Posts from "@/components/posts/Posts";
import NewPost from "@/components/posts/NewPost";
import Message from "@/components/typography/Message";
import { useState, useEffect } from "react";
import Navigation from "@/components/navigation/Navigation";

export default function Home() {
  

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const addPostHandler = (post) => {
    const isValidPost = (post.name && post.message) || post.image;
    if (!isValidPost) {
      setError("Please fill all of the fields");
      setTimeout(() => {
        setError(null);
      }, 3000);
      return;
    } else {
      setPosts([...posts, post]);
      setSuccess("Post shared!");
      setTimeout(() => {
        setSuccess(null);
      }, 3000);
      localStorage.setItem("posts", JSON.stringify([...posts, post]));
    }
  };
  useEffect(() => {
    setPosts(JSON.parse(localStorage.getItem("posts")) || []);
  }, []);

  return (
    <>
      {error && <Message messageType="error" messageContent={error} />}
      {success && <Message messageType="success" messageContent={success} />}
      <main className="flex overflow-clip w-screen min-h-screen flex-col items-center justify-between p-24 bg-gray-600">
      <Title text="DOOFENSHMIRTZ EVIL INC." />
      <Navigation />
      <div className="flex flex-wrap gap-4">
        {posts?.map((post) => {
          return <Posts {...post} key={post.id} />;
        })}
        </div>
        <NewPost
          addPostInParent={(post) => {
            addPostHandler(post);
          }}
        />
      </main>
    </>
  );
}
