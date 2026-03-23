import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ClubPage from './pages/ClubPage';
import DemoPage from './pages/DemoPage';
import FaqPage from './pages/FaqPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="site-wrapper">
        <Navbar />
        <main className="site-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/o-nas" element={<AboutPage />} />
            <Route path="/club" element={<ClubPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
