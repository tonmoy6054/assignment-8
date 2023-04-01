import React from 'react';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import SingleData from './components/SingleData/SingleData';
import SideCard from './components/SideCard/SideCard';

const App = () => {
const handleWatchTime = () => {
  console.log(vijayDhaiyya);
}



  return (
    <div>
      <Header></Header>
      
      <div className="flex justify-around">
        <div><Card handleWatchTime={handleWatchTime}></Card>
        </div>
        <div><SideCard></SideCard>
        </div>
      </div>
    </div>
  );
};

export default App;







