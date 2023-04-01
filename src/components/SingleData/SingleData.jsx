import React from 'react';



const SingleData = (props, {handleWatchTime}) => {
    console.log(props.singleData);
    const { image, id, title, name, published_in, minute, personImage } = props.singleData;
    return (
      // <div className="flex justify-around">
        <div className="mt-5">
          <div className="card w-96 bg-base-100 shadow-xl pl-5">
  <figure><img src= {image} alt="Shoes" /></figure>
  <div className="card-body">
    <div className="flex">
    <img src={personImage} className="h-12 w-12 object-contain"></img>
    <h4 className="card-title pl-3">{name}</h4>
    <div className="flex">
    <p className="pl-5 pt-3">{minute}</p>
    <button>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg>
 </button>
    </div>
    </div>
    <p>{published_in}</p>
    <h2 className="font-bold text-4xl">{title}</h2>
    <a href=""><u>Mark as read</u></a>
    <div className="card-actions justify-end">
      <button onClick={()=> handleWatchTime(SingleData.minute)} className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        
        {/* <SideCard></SideCard>  */}
        </div>
    );
   
};

export default SingleData;