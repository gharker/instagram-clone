import React from 'react';
import { Avatar } from '@mui/material';

import './post.css';

import reactIcon from '../assets/images/logo512.png';

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="gharker"
          src="/static/images/avatar/1.jpg"
        />
        <h3>Username</h3>
      </div>
      <img className="post__image" src={reactIcon} />
      <h4 className="post__text">
        <strong>gharker:</strong> I'm available today!
      </h4>
    </div>
  );
}

export default Post;
