import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { storage, db } from '../firebase';
import firebase from 'firebase/compat/app';
import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage';

function ImageUpload({ username }) {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState('');

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    console.log(image.name);
    const storageRef = ref(storage, `/images/${image.name}.put(image)`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        // .ref('images')
        // .child(image.name)
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          // post image inside db
          db.collection('posts').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            caption: caption,
            imageURL: url,
            username: username,
          });

          setProgress(0);
          setCaption('');
          setImage(null);
        });
      }
    );
  };
  return (
    <div>
      <progress value={progress} max="100" />
      <input
        type="text"
        placeholder="Enter a caption ..."
        onChange={(event) => setCaption(event.target.value)}
        value={caption}
      />
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}

export default ImageUpload;
