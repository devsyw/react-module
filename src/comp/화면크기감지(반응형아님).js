
import React, { useEffect } from 'react';
import './App.css';

//화면크기 감지
function App() {
  const handleResize = () => {
    console.log(`브라우저 화면 사이즈 : x : ${window.innerWidth}, y: ${window.innerHeight}`);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="App">
       x : {window.innerWidth}, y: {window.innerHeight}
    </div>
  );
}

export default App;
