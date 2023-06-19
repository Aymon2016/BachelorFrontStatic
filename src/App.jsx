import Homepage from "./page/Homepage/Homepage"
import './app.css'
import Layout from "./page/Layout"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MillPage from "./page/Millpage/MillPage";
import MemberPage from "./page/Memberpage/memberpage";
import NoticePage from "./page/Noticepage/NoticePage";
import SingleNoticeShow from "./page/Noticepage/SingleNoticeShow";
import Login from "./page/loginPage/login";
import Signup from "./page/loginPage/signup";
import "bootstrap/dist/css/bootstrap.min.css"
function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/millpage" element={<MillPage />} />
          <Route path="/memberpage" element={<MemberPage />} />
          <Route path="/noticepage" element={<NoticePage />} />
          <Route path="/singlenotice" element={<SingleNoticeShow />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
