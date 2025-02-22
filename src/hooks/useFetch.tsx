import { useState, useEffect, use } from "react";
import { Post, User, PostWithUser } from "../context/types";
import { AppContext } from '../context/AppContext';

const postUrl = `https://jsonplaceholder.typicode.com/posts`;
const usersUrl = `https://jsonplaceholder.typicode.com/users`;

function useFetch() {
  const [data, setData] = useState({});
  const context = use(AppContext);
  const { setError } = context;

  const mergePostsWithUsers = (posts: Post[], users: User[]): PostWithUser[] => {
    //Here, I merge current post with the user who wrote it. 
    return posts.map( (post: Post) => {
      const user = users.find(( user: User) => user.id === post.userId);
      return { ...post, user } as PostWithUser;
    });
  };

  const groupPosts = (posts: PostWithUser[]) => {
    //Here, I group all posts by userId and create an object with userId as the key.    
    //This step is necessary because of the accordion design and grouping logic.  
    return posts.reduce((acc, post) => {
      const userId = post.userId;
      if (!acc[userId]) {
        acc[userId] = [];
      }
      acc[userId].push(post);
      return acc;
    }, {} as Record<number, PostWithUser[]>);
  }

  useEffect(() => {
    //Here I use AbortController API to cancel ongoing fetch requests;
    const abortController = new AbortController();
    const signal = abortController.signal;

    Promise.all([
      fetch(postUrl, {signal}).then(response => response.json()),
      fetch(usersUrl, {signal}).then(response => response.json())
    ]).then(([posts, users]) => { 
        const postsUsersList = mergePostsWithUsers(posts, users); 
        const groupedPosts = groupPosts(postsUsersList);
        setData(groupedPosts);
    }).catch((err) => {
      if(err.name !== 'AbortError'){
        setError(err)
      }
    });

    return () => {
      abortController.abort();
    };

  }, []);

  return data;
}

export default useFetch;
