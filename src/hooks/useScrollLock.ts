import { useEffect } from 'react'

const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow

    if (isLocked) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = originalStyle
    }

    // Cleanup function to restore the original overflow style
    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [isLocked])
}

export default useScrollLock
