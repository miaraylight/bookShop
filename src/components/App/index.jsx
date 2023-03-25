import { Route, Routes } from "react-router-dom";
import ArticlesPage from "../../pages/ArticlesPage/ArticlesPage";
import AuthorPage from "../../pages/AuthorPage/AuthorPage";
import CompaniesPage from "../../pages/CompaniesPage/CompaniesPage";
import HomePage from "../../pages/HomePage/HomePage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/author' element={<AuthorPage/>}/>
        <Route path='/companies' element={<CompaniesPage/>}/>
        <Route path='/articles' element={<ArticlesPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
