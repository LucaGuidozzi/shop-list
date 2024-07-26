import useShopContext from "../../hooks/useShopContext";
import Badge from "../Badge";
import cartIcon from "../../assets/cart.svg";

function CartWidget() {
  const shopContext = useShopContext();
  return (
    <Badge icon={cartIcon} withNumber={shopContext.productsInCart.length} />
  );
}

export default CartWidget;
