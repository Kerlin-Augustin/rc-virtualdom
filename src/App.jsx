import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  setInterval(() => {
    setCount(count + 1);
  }, 3000);

  return <h1>Count every 3 seconds {count}</h1>;
}

export default App;
