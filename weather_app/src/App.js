
import './App.css';
import Temp from "./components/weather/temp"

function App() {
  return (
    <div className="App">
       <Temp/>
    </div>
  );
}

export default App;


//api key = 68e6879f536e665674e71142cacb2034
//api call = https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//https://api.openweathermap.org/data/2.5/weather?q=pune&appid=68e6879f536e665674e71142cacb2034