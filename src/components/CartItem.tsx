
import React from "react";
import { CartItem as CartItemType } from "@/context/CartContext";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X } from "lucide-react";

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncreaseQuantity = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };

  return (
    <div className="flex items-center py-6 border-b border-gray-200">
      <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="ml-4 flex-1">
        <h3 className="font-medium text-gray-900">{item.name}</h3>
        <p className="mt-1 text-sm text-gray-500">${item.price.toFixed(2)}</p>
      </div>

      <div className="flex items-center ml-4">
        <div className="flex items-center border border-gray-200 rounded-md">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-none"
            onClick={handleDecreaseQuantity}
          >
            <Minus size={14} />
          </Button>
          <span className="w-10 text-center">{item.quantity}</span>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-none"
            onClick={handleIncreaseQuantity}
          >
            <Plus size={14} />
          </Button>
        </div>
      </div>

      <div className="ml-4 text-right">
        <p className="font-medium text-gray-900">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="ml-4 text-gray-400 hover:text-gray-500"
        onClick={() => removeFromCart(item.id)}
      >
        <X size={18} />
      </Button>
    </div>
  );
};

export default CartItem;
