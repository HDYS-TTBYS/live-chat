import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // ここから
    let randomString = []
    const appendData = () => {
      for (let i = 0; i < Math.floor(Math.random() * (15 + 1 - 10)) + 10; i++) { //Max:25 Min:10
        randomString.push(Math.random().toString(32).substring(2))
      }
      // ここの処理をAPIからの取得のコードに変更する

      setData([...data, ...randomString])

      setTimeout(() => {
        appendData()
      }, 1000);
    }
    appendData()
  }, []);

  useEffect(() => {
    data.slice(-1)[0] && document.getElementById(data.slice(-1)[0]).scrollIntoView({ behavior: "smooth" })
  }, [data])

  console.log(data.slice(-1)[0])

  return (
    <div className="scroll">
      {data.map(d => <section key={d} id={d}>{d}</section >)}
    </div>
  );
}

export default App;
