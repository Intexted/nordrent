"use client";

import moment from "moment";
import { useEffect, useState } from "react";

function useOrder({ car = null, setEditDays = () => {}, cars = [], DValues }) {
  const [price, setPrice] = useState(0);
  const [days, setDays] = useState(0);
  const [add, setAdd] = useState(0);
  const [SelectedCar, setSelectedCar] = useState(car);

  useEffect(() => {
    const CAR = !car ? cars?.find((c) => DValues?.car === c?._id) : car;
    setSelectedCar(CAR);

    const month = moment(DValues?.startDate)?.month();
    let p = month < 6 ? CAR?.prix : month < 8 ? CAR?.prix1 : CAR?.prix2 || 0;
    setPrice(p);
    if (DValues?.endDate && DValues?.startDate) {
      setDays(moment(DValues?.endDate).diff(DValues?.startDate, "days"));
    } else {
      setEditDays(true);
    }
    if (DValues) {
      let total = 0;
      if (DValues?.NavigateurGPS === "true") total += 200 * days;
      if (DValues?.RehausseurEnfant === "true") total += 100 * days;
      if (DValues?.SiegeEnfant === "true") total += 200 * days;
      if (DValues?.assurancevc === "true") total += 350 * days;
      if (DValues?.assurancepv === "true") total += 200 * days;
      setAdd(total);
    }
  }, [car, cars, DValues, days, setEditDays]);

  return {
    price,
    days,
    total: price * (days > 0 ? days : 1) + add,
    SelectedCar,
  };
}

export default useOrder;
