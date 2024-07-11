import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("blue");

  const handleClick = () => {
    if (color == "blue")
      setColor("green");
    else
      setColor("blue");
  }
  
  const array = ["red", "yellow", "blue", "gray", "blue", "yellow", "red", "gray"];
  const [colorIndex, setIndex] = useState(0);

  const handleClick2 = () => {
    if (colorIndex == array.length - 1)
      setIndex(0);
    else
      setIndex(colorIndex + 1);
  }

  const [colorIndex2, setIndex2] = useState(0);
  const handleClick3 = () => {
    const randomIndex = Math.floor(Math.random() * array.length);
    setIndex2(randomIndex);
  }

  const [IpData, setIpData] = useState<any>({});
  useEffect(() => {
    fetch('https://5558c878-6a27-4922-92be-573b8a3b7211.eu-central-1.cloud.genez.io/ip')
      .then(response => response.json())
      .then(data => {setIpData(data as any),
                    console.log(data)})
      .catch(error =>console.error('Eroarea sef:', error));
  }, []);

  const [catData, setCatData] = useState<any>({});
  useEffect(() => {
    const API_KEY = "live_iEFRGzZWiicyfZnAfrg2N2SUgSFnfE6xUIudFUsE1KPNclO8fvR4h3L0WCf1aSPu";
    fetch('https://api.thecatapi.com/v1/images/search', {
      headers: {
        'x-api-key': API_KEY,
        'Access-Control-Allow-Origin':'no-cors'
      }
    })
      .then(response => response.json())
      .then(data => setCatData(data[0] as any))
      .catch(error =>console.error('Eroarea sef:', error));
  }, []);
  
  return (
    <>
      <h1>David Petcu</h1>
      <div>
        <button onClick={handleClick} style={{backgroundColor: color}}>
          Buton fundal verde
        </button>
        <div></div>
        <button onClick={handleClick2} style={{backgroundColor: array[colorIndex]}}>
          Buton array
        </button>
        <div></div>
        <button onClick={handleClick3} style={{backgroundColor: array[colorIndex2]}}>
          Buton random
        </button>
      </div>
      <h2>
          {IpData.country}, {IpData.regionName}, {IpData.city}
      </h2>
      <h2><img src={catData.url} alt="Pisi" /></h2>
    </>
  )
}

export default App
