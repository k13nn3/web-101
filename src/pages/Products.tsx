
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CakeCard from "@/components/CakeCard";
import { Product } from "@/context/CartContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import img1 from "../../assets/images/Celestia.jpg";
import img2 from "../../assets/images/Sylphira.jpg";
import img3 from "../../assets/images/Isolde.jpg";
import img4 from "../../assets/images/Noctara.jpg";
import img5 from "../../assets/images/Candyra.jpg";
import img6 from "../../assets/images/Pawara.jpg";
import img7 from "../../assets/images/Orlune.jpg";
import img8 from "../../assets/images/Faylen.jpg";

// Sample products data - in a real app, this would come from an API
const allProducts: Product[] = [
  {
    id: 1,
    name: "Celestia Charm",
    price: 5.34,
    image: img1,
    description: "Celestia bracelet symbolizes the sparkling light from the universe, evoking a sense of nobility, purity and timeless beauty for dreamy souls.",
    category: "birthday",
  },
  {
    id: 2,
    name: "Sylphira Charm",
    price: 5.34,
    image: img2,
    description: "Sylphira- wind spirit, very suitable for feathery and dreamy vibe.",
    category: "fruity",
  },
  {
    id: 3,
    name: "Isolde Charm",
    price: 5.34,
    image: img3,
    description: "Isolde is inspired by the European legend of Isolde — the noble heroine and symbol of eternal love in the legendary story Tristan & Isolde.",
    category: "special",
  },
  {
    id: 4,
    name: "Noctara Charm",
    price: 5.34,
    image: img4,
    description: "Noctara is inspired by the image of a night song — gentle, sparkling and enchanting.",
    category: "fruity",
  },
  {
    id: 5,
    name: "Candyra Charm",
    price: 5.34,
    image: img5,
    description: "Candyra bracelets are a symbol of joy of life, freshness and positive energy, for girls who are always radiant and love life.",
    category: "wedding",
  },
  {
    id: 6,
    name: "Pawara Charm",
    price: 5.34,
    image: img6,
    description: "Pawara bracelets are a symbol of love for pets, warmth, cuteness and gentle connection between people and their beloved little friends.",
    category: "special",
  },
  {
    id: 7,
    name: "Orlune Charm",
    price: 5.34,
    image: img7,
    description: "Orlune bracelet symbolizes the light that guides the way in the dark, bringing elegant, profound and enchanting feminine beauty to the wearer.",
    category: "cupcakes",
  },
  {
    id: 8,
    name: "Faylen Charm",
    price: 5.34,
    image: img8,
    description: "Faylen bracelet symbolizes freedom, dreaminess and delicate charm, like fairies flying gently in a mythical garden.",
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
