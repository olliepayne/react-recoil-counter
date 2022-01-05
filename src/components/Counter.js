import { useRecoilState, useRecoilValue } from "recoil"

import { counterState } from "../config/atoms"
import { differenceToLimitState } from "../config/selectors"

const Counter = () => {
  const [counter, setCounter] = useRecoilState(counterState)
  const differenceToLimit = useRecoilValue(differenceToLimitState)

  const decrementValue = () => {
    setCounter((oldCounter) => oldCounter - 1)
  }

  const incrementValue = () => {
    setCounter((oldCounter) => oldCounter + 1)
  }

  return (
    <div>
      {/* Decrement button */}
      <button onClick={decrementValue}>-</button>

      {/* Sum */}
      <span>{counter}</span>

      {/* Increment button */}
      <button onClick={incrementValue}>+</button>

      <p>
        {differenceToLimit}
      </p>
    </div>
  )
}

export default Counter