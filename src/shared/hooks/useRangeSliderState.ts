import { useReducer } from 'react'

type RangeValue = [number, number]

type Action =
  | { type: 'setFrom'; payload: number }
  | { type: 'setTo'; payload: number }
  | { type: 'setValues'; payload: RangeValue }

const reducer = (state: RangeValue, action: Action): RangeValue => {
  switch (action.type) {
    case 'setFrom':
      if (state[0] === action.payload) return state
      return [action.payload, state[1]]
    case 'setTo':
      if (state[1] === action.payload) return state
      return [state[0], action.payload]
    case 'setValues':
      if (state[0] === action.payload[0] && state[1] === action.payload[1]) return state
      return action.payload
    default:
      return state
  }
}

export const useRangeSliderState = (initial: RangeValue) => {
  const [values, dispatch] = useReducer(reducer, initial)

  return {
    values,
    setFrom: (val: number) => dispatch({ type: 'setFrom', payload: val }),
    setTo: (val: number) => dispatch({ type: 'setTo', payload: val }),
    setValues: (val: RangeValue) => dispatch({ type: 'setValues', payload: val })
  }
}
