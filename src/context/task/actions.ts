import { TaskApiEndPoints } from '@/api'

import { TDispatch, TTask, TTaskStatus } from './type'

export const buildActions = (dispatch: TDispatch) => {
  return {
    getTasks: async () => {
      dispatch({ type: 'get_tasks_pending' })

      const { error, data } = await TaskApiEndPoints.getTasks()

      if (!error) {
        dispatch({
          type: 'get_tasks_fulfilled',
          payload: data,
        })
      } else {
        dispatch({
          type: 'get_tasks_rejected',
          payload: error,
        })
      }
    },

    moveTask: (task: TTask, destinationStatus: TTaskStatus) => {
      dispatch({
        type: 'move_task',
        payload: {
          task,
          destinationStatus,
        },
      })
    },

    addTask: async (task: TTask) => {
      dispatch({ type: 'add_task_pending' })

      // Simulate API call
      setTimeout(() => {
        dispatch({
          type: 'add_task_fulfilled',
          payload: task,
        })
      }, 500)
    },
  }
}
