import { useEffect } from "react"

const useStart = ({time, setTime, currentElement}) => {
  useEffect(() => {
    const timeId = setTimeout(() => {
      setTime(time - 1)
    }, 1000)

    if(time <= 0) {
      clearTimeout(timeId)
      alert('result is' + ' ' + currentElement)
    }
  })
}

export default useStart