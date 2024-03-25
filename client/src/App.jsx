import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "regenerator-runtime/runtime";
import { Home, Game} from "./pages"



export default function App() {


  return (
  <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      </>
  )
}
