"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Splash() {
  const pathname = usePathname();
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setSplash(true);
    setTimeout(() => {
      setSplash(false);
    }, 1500);
  }, [pathname]);
  return (
    <>
      {splash && (
        <>
          <div className="overlay"></div>
          <div className="Splash">
            <Image
              width={200}
              height={200}
              src="/images/car_anim.svg"
              alt="loading logo"
              className="logo"
            />
            <div className="car">
              <Image
                width={100}
                height={100}
                src="/images/car_wheel.svg"
                alt="loading logo"
                className="wheel"
              />
              <div className="bgs"></div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Splash;
