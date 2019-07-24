import React, { useContext, useReducer, createContext } from 'react'

const DispatchContext = createContext(() => {});

const reducer = ({ year, month }, action) => {
  switch (action) {
    case 'increment':
      return month === 11
        ? { year: year + 1, month: 0 }
        : { year, month: month + 1 };
    case 'decrement':
      return month === 0
        ? { year: year - 1, month: 11 }
        : { year, month: month - 1 };
  }
};

const UseReducerSample = () => {
  const[state, dispatch] = useReducer(reducer, {
    year: 0,
    month: 1,
  });

  return (
    <div>
      <p>
        <b>
          {state.year}年{state.month}ヶ月
        </b>
      </p>
      <DispatchContext.Provider value={dispatch}>
        <ControlButtons />
      </DispatchContext.Provider>
    </div>
  )
}

const ControlButtons = () => {
  const dispatch = useContext(DispatchContext);

  return(
    <p>
      <button onClick={() => dispatch('decrement')}>-</button>
      <button onClick={() => dispatch('increment')}>+</button>
    </p>
  );
};

export default UseReducerSample;
// const MyContext = createContext(() => {});
//
// const UseContextSample = () => {
//   const [count, setCount] = useState(0);
//
//   return (
//     <div>
//       <p>
//         <b>{count}</b>
//       </p>
//       <MyContext.Provider value={() => setCount(count => count + 1)}>
//         <IncrementButton />
//       </MyContext.Provider>
//     </div>
//   );
// };
//
// const IncrementButton = () => {
//   const incrementHandler = useContext(MyContext);
//
//   return (
//     <p>
//       <button onClick={incrementHandler}>+</button>
//     </p>
//   );
// };

//export default UseContextSample;
