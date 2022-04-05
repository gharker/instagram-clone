import React, { useState, useEffect } from 'react';
import Post from './components/Post';
import { db } from './firebase';
import './App.css';
import BasicModal from './components/BasicModal';
import { useStateValue } from './components/currentUserContext/StateProvider';
// import { user } from './components/BasicModal';
// console.log(user);

function App() {
  const [posts, setPosts] = useState([]);

  const [{ user }, dispatch] = useStateValue();

  // UseEffect: runs a piece of code based on a specific condition

  useEffect(() => {
    // this is where the code runs
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        // every time a new post is added, this code runs
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() }))
        );
        console.log(posts);
      });
  }, []);

  return (
    <div className="App">
      <BasicModal />
      <div className="app__posts">
        {posts.map(({ id, post }) => (
          <Post
            key={id}
            postId={id}
            user={user}
            username={post.username}
            caption={post.caption}
            imageURL={post.imageURL}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
