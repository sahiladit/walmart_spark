import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import Login from './components/Login';
import AIAssistant from './components/AIAssistant';
import { featuredProducts, dealsProducts, groceryProducts } from './data/products';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={
              <>
                <Header />
                <Routes>
                  <Route path="/" element={
                    <>
                      <Hero />
                      <Categories />
                      <ProductSection 
                        title="Featured Products" 
                        products={featuredProducts} 
                        backgroundColor="bg-white"
                      />
                      <ProductSection 
                        title="Today's Deals" 
                        products={dealsProducts} 
                        backgroundColor="bg-red-50"
                      />
                      <ProductSection 
                        title="Grocery Essentials" 
                        products={groceryProducts} 
                        backgroundColor="bg-green-50"
                      />
                      <Footer />
                    </>
                  } />
                  <Route path="/ai-assistant" element={<AIAssistant />} />
                </Routes>
              </>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;