import { Route, Routes } from "react-router-dom";
import CurrencyConvertForm from "./components/CurrencyConvert";
import PostList from "./components/Post";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/post" element={<PostList />} />
      <Route path="/currency-convert" element={<CurrencyConvertForm />} />
    </Routes>
  );
}

export default App;
