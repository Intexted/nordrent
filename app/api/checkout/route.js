import moment from "moment";
import { v4 } from "uuid";
import { NextResponse } from "next/server";

const MyId = () => "61f" + v4()?.replaceAll("-", "")?.slice(0, 21);

export async function POST(req) {
  const order = await req.json();
  // console.log(order);
  const id = MyId();
  // console.log("id", id);

  const invoice = {
    invoiceNumber: id,
    date: moment().format("yyyy-MM-DD"),
    customerName:
      order?.personalData?.gender +
      " " +
      order?.personalData?.first_name +
      " " +
      order?.personalData?.last_name,
    customerPhone: order?.personalData?.phone,
    customerEmail: order?.personalData?.email,
    pickUpDate: order?.orderDetails?.startDate,
    pickOffDate: order?.orderDetails?.endDate,
    pickUpLocation: order?.orderDetails?.startLocation,
    pickOffLocation: order?.orderDetails?.endLocation,
    pickUpTime: order?.orderDetails?.startTime,
    pickOffTime: order?.orderDetails?.endTime,
    status: "En attente",
    payment: order.payment,
    quantity:
      moment(order?.orderDetails?.endDate).diff(
        order?.orderDetails?.startDate,
        "days"
      ) + " Jour(s)",
    total: order?.total + " DH",
  };

  const url =
    "https://new-nord-default-rtdb.firebaseio.com/orders/" + id + ".json";
  const data = {
    ...order,
    _id: id,
    date: new Date(),
  };

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      // Handle non-200 status codes (e.g., 404, 500)
      throw new Error("Server error. Please try again.");
    }

    // Success: Do something with the response (e.g., log or process data)
    return NextResponse.json(
      {
        success: "Order Created Successfuly",
        invoice,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    // Handle the error (e.g., show an error message to the user)
    return NextResponse.json(
      {
        err: "Server error. Please try again.",
      },
      { status: 500 }
    );
  }
}
