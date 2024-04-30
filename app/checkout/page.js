import actions from "@/actions";
import CheckoutPage from "@/components/CheckoutPage";
import "@/styles/checkout.css";

async function Checkout() {
  const cars = await actions.getCars();
  const brands = await actions.getBrands();

  return (
    <div className="checkout">
      <CheckoutPage cars={cars} brands={brands} />
    </div>
  );
}

export default Checkout;
