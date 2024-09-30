import { buildActions } from './actions'
import { taskStatus } from './const'

export type TTaskContextProps =
  | {
      state: TTaskState
      dispatch: TDispatch
      actions: ReturnType<typeof buildActions>
    }
  | undefined

export type TDispatch = (action: TAction) => void

export type TTaskState = {
  data: {
    [key in TTaskStatus]: TTask[]
  }
  isLoading: boolean
  error: string | null
}

export type TTaskProviderProps = { children: React.ReactNode }

export type TAction =
  | {
      type: 'get_tasks_pending'
    }
  | {
      type: 'get_tasks_fulfilled'
      payload: TTaskState['data']
    }
  | {
      type: 'get_tasks_rejected'
      payload: string | null
    }
  | {
      type: 'move_task'
      payload: {
        task: TTask
        destinationStatus: TTaskStatus
      }
    }
  | {
      type: 'add_task_pending'
    }
  | {
      type: 'add_task_fulfilled'
      payload: TTask
    }
  | {
      type: 'add_task_rejected'
      payload: string | null
    }

export type TTaskStatus = keyof typeof taskStatus

export type TTask = {
  id: string
  title: string
  description: string
  status: TTaskStatus
}
