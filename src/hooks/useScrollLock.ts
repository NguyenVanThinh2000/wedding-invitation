import { useEffect } from 'react'

const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {

    if (isLocked) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }

    // Cleanup function to restore the original overflow style
    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [isLocked])
}

export default useScrollLock
