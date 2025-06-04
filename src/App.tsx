import React, { useState, useEffect } from "react";

const App: React.FC = () => {
  // カウンター用のstate
  const [count, setCount] = useState<number>(0);

  // 現在時刻用のstate
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  // 時刻を更新するuseEffect
  useEffect(() => {
    // 1秒ごとに時刻を更新
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // クリーンアップ関数
    return () => {
      clearInterval(timer);
    };
  }, []); // 空の依存配列で、マウント時にのみ実行

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Hooks Study</h1>

      <div>
        <h2>useState Example: Counter</h2>
        <p>Current count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2>useEffect Example: Clock</h2>
        <p>Current time: {currentTime.toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

export default App;
