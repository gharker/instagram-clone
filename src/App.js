import React, { useState, useEffect } from 'react';
import Post from './components/Post';
import { db } from './firebase';
import './App.css';
import BasicModal from './components/BasicModal';

function App() {
  const [posts, setPosts] = useState([]);

  // UseEffect: runs a piece of code based on a specific condition

  useEffect(() => {
    // this is where the code runs
    db.collection('posts').onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
      console.log(posts);
    });
  }, []);

  return (
    <div className="App">
      <div className="app_header">
        <h1 className="app__headerImage">
          f
          <svg
            className="personIcon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <g data-name="people" id="people-26">
              <path d="M16,8.11A3.09,3.09,0,1,0,12.91,5,3.1,3.1,0,0,0,16,8.11Zm0-4.18A1.09,1.09,0,1,1,14.91,5,1.09,1.09,0,0,1,16,3.93Z" />
              <path d="M18,9H14a3.78,3.78,0,0,0-4,3.5v5A2.71,2.71,0,0,0,12,20v6.82A2.1,2.1,0,0,0,14,29h4a2.1,2.1,0,0,0,2-2.18V20a2.71,2.71,0,0,0,2-2.5v-5A3.78,3.78,0,0,0,18,9Zm2,8.5c0,.31-.43.66-1,.66H18v8.66c0,.11,0,.17,0,.18l-3.92,0a.25.25,0,0,1-.07-.2V18.16H13c-.57,0-1-.35-1-.66v-5c0-.83.9-1.5,2-1.5h4c1.1,0,2,.67,2,1.5Z" />
            </g>
          </svg>
          ll
          <svg
            className="personIcon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <g data-name="people" id="people-26">
              <path d="M16,8.11A3.09,3.09,0,1,0,12.91,5,3.1,3.1,0,0,0,16,8.11Zm0-4.18A1.09,1.09,0,1,1,14.91,5,1.09,1.09,0,0,1,16,3.93Z" />
              <path d="M18,9H14a3.78,3.78,0,0,0-4,3.5v5A2.71,2.71,0,0,0,12,20v6.82A2.1,2.1,0,0,0,14,29h4a2.1,2.1,0,0,0,2-2.18V20a2.71,2.71,0,0,0,2-2.5v-5A3.78,3.78,0,0,0,18,9Zm2,8.5c0,.31-.43.66-1,.66H18v8.66c0,.11,0,.17,0,.18l-3.92,0a.25.25,0,0,1-.07-.2V18.16H13c-.57,0-1-.35-1-.66v-5c0-.83.9-1.5,2-1.5h4c1.1,0,2,.67,2,1.5Z" />
            </g>
          </svg>
          n
        </h1>
      </div>
      <BasicModal />
      {posts.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          caption={post.caption}
          imageURL={post.imageURL}
        />
      ))}
    </div>
  );
}

export default App;
