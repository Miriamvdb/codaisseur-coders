import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, PostPage } from "./pages";
import { Toolbar } from "./components/Toolbar";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
