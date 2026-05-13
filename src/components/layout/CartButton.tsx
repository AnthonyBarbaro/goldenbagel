import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CartButton() {
  return (
    <Button href="/order" variant="dark" size="sm" className="relative">
      <ShoppingBag aria-hidden="true" size={18} />
      <span>Cart</span>
    </Button>
  );
}
