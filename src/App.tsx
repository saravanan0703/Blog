import React from 'react';
import { Header } from './components/Header';
import { FeaturedPost } from './components/FeaturedPost';
import { BlogPost } from './components/BlogPost';
import { Newsletter } from './components/Newsletter';
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section id="home">
          <FeaturedPost
            title="The Future of AI: Transforming Industries in 2024"
            excerpt="Discover how artificial intelligence is revolutionizing various sectors and what to expect in the coming years."
            imageUrl="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
            date="March 15, 2024"
          />
        </section>

        {/* Blog Posts Grid */}
        <section id="articles" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <BlogPost
            title="Machine Learning in Healthcare"
            excerpt="How ML algorithms are improving patient diagnosis and treatment planning."
            imageUrl="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80"
            date="March 14, 2024"
            readTime="5 min"
          />
          <BlogPost
            title="Natural Language Processing Breakthroughs"
            excerpt="Recent advances in NLP are changing how we interact with machines."
            imageUrl="https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80"
            date="March 13, 2024"
            readTime="4 min"
          />
          <BlogPost
            title="Ethics in Artificial Intelligence"
            excerpt="Exploring the moral implications of AI development and deployment."
            imageUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
            date="March 12, 2024"
            readTime="6 min"
          />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>

        {/* Newsletter Section */}
        <div className="mt-12">
          <Newsletter />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400">© 2024 AI Insights. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;