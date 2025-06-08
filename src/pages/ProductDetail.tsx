
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart, Product } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import CakeCard from "@/components/CakeCard";
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

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    if (productId) {
      // Find the product with matching ID
      const foundProduct = allProducts.find(
        (p) => p.id === parseInt(productId)
      );

      if (foundProduct) {
        setProduct(foundProduct);

        // Find related products (same category, excluding current product)
        const related = allProducts
          .filter(
            (p) => p.category === foundProduct.category && p.id !== foundProduct.id
          )
          .slice(0, 4);
        setRelatedProducts(related);
      }
    }
  }, [productId]);

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      toast({
        title: "Added to cart",
        description: `${quantity} × ${product.name} added to your cart`,
      });
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-12 bg-orange-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-medium mb-4">Product not found</h2>
            <Link to="/products" className="text-orange hover:underline">
              Browse all cakes
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-orange-50">
        <div className="container-custom">
          <div className="mb-6">
            <Link to="/products" className="text-orange hover:underline inline-flex items-center">
              ← Back to Cakes
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <div>
                <h1 className="font-serif text-3xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <p className="text-2xl font-medium text-orange mb-4">
                  ${product.price.toFixed(2)}
                </p>

                <div className="border-t border-b border-gray-200 py-4 my-6">
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10"
                      onClick={decrementQuantity}
                    >
                      <Minus size={16} />
                    </Button>
                    <span className="w-16 text-center text-xl">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10"
                      onClick={incrementQuantity}
                    >
                      <Plus size={16} />
                    </Button>
                  </div>

                  <Button 
                    className="w-full bg-orange hover:bg-orange-600 py-6 text-lg"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart size={20} className="mr-2" />
                    Add to Cart
                  </Button>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="font-medium mr-2">Category:</span>
                    <Link 
                      to={`/products?category=${product.category}`}
                      className="text-orange hover:underline capitalize"
                    >
                      {product.category}
                    </Link>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium mr-2">Share:</span>
                    <div className="flex space-x-2">
                      <a href="#" className="text-gray-400 hover:text-orange">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-orange">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-orange">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="font-serif text-2xl font-bold mb-6">You Might Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {relatedProducts.map((product) => (
                  <CakeCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
