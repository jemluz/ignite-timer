import { ReactNode } from 'react'
import { ActionTypes } from '../reducers/cycles/actions'

export interface CreateCycleData {
  task: string
  minutesAmount: number
}

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export interface CyclesContextData {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  interruptedCycle: () => void
}

export interface CyclesContextProviderProps {
  children: ReactNode
}

export interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export interface Action {
  type: ActionTypes
  payload?: {
    newCycle: Cycle
  }
}
