import React, { useState } from 'react';
import NavBar from './Components/NavBar';

const App = () => {
  const [count, setCount] = useState(0);

  const handleSumar = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <NavBar count={count} handleSumar={handleSumar} />
    </div>
  );
};

export default App;











