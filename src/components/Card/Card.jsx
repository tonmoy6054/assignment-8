import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';


const Card = ({handleWatchTime}) => {
    const [data,setData] = useState([]);
    useEffect(() => {
const loadData = async() => {
    // const res = await fetch(`http://localhost:3000/users`);
    const res = await fetch('db.json');
   const data = await res.json();
    // console.log(data);
    setData(data);
}
loadData();
    }
    ,[])
    // console.log(data);
    
return (
        <>
           { 
            data.map((singleData) => {

                console.log(singleData);
                
                
                return <SingleData 
                singleData={singleData}
                handleWatchTime={handleWatchTime}
                // handleWatchTime={handleWatchTime}
                />;
            })
           }
        </>
    );  
};

export default Card;