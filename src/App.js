import "./App.css";
import Main from "./Components/Main";
import { WeatherProvider } from "./Contexts/WeatherContext";
import Change from "./Components/Change";


function App() {

  return (
    <WeatherProvider>
      <Main/>
      <Change/>
    </WeatherProvider>
  );
}

export default App;
