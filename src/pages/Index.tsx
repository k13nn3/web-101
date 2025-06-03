
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturedCakes from "@/components/FeaturedCakes";
import Testimonials from "@/components/Testimonials";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedCakes />
        
        {/* Categories Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Explore Our Categories</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find the perfect cake for every occasion. From birthdays to weddings, we've got you covered.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative group overflow-hidden rounded-lg h-60">
                <img
                  src="https://images.unsplash.com/photo-1535254973040-607b474d7f5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Birthday Cakes"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-serif text-xl font-medium mb-1">Birthday Cakes</h3>
                    <Link to="/products?category=birthday" className="text-sm text-orange-50 underline">
                      Explore
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-lg h-60">
                <img
                  src="https://images.unsplash.com/photo-1622896784083-cc051313dbab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Wedding Cakes"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-serif text-xl font-medium mb-1">Wedding Cakes</h3>
                    <Link to="/products?category=wedding" className="text-sm text-orange-50 underline">
                      Explore
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-lg h-60">
                <img
                  src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Special Occasion Cakes"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-serif text-xl font-medium mb-1">Special Occasion</h3>
                    <Link to="/products?category=special" className="text-sm text-orange-50 underline">
                      Explore
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-lg h-60">
                <img
                  src="https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Cupcakes"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-serif text-xl font-medium mb-1">Cupcakes</h3>
                    <Link to="/products?category=cupcakes" className="text-sm text-orange-50 underline">
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* Call to Action */}
        <section className="py-16 bg-orange-500 text-white">
          <div className="container-custom text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to Order Your Dream Cake?</h2>
            <p className="text-orange-50 max-w-2xl mx-auto mb-8">
              Place your order today and experience the magic of our handcrafted cakes.
              Custom orders are available for special occasions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button className="bg-white text-orange-500 hover:bg-orange-100 text-base px-8 py-3">
                  Order Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-orange-600 text-base px-8 py-3">
                  Custom Order
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
