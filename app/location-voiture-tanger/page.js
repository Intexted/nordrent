import ReserveCar from "@/components/ReserveCar";
import actions from "@/actions";

async function Vehicules() {
  const cars = await actions.getCars();
  const brands = await actions.getBrands();

  return (
    <div className="vehicules">
      <ReserveCar cars={cars} brands={brands} />
    </div>
  );
}

export default Vehicules;
