import React from 'react';

const Ques = () => {
    return (
        <div className="text-2xl ml-5 mt-5">
            <h2>Ques: What's the ifference between props & state?</h2>
<p>Ans: In props,data is passed from one component to another;whereas,in state data is passed within the component only.props are 'read only',but state is both read & write.props can't be modified but state can't.</p>
<h2 className="mt-3">Ques: How does useState work?</h2>
<p>Ans: It allows us to add a functional component in it.This take initial state as value and give a upadated state value whenever the setter function is called.</p>
<h2 className="mt-3">
    Ques: What useEffect do except data load?
</h2>
<p>Ans: Except data load it checks the depenency values from updated render & calls the effect function.it can directly update the DOM,also the timers.</p>
<h2 className="mt-3">Ques: How does React work?</h2>
<p>Ans: React is a javascript library.it allows to create complex function.React JS comprises a collection of reusable JavaScript code snippets.Working directly with the DOM gives a slow response.To make it faster, React implements a virtual DOM which is a DOM tree representation in JavaScript. 
When there is a need to read and write to the DOM, it uses its virtual representation of it. 
Following this, the virtual DOM will attempt to locate the most effective manner to update the DOM of the browser. </p>

        </div>

    );
};

export default Ques;