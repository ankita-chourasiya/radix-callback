import React, { useMemo, useState } from 'react'

function Counter() {

  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  }

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  }

  const isEven = useMemo(() => {
    let i = 0;
  
    while (i < 20000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <h1>useMemo Hook</h1>
      <div>
        <h3>count: {counterOne}</h3>
        <button onClick={incrementOne}>increment one</button>
      </div>
      <span>{ isEven ? "even" : "odd"}</span>
      <div>
        <h3>count: {counterTwo}</h3>
        <button onClick={incrementTwo}>increment two</button>
      </div>

    </div>
  )
}

export default Counter;
