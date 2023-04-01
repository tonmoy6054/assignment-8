import React from 'react';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import SingleData from './components/SingleData/SingleData';
import SideCard from './components/SideCard/SideCard';

function App ()  {
const handleWatchTime = (time) => {
  // console.log(time);
const previousWatchTime = JSON.parse(localStorage.getItem("watchtime"));
// console.log(previousWatchTime);
if (previousWatchTime) {
const sum = previousWatchTime + time;
// console.log(sum);
localStorage.setItem("watchTime", sum);
}
else {
  localStorage.setItem("watchTime", time);
}

};

  return (
    <div>
      <Header></Header>
      
      <div className="flex justify-around">
        <div>
          <Card handleWatchTime={handleWatchTime}></Card>
        </div>
        <div><SideCard></SideCard>
        </div>
      </div>
    </div>
  );
};

export default App;







