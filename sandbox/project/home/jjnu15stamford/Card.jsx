import React from "react";

const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>; // Ensure that JSX follows `return` directly
};

export default Greeting;
import React, { useState, useEffect } from 'react';

const Counter = ({ count = 0 }) => { // Default count to 0 if not provided
  const [currentCount, setCurrentCount] = useState(count); // Initialize state with the `count` prop

  // Update internal state whenever the `count` prop changes
  useEffect(() => {
    setCurrentCount(count);
  }, [count]);

  const increment = () => setCurrentCount(currentCount + 1); // Increment counter
  const decrement = () => setCurrentCount(currentCount - 1); // Decrement counter

  return (
    <div>
      <h2>Count: {currentCount}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
import React from 'react';
import Greeting from './Greeting';
import Counter from './Counter';

const App = () => {
  const userName = "Alice"; // Name to pass to Greeting component
  const initialCount = 5;   // Initial count value to pass to Counter component

  return (
    <div>
      <Greeting name={userName} />   {/* Pass name to Greeting */}
      <Counter count={initialCount} /> {/* Pass count to Counter */}
    </div>
  );
};

export default App;
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import the App component

const root = ReactDOM.createRoot(document.getElementById('root')); // For React 18
root.render(<App />);  // Render the App component
/src
  /components
    