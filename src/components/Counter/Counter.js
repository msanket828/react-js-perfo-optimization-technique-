import React, { useMemo, useState } from 'react'

const Counter = (props) => {
  const [countFirst, setCountFirst] = useState(0);
  const [countSecond, setCountSecond] = useState(0);


  const counterOneIncrement = () => {
    setCountFirst(prevCount => prevCount + 1);
  }

  const counterTwoIncrement = () => {
    setCountSecond(prevCount => prevCount + 1);
  }

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000){
      i++;
    }
    return countFirst % 2 === 0;
  },[countFirst]);

  return (
    <div className='counter' style={{ textAlign: 'center', margin: '20px 0' }}>
      <div style={{ margin: '0 0 10px' }}>
        <button onClick={counterOneIncrement}>CounterOne - {countFirst}</button>
        <p>{isEven ? 'Even' : 'Odd'}</p>
      </div>
      <div>
        <button onClick={counterTwoIncrement}>CounterTwo - {countSecond}</button>
      </div>
    </div>
  )
}

export default Counter;