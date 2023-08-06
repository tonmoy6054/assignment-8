import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';

const Card = () => {
  const [clickCount, setClickCount] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState([]);
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [totalReadMinutes, setTotalReadMinutes] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('data.json');
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleBookmark = (user) => {
    const newClick = [...clickCount, user];
    const newTitle = [...title, user.title];
    setTitle(newTitle);
    setClickCount(newClick);
  };

  const handleMarkAsRead = (minute) => {
    setTotalReadMinutes(minute);
   
  };

  

  return (
    <div>
     <div className='display: grid lg: grid-cols-2'>
     <h2 className="card-title mx-50 px-20">Bookmarked Blogs: {clickCount.length}</h2>
      <h3>Bookmarked Titles: {title.join(', ')}</h3>
      <h3>Spent Time on read: {totalMinutes + totalReadMinutes}</h3> 
     </div>
     
      {data &&
        data.map((user) => (
          <SingleData
            key={user.id}
            handleBookmark={handleBookmark}
            user={user}
            handleMarkAsRead={handleMarkAsRead}
           
            totalReadMinutes={totalReadMinutes}
          />
        ))}
    </div>
  );
};

export default Card;



