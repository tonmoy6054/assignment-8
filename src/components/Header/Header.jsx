import React from 'react';

const Header = () => {
    return (
        <div className="flex justify-between">
            <div><h1 className="font-bold text-4xl px-3 pt-3">Knowledge Cafe</h1> </div>
            <div className="font-bold text-2xl px-3 pt-3 grid gap-x-8 gap-y-4 grid-cols-3">
                <a href="">Home</a>
                <a href="">Blogs</a>
                <a href="">Scripts</a>
            </div>
           
        </div>
    );
};

export default Header;