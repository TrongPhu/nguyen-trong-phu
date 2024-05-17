import { Route, Routes } from "react-router-dom";
import CurrencyConvertForm from "./components/CurrencyConvert";
import PostList from "./components/Post";
import Home from "./components/Home";
import StopWatch from "./components/StopWatch";
import CustomStyle from "./components/CustomStyle";

function App() {
  return (
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/post" element={<PostList />} />
      <Route path="/currency-convert" element={<CurrencyConvertForm />} />
      <Route path="/stopwatch" element={<StopWatch />} />
      <Route path="/custom-style-page" element={<CustomStyle />} />
    </Routes>
  );
}

export default App;
