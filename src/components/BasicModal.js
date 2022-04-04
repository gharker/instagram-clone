import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import { auth } from '../firebase';
import './basicModal.css';
import ImageUpload from './ImageUpload';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [user, setUser] = useState(null);

  const signUp = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => alert(error.message));

    setOpen(false);
  };

  const signIn = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));

    setOpenSignIn(false);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user has logged in ...
        console.log(authUser);
        setUser(authUser);
      } else {
        // user has logged out ...
        setUser(null);
      }
    });
    return () => {
      // perform some cleanup actions
      unsubscribe();
    };
  }, [user, username]);

  return (
    <div>
      <div>
        {user?.displayName ? (
          <ImageUpload username={user.displayName} />
        ) : (
          <h3>Sorry you need to login to upload</h3>
        )}
      </div>
      {user ? (
        <Button onClick={() => auth.signOut()}>Logout</Button>
      ) : (
        <div className="app__loginContainer">
          <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
          <Button onClick={handleOpen}>Sign Up</Button>
        </div>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <center>
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
              <form className="app_signup">
                <FormControl>
                  <Input
                    placeholder="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <Input
                    placeholder="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <Input
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
                <Button type="submit" onClick={signUp}>
                  Sign Up
                </Button>
              </form>
            </center>
          </div>
        </Box>
      </Modal>
      <Modal
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <center>
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
              <form className="app_signup">
                <FormControl>
                  <Input
                    placeholder="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <Input
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
                <Button type="submit" onClick={signIn}>
                  Sign In
                </Button>
              </form>
            </center>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
