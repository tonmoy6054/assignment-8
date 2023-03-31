import React from 'react';

const Card = () => {
    const [data,setData] = useState([]);
    useEffect(() => {
const loadData = async() => {
    const res = await fetch(`http://localhost:3000/users`);
    const data = await res.json();
    console.log(data);

}
loadData();
    }

    ,[])
    return (
        <div>
            
        </div>
    );
};

export default Card;