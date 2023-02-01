import { differenceInSeconds } from 'date-fns'
import { createContext, useEffect, useReducer, useState } from 'react'
import {
  CreateCycleData,
  Cycle,
  CyclesContextData,
  CyclesContextProviderProps,
  CyclesState,
} from '../models/Cycles.interfaces'
import {
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from '../reducers/cycles/actions'
import { cyclesReducer } from '../reducers/cycles/reducer'

export const CyclesContext = createContext({} as CyclesContextData)

const localStorageName = '@ignite-timer:cycles-state-1.0.0'

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {} as CyclesState,
    () => {
      const storedStateAsJSON = localStorage.getItem(
        localStorageName || ({} as CyclesState),
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
    },
  )

  const { cycles, activeCycleId } = cyclesState || ({} as CyclesState)

  const activeCycle = cycles
    ? cycles.find((cycle) => cycle.id === activeCycleId)
    : null

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }

    return 0
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState || ({} as CyclesState))
    localStorage.setItem(localStorageName, stateJSON)
  }, [cyclesState])

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch(addNewCycleAction(newCycle))

    setAmountSecondsPassed(0)
  }

  function interruptedCycle() {
    dispatch(interruptCurrentCycleAction())
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction())
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        interruptedCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
