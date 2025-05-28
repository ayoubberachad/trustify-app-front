import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ResturantPage = () => {
    // const [categories, setCategories] = React.useState([
    //     { id: 1, name: "Restaurant", count: "+1,000 restaurants" },
    //     // ... autres catégories
    //   ]);
      
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">Bienvenue sur la page ResturantPage</h1>
        <p className="text-gray-700">Ceci est le contenu principal de la ResturantPage.</p>
      </main>
      
      
      <Footer />
    </div>
  );
};

export default ResturantPage;
