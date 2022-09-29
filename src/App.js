import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import SignUpPage from "./Layout/SignUpPage";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Home from "./Layout/Home";
import Information from "./Layout/Information";
import MediPeople from "./Layout/MediPeople";
import MyBox from "./Layout/MyBox";
import NotFound from "./Layout/NotFound";
import Write from "./Layout/Write";

import BoardRegisterForm from "./Components/Board/BoardRegisterForm";
import BoardSearch from "./Components/Board/BoardSearch";
import BoardMore from "./Components/Board/BoardMore";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/information" element={<Information />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/medipeople" element={<MediPeople />}></Route>
            <Route path="/mybox" element={<MyBox />}></Route>
            <Route path="/signuppage" element={<SignUpPage />}></Route>
            <Route path="/write" element={<Write />}></Route>

            <Route path="/create" element={<BoardRegisterForm />}></Route>
            <Route path="/search" element={<BoardSearch />}></Route>
            <Route exact path="/more/:id" element={<BoardMore />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
export default App;
