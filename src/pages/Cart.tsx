
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartItem from "@/components/CartItem";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Cart: React.FC = () => {
  const { items, total, clearCart } = useCart();
  const { toast } = useToast();

  const handleCheckout = () => {
    // In a real app, this would redirect to checkout
    toast({
      title: "Checkout",
      description: "This would redirect to the checkout page in a real app.",
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-12 bg-orange-50 flex items-center justify-center">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <ShoppingCart size={64} className="text-gray-300" />
            </div>
            <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added any cakes to your cart yet.
            </p>
            <Link to="/products">
              <Button className="bg-orange hover:bg-orange-600">
                Browse Cakes
              </Button>
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
          <div className="text-center mb-10">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Your Cart</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Review your items and proceed to checkout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-medium">
                    Items ({items.length})
                  </h2>
                  <Button
                    variant="ghost"
                    className="text-gray-500 hover:text-orange"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>

                <div className="divide-y divide-gray-200">
                  {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-medium mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">${(total * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between">
                    <span className="font-medium">Total</span>
                    <span className="font-bold text-xl text-orange">
                      ${(total + total * 0.1).toFixed(2)}
                    </span>
                  </div>
                </div>

                <Button
                  className="w-full bg-orange hover:bg-orange-600 py-6"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>

                <div className="mt-6 text-center">
                  <Link to="/products" className="text-orange hover:underline inline-flex items-center">
                    ← Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
