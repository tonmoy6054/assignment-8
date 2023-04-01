import React, { useEffect, useState } from 'react';

const SideCard = ({ watchTime }) => {
    const [time, setTime] = useState(watchTime);
    useEffect(() =>{
const getWatchTime = localStorage.getItem("watchTime");
setTime(getWatchTime);
    }, [watchTime]);
    
    return  (   
    <div>
    <div className="card w-96 bg-base-100 shadow-xl">

<div className="card-body">

<h2 className="card-title">Spent Time on read : </h2>
<input type="text" value={time} disabled />
<h2 className="card-title">Bookmarked Blogs : </h2>
<p></p>
<p></p>
<p></p>

</div>
</div>
</div>
    );     
    
};

export default SideCard;