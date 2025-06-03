
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CakeCard from "@/components/CakeCard";
import { Product } from "@/context/CartContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// Sample products data - in a real app, this would come from an API
const allProducts: Product[] = [
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
  {
    id: 5,
    name: "Wedding Elegance",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1535254973040-607b474d7f5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Elegant three-tier vanilla cake with buttercream frosting and edible flowers.",
    category: "wedding",
  },
  {
    id: 6,
    name: "Carrot Cake",
    price: 36.99,
    image: "https://images.unsplash.com/photo-1605291545495-40ab306b7543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    description: "Moist carrot cake with cream cheese frosting and chopped walnuts.",
    category: "special",
  },
  {
    id: 7,
    name: "Vanilla Cupcakes",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    description: "Classic vanilla cupcakes with buttercream frosting and sprinkles.",
    category: "cupcakes",
  },
  {
    id: 8,
    name: "Chocolate Cupcakes",
    price: 26.99,
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    description: "Rich chocolate cupcakes with chocolate ganache and chocolate shavings.",
    category: "cupcakes",
  },
];

const categories = [
  { id: "all", name: "All Cakes" },
  { id: "birthday", name: "Birthday" },
  { id: "wedding", name: "Wedding" },
  { id: "special", name: "Special Occasion" },
  { id: "fruity", name: "Fruity" },
  { id: "cupcakes", name: "Cupcakes" },
];

const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>(allProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const categoryParam = searchParams.get("category") || "all";

  useEffect(() => {
    let filteredProducts = [...allProducts];

    // Filter by category
    if (categoryParam && categoryParam !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === categoryParam
      );
    }

    // Filter by search term
    if (searchTerm) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setProducts(filteredProducts);
  }, [categoryParam, searchTerm]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled by the useEffect
  };

  const handleCategoryChange = (categoryId: string) => {
    setSearchParams({ category: categoryId });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-orange-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Cakes</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our selection of delicious handmade cakes, perfect for any occasion.
              Made with love and premium ingredients.
            </p>
          </div>

          <div className="mb-8">
            <form onSubmit={handleSearch} className="flex max-w-md mx-auto">
              <Input
                type="text"
                placeholder="Search cakes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="rounded-r-none"
              />
              <Button type="submit" className="rounded-l-none bg-orange hover:bg-orange-600">
                <Search size={20} />
              </Button>
            </form>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={categoryParam === category.id ? "default" : "outline"}
                  className={
                    categoryParam === category.id
                      ? "bg-orange hover:bg-orange-600"
                      : "hover:text-orange hover:border-orange"
                  }
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <CakeCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No cakes found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
