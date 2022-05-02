import "./App.css";
import { HomeSkeleton } from "./components/skeletons/HomeSkeleton";
import { HomePage } from "./pages/HomePage";
import useSWR from "swr";

const POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?api_key=da11b77366426ebc43cf6352452c601e&language=en-US&page=1`

const fetcher = async() => {
  const res = await fetch(POPULAR_URL)
  const resData = await res.json()
  return resData.results
}

function App() {
  const {error, data} = useSWR("key", fetcher)    
  if (error) return <div className="App"><h1>Failed to load</h1></div>
  if (!data) return <div className="App"><HomeSkeleton /></div>
  return <div className="App"><HomePage movies={data} /></div>
}

export default App;
