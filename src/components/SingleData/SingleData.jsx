import React from 'react';

const SingleData = (props) => {
    console.log(props.singleData);
    const { image, id, title, name, published_in, minute, personImage } = props.singleData;
    return (
        <div className="mt-5">
          <div className="card w-96 bg-base-100 shadow-xl pl-5">
  <figure><img src= {image} alt="Shoes" /></figure>
  <div className="card-body">
    <div className="flex">
    <img src={personImage} className="h-12 w-12 object-contain"></img>
    <h4 className="card-title pl-3">{name}</h4>
    <p className="pl-5 pt-3">{minute}</p>
    </div>
    <p>{published_in}</p>
    <h2 className="font-bold text-4xl">{title}</h2>
    <a href=""><u>Mark as read</u></a>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleData;