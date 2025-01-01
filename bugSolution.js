```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only when count changes
    console.log('Count:', count);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => {
          //The solution is here
          setCount(prevCount => prevCount + 1);
      }}>Click me</button>
    </div>
  );
}
```