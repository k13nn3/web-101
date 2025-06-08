
import React from "react";
import { Link } from "react-router-dom";
import CakeCard from "./CakeCard";
import { Button } from "@/components/ui/button";
import { Product } from "@/context/CartContext";

// Sample data - in a real app, this would come from an API
const featuredCakes: Product[] = [
  {
    id: 1,
    name: "Chocolate Indulgence",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    description: "Rich chocolate cake with chocolate ganache and chocolate chips. A chocolate lover's dream.",
    category: "birthday",
  },
  {
    id: 2,
    name: "Strawberry Delight",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    description: "Light vanilla cake with layers of fresh strawberries and whipped cream frosting.",
    category: "fruity",
  },
  {
    id: 3,
    name: "Red Velvet",
    price: 42.99,
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    description: "Classic red velvet cake with cream cheese frosting and red velvet crumbs.",
    category: "special",
  },
  {
    id: 4,
    name: "Lemon Blueberry",
    price: 38.99,
    image: "https://images.unsplash.com/photo-1623246123320-0d6636755796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    description: "Light lemon cake with fresh blueberries and lemon buttercream frosting.",
    category: "fruity",
  },
];

const FeaturedCakes: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Featured Charms</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most beloved charm designs — each piece handcrafted to capture memories, milestones, and moments that matter.
            Perfect for gifting or adding a touch of meaning to your everyday style.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featuredCakes.map((cake) => (
            <CakeCard key={cake.id} product={cake} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/products">
            <Button variant="outline" className="btn-secondary">
              View All Charms
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCakes;
