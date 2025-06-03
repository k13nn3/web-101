
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-orange-50 overflow-hidden">
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Delicious Cakes <br /> Made with <span className="text-orange">Love</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Handcrafted cakes for every occasion. Made with premium ingredients and baked fresh to order.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/products">
                <Button className="btn-primary text-base px-8 py-3">
                  Shop Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="btn-secondary text-base px-8 py-3">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80" 
                alt="Delicious Cake" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 w-32 h-32 flex flex-col items-center justify-center transform rotate-6">
                <span className="text-orange font-serif font-bold text-xl">Fresh</span>
                <span className="text-gray-600 text-sm text-center">Baked Daily</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
