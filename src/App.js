import Home from "./components/Home";
import Features from "./components/Features";
//페이지 이동 링크를 위한 라우터 임포트
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

//BrowserRouter : 브라우저에 이동을 컨트롤 하는 전체 컴포넌트
//Routes : 페이지 이동을 위한 컴포턴트
//Route : 각 페이지 이동의 속성을 지정하는 컴포넌트

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
