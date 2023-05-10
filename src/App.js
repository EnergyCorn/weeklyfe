import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>Home Page</>}/>
        <Route path="/login" element={<>login</>}/>
        <Route path="/register" element={<>Register</>}/>

        <Route path="*" element={<NotFound/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
