import React, { useState, useEffect } from 'react'

const UseEffectSample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCount(count => count + 1);
    }, 1000);

    // クリーンアップ関数を返す
    return () => clearTimeout(timerId);
  }, [count])

  return (
    <p>
      time: <b>{count}</b>
    </p>
  )
}
export default UseEffectSample;
