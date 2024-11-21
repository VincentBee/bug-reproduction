import { useState } from "react";
import { css } from "../styled-system/css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={css({ gridTemplateColumns: "3" })}>
      <p>Before</p>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>After</p>
    </div>
  );
}

export default App;
