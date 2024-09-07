import { createContext, useContext, useEffect, useState } from "react";

const ExampleContext = createContext();
const Exampleprovider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [Courses, setCourses] = useState([]);


  useEffect( () => {
    const fetchCourses = async () => {
        try {
            const res = await fetch('/courses/');
            const data = await res.json();
            console.log(data);
            setCourses(data);
        } catch (error) {
            console.log ('Error fetching data', error);
        }
    }
     
    fetchCourses();
  }, []); 
  // example of fetching all posts (read)
  useEffect(() => {
    fetchpost();
  }, []);

  const fetchpost = async () => {
    try {
      const response = await fetch("/docs");
      const data = await response.json();
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };
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

  return (
    <ExampleContext.Provider
      value={{
        posts,
        post,
        fetchpost,
        createPost,
        Courses,
      }}
    >
      {children}
    </ExampleContext.Provider>
  );
};

const useExampleContext = () => {
  return useContext(ExampleContext);
};
export { Exampleprovider, useExampleContext };