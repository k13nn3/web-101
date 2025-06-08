
import React from "react";
import { Link } from "react-router-dom";
import CakeCard from "./CakeCard";
import { Button } from "@/components/ui/button";
import { Product } from "@/context/CartContext";
import img1 from "../../assets/images/Celestia.jpg";
import img2 from "../../assets/images/Sylphira.jpg";
import img3 from "../../assets/images/Isolde.jpg";
import img4 from "../../assets/images/Noctara.jpg";

// Sample data - in a real app, this would come from an API
const featuredCakes: Product[] = [
  {
    id: 1,
    name: "Celestia Charm",
    price: 45.99,
    image: img1,
    description: "Rich chocolate cake with chocolate ganache and chocolate chips. A chocolate lover's dream.",
    category: "birthday",
  },
  {
    id: 2,
    name: "Sylphira Charm",
    price: 39.99,
    image: img2,
    description: "Light vanilla cake with layers of fresh strawberries and whipped cream frosting.",
    category: "fruity",
  },
  {
    id: 3,
    name: "Isolde Charm",
    price: 42.99,
    image: img3,
    description: "Classic red velvet cake with cream cheese frosting and red velvet crumbs.",
    category: "special",
  },
  {
    id: 4,
    name: "Noctara Charm",
    price: 38.99,
    image: img4,
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
