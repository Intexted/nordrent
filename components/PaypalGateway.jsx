"use client";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import toast from "react-hot-toast";

function PaypalGateway({ total, createOrder }) {
  const onError = (err) => {
    toast.error(err);
  };
  return (
    <div className="">
      <PayPalScriptProvider
        options={{
          "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
          currency: "EUR",
        }}
      >
        <PayPalButtons
          style={{ layout: "horizontal" }}
          onCancel={() => console.log("exit")}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      value: total / 10,
                    },
                  },
                ],
              })
              .then((orderID) => {
                console.log(orderID);
                return orderID;
              });
          }}
          onApprove={(data, actions) => {
            return actions?.order?.capture()?.then((details) => {
              createOrder({ payment: "Paypal", paymentDetails: details });
              const name = details?.payer?.name?.given_name;
              alert(`Transaction completed by ${name}`);
            });
          }}
          onError={onError}
        ></PayPalButtons>
      </PayPalScriptProvider>
    </div>
  );
}

export default PaypalGateway;
