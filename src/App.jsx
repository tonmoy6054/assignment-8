import React from 'react';
import { useState } from 'react';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import SingleData from './components/SingleData/SingleData';
import SideCard from './components/SideCard/SideCard';
import Ques from './components/Ques/Ques';

function App() {
  const [watchTime, setWatchTime] = useState(0);

  const handleWatchTime = (time) => {
    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
    if (previousWatchTime) {
      const sum = previousWatchTime + time;
      localStorage.setItem("watchTime", sum);
      setWatchTime(sum);
    } else {
      localStorage.setItem("watchTime", time);
      setWatchTime(time);
    }
  };




  return (
    <div>
      <Header></Header>
      
      <div className="flex justify-around">
        <div>
          <Card handleWatchTime={handleWatchTime}></Card>
        </div>
        <div>
          <SideCard watchTime={watchTime}></SideCard>
        </div>
      </div>
      <Ques></Ques>
    </div>
  );
};

export default App;







