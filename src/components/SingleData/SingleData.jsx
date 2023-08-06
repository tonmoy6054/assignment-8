import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SingleData = (props) => {
  const { image, title, name, published_in, minute, personImage } = props.user || {};
  const handleMarkAsRead = props.handleMarkAsRead;
  const handleBookmark = props.handleBookmark;
  const [markAsReadClicked, setMarkAsReadClicked] = useState(false);

  const handleMarkAsReadClick = () => {
   
    if (!markAsReadClicked) {
      handleMarkAsRead(minute);
    }
    else {
     
      toast.info("This is already selected.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    setMarkAsReadClicked(true);
  };
 
  return (
    <div className="mt-5">
      <div className="card w-96 bg-base-100 shadow-xl pl-5">
        <figure>
          <img src={image} alt="" />
        </figure>
       
        <div className="card-body">
          <div className="flex">
            <img src={personImage} className="h-12 w-12 object-contain" alt="" />
            <h4 className="card-title pl-3">{name}</h4>
            <div className="flex">
              <p className="pl-5 pt-3">{minute}</p>
              <button onClick={() => handleBookmark(props.user)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <p>{published_in}</p>
          <h2 className="font-bold text-4xl">{title}</h2>
          <button onClick={handleMarkAsReadClick}>
            <u>Mark as read</u>
          </button>
          <ToastContainer />
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleData;

         

