import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, selectCount } from './reducer'

function Box() {
  const count=useSelector(selectCount)
  const dispatch=useDispatch()
  return (
    <>
    <div>Box</div>
    <h1>{count}</h1>
    <button onClick={()=>dispatch(increment())}>+</button>
    <button onClick={()=>dispatch(decrement())}>-</button>
    <button onClick={()=>dispatch(incrementByAmount(5))}>increment By 5</button>
    </>
  )
}

export default Box