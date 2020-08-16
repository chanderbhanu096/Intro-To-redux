function Counter() {
    // State: a counter value
    const [counter, setCounter] = useState(0)
  
    // Action: code that causes an update to the state when something happens
    const increment = () => {
      setCounter(prevCounter => prevCounter + 1)
    }
  
    // View: the UI definition
    return (
      <div>
        Value: {counter} <button onClick={increment}>Increment</button>
      </div>
    )
  }
  const obj = { a: 1, b: 2 }
// still the same object outside, but the contents have changed
obj.b = 3

const arr = ['a', 'b']
// In the same way, we can change the contents of this array
arr.push('c')
arr[1] = 'd'