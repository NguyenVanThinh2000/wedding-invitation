import { TTaskState } from '@/context/task'
import { generateUUID } from '@/utils'

export const TaskApiEndPoints = {
  getTasks: () => {
    return new Promise<{
      error: string | null
      data: TTaskState['data']
    }>((resolve) => {
      setTimeout(() => {
        resolve({
          error: null,
          data: {
            todo: [
              {
                id: generateUUID(),
                title: 'Task 1',
                description: 'Description 1',
                status: 'todo',
              },
              {
                id: generateUUID(),
                title: 'Task 1.2',
                description: 'Description 1.2',
                status: 'todo',
              },
            ],
            inProgress: [
              {
                id: generateUUID(),
                title: 'Task 2',
                description: 'Description 2',
                status: 'inProgress',
              },
            ],
            inReview: [
              {
                id: generateUUID(),
                title: 'Task 3',
                description: 'Description 3',
                status: 'inReview',
              },
            ],
            done: [
              {
                id: generateUUID(),
                title: 'Task 4',
                description: 'Description 4',
                status: 'done',
              },
            ],
          },
        })
      }, 500)
    })
  },
}
