import { createContext, useMemo, useReducer } from 'react'

import { buildActions } from './actions'
import { initialTaskState } from './const'
import { TAction, TTaskContextProps, TTaskProviderProps, TTaskState } from './type'

export const TaskContext = createContext<TTaskContextProps>(undefined)

export const TaskProvider = ({ children }: TTaskProviderProps) => {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState)

  const actions = buildActions(dispatch)

  const value = useMemo(
    () => ({
      state,
      dispatch,
      actions,
    }),
    [state, actions],
  )

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}

export const taskReducer = (state: TTaskState, action: TAction): TTaskState => {
  switch (action.type) {
    case 'add_task_pending':
    case 'get_tasks_pending': {
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    }
    case 'add_task_rejected':
    case 'get_tasks_rejected': {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    }
    case 'get_tasks_fulfilled': {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    }

    case 'move_task': {
      const { task, destinationStatus } = action.payload

      const updatedData = {
        ...state.data,
        [task.status]: state.data[task.status].filter((t) => t.id !== task.id),
        [destinationStatus]: [
          ...state.data[destinationStatus],
          {
            ...task,
            status: destinationStatus,
          },
        ],
      }

      return {
        ...state,
        data: updatedData,
      }
    }

    case 'add_task_fulfilled': {
      return {
        ...state,
        isLoading: false,
        data: {
          ...state.data,
          [action.payload.status]: [...state.data[action.payload.status], action.payload],
        },
      }
    }

    default: {
      throw new Error(`Unhandled action type: ${action}`)
    }
  }
}
