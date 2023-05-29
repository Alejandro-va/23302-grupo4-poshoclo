import "./App.css";
import Home from "./components/home/Home";

//KEY y URL para la api

/* import { APIKey } from "./common/api/movieKey";
import movieApi from "./common/api/movieApi"; */

function App() {
  /*   const fetchMovie = async () => {
    const response = await movieApi.get(`?apikey=${APIKey}&s=harry&t=movie`);
    const { Search } = response.data;
    console.log(Search);
    return Search;
  };
  fetchMovie(); */

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
