
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/context/CartContext";

interface CakeCardProps {
  product: Product;
}

const CakeCard: React.FC<CakeCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${product.id}`} className="block relative">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="font-serif text-lg font-medium mb-1 text-gray-800">{product.name}</h3>
          <p className="text-orange font-semibold">${product.price.toFixed(2)}</p>
          <div className="mt-4 flex justify-between items-center">
            <Button
              variant="outline"
              size="sm"
              className="w-full mr-2 hover:bg-orange hover:text-white hover:border-orange transition-colors"
              onClick={(e) => handleAddToCart(e)}
            >
              <ShoppingCart size={16} className="mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CakeCard;
