"use client";

import CheckoutForm from "./checkoutForm";
import CheckoutRight from "./checkoutRight";
import useOrder from "./hooks/useOrder";
import useUrlQuery from "./hooks/useUrlQuery";

function CheckoutPage({ cars, brands }) {
  const { QueryString, OpenUrl } = useUrlQuery();
  let DValues = QueryString;
  const { total, SelectedCar } = useOrder({ cars, DValues });
  return (
    <div
      style={{
        display: "flex",
        gap: 40,
        justifyContent: "center",
        flexWrap: "wrap",
        maxWidth: "1168px",
        padding: "0 2% 100px",
        overflow: "hidden",
        margin: "auto",
        flexDirection: "row-reverse",
      }}
    >
      {brands && SelectedCar && SelectedCar?.store && (
        <>
          <CheckoutRight total={total} {...{ SelectedCar, brands, DValues }} />
          <CheckoutForm
            SelectedCar={{
              ...SelectedCar,
              brand: brands[SelectedCar?.store]?.name,
            }}
            total={total}
            DValues={DValues}
            OpenUrl={OpenUrl}
          />
        </>
      )}
    </div>
  );
}

export default CheckoutPage;
