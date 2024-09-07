import { createContext, useContext, useEffect, useState } from "react";

const ExampleContext = createContext();
const Exampleprovider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [Chatbot, setChatbot] = useState([]);

  useEffect(() => {
    const fetchChatbot = async () => {
      try {
        const res = await fetch(
          "http://Studyboosta.onrender.com/docs/chatbot/"
        );
        const data = await res.json();
        console.log(data);
        setC(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchCourses();
  }, []);
  // example of fetching all posts (read)
  useEffect(() => {
    fetchpost();
  }, []);

  const fetchpost = async () => {
    try {
      const response = await fetch("https://studyboosta.onrender.com/docs");
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
        "http://Studyboosta.onrender.com/docs/chatbot/addpost/",
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
        Chatbot,
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
