import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  setInterval(() => {
    increment(), 3000;
  });

  return <h1>Count every 3 seconds{count}</h1>;
}

export default App;
