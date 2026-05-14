import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LandingPage from '@/pages/LandingPage';
import CataloguePage from '@/pages/CataloguePage';
import AboutPage from '@/pages/AboutPage';
import SizeGuidePage from '@/pages/SizeGuidePage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1 pt-[60px]">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/catalogue" element={<CataloguePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/size-guide" element={<SizeGuidePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
