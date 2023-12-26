import React, { useState } from 'react'
import Title from './Title'
import Button from './Button'
import Count from './Count';

function ParentComponent() {
  const [age, setAge] = useState(20);
  const [salary, setSalary] = useState(1000);

  const incrementAge = () => {
    setAge(age + 1)
  };

  const incrementSalary = () => {
    setSalary(salary + 1000)
  };

  return (
    <div>
      <Title />
      <Count text="age" count={age}/>
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="salary" count={salary}/>
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent;
