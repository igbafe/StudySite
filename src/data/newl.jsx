"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ExampleContext = createContext();
const Exampleprovider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});

  // example of fetching all posts (read)
  useEffect(() => {
    fetchpost();
  }, []);

  //   const post ={
  //       title: "foo",
  //       body: "bar",
  //       userId: 1
  //      slug: "foo-bar"
  // }

  const fetchpost = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  //   Httpmethods : GET, POST, PUT, DELETE
  // create post
  const createPost = async (post) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/addpost/",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(post),
        }
      );
      const data = await response.json();
      console.log(data);
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  // update post

  // delete a post
  

  return (
    <ExampleContext.Provider value={
        {
            posts,
            post,
            fetchpost,
            createPost,
        }
    }>
      {children}
    </ExampleContext.Provider>
  );
};

const useExampleContext = () => {
  return useContext(ExampleContext);
};

export { Exampleprovider, useExampleContext };