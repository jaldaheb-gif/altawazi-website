import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import AIConsultant from './components/AIConsultant';
import AdminDashboard from './components/AdminDashboard';
import { ContentProvider, useContent } from './contexts/ContentContext';
import { Page, Language } from './types';

// Inner component to consume context
const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [language, setLanguage] = useState<Language>('ar');
  const { content } = useContent(); // Load content to check loading state or data existence if needed

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Update document direction and language attribute
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  if (currentPage === Page.ADMIN) {
    return <AdminDashboard setPage={setCurrentPage} />;
  }

  const t = content.translations[language];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar 
        currentPage={currentPage} 
        setPage={setCurrentPage} 
        language={language}
        setLanguage={setLanguage}
      />
      
      <main className="flex-grow">
        {currentPage === Page.HOME && (
          <>
            <Hero setPage={setCurrentPage} language={language} />
            <About language={language} />
            <Services language={language} />
            <Gallery language={language} />
            <div className="bg-slate-900 py-16 text-center">
              <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-white mb-6">
                  {t.common.ctaSection.title}
                </h2>
                <p className="text-gray-400 mb-8 text-lg">
                  {t.common.ctaSection.desc}
                </p>
                <button 
                  onClick={() => setCurrentPage(Page.CONTACT)}
                  className="px-10 py-4 bg-sky-500 text-white font-bold rounded-full hover:bg-sky-600 transition-transform hover:scale-105 shadow-lg"
                >
                  {t.common.ctaSection.btn}
                </button>
              </div>
            </div>
          </>
        )}

        {currentPage === Page.ABOUT && <About language={language} />}
        
        {currentPage === Page.SERVICES && <Services language={language} />}
        
        {currentPage === Page.GALLERY && <Gallery language={language} />}
        
        {currentPage === Page.CONTACT && <Contact language={language} />}
      </main>

      <Footer setPage={setCurrentPage} language={language} />
      
      {/* AI Smart Assistant Widget */}
      <AIConsultant language={language} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ContentProvider>
      <AppContent />
    </ContentProvider>
  );
};

export default App;