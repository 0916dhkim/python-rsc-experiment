import { useState } from "react";
export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
