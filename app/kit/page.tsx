"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Car1 from "@/assets/Car1.webp";
import Car2 from "@/assets/Car2.webp";
import Car3 from "@/assets/Car3.webp";
import Car4 from "@/assets/Car4.webp";
import Car5 from "@/assets/Car5.webp";
import Car6 from "@/assets/Car6.webp";
import Car7 from "@/assets/Car7.webp";
import Car8 from "@/assets/Car8.webp";
import Car9 from "@/assets/Car9.webp";
import Car10 from "@/assets/Car10.webp";
import Car11 from "@/assets/Car11.webp";
export default function Car() {
  const headerListItems = [
    {
      name: "Home",
      active: false,
      des: "/",
    },
    {
      name: "Make your own kit",
      active: true,
      des: "/kit",
    },
    {
      name: "Parts for sale",
      active: false,
      des: "/",
    },
    {
      name: "Our services",
      active: false,
      des: "/",
    },
  ];
  const carList = [
    {
      name: "Lexus",
      image: Car1,
      gear: "Automatic",
      date: 2019,
      gas: "Petrol",
      color: "Blue",
      miles: "240 Km/h",
      trending: true,
    },
    {
      name: "RAM",
      image: Car2,
      gear: "Manual",
      date: 2023,
      gas: "Diesel",
      color: "Red",
      miles: "320 Km/h",
      trending: false,
    },
    {
      name: "Chevrolet",
      image: Car4,
      gear: "Automatic",
      date: 2024,
      gas: "Petrol",
      color: "Red",
      miles: "340 Km/h",
      trending: false,
    },
    {
      name: "Mazda",
      image: Car3,
      gear: "Semiauto",
      date: 2024,
      gas: "Gasoline",
      color: "Grey",
      miles: "180 Km/h",
      trending: true,
    },
    {
      name: "Honda",
      image: Car7,
      gear: "Automatic",
      date: 2024,
      gas: "Petrol",
      color: "Red",
      miles: "340 Km/h",
      trending: false,
    },
    {
      name: "Mini",
      image: Car5,
      gear: "Automatic",
      date: 2024,
      gas: "Petrol",
      color: "Red",
      miles: "340 Km/h",
      trending: false,
    },
    {
      name: "Subaru",
      image: Car6,
      gear: "Automatic",
      date: 2024,
      gas: "Petrol",
      color: "Red",
      miles: "340 Km/h",
      trending: false,
    },
    {
      name: "Jeep",
      image: Car8,
      gear: "Automatic",
      date: 2024,
      gas: "Petrol",
      color: "Red",
      miles: "340 Km/h",
      trending: false,
    },
    {
      name: "Audi",
      image: Car9,
      gear: "Automatic",
      date: 2024,
      gas: "Petrol",
      color: "Red",
      miles: "340 Km/h",
      trending: false,
    },
    {
      name: "Dodge",
      image: Car10,
      gear: "Automatic",
      date: 2024,
      gas: "Petrol",
      color: "Red",
      miles: "340 Km/h",
      trending: false,
    },
    {
      name: "Volkswagen",
      image: Car11,
      gear: "Automatic",
      date: 2024,
      gas: "Petrol",
      color: "Red",
      miles: "340 Km/h",
      trending: false,
    },
  ];
  const router = useRouter();
  const handleClick = (id: number) => {
    router.push(`/kit/${id}`);
  };
  return (
    <>
      {/* Header */}
      <div className="headerContainer col-lg-12">
        <div className="headerSubContainer col-lg-11 col-xl-9">
          <div className="logoContainer col-lg-3">MT Lights</div>
          <ul className="headerList col-lg-8 col-xl-6">
            {headerListItems.map((item, index) => (
              <li
                key={index}
                className={
                  item.active ? `headerItemActive headerItem` : ` headerItem`
                }
                onClick={() => router.push(item.des)}
              >
                {item.name}
              </li>
            ))}
          </ul>
          <div className="rightheader col-xl-3">
            {/* <button className="signinbtn">Sign in</button> */}
            <button className="btn btn-primary">Sign in</button>
          </div>
        </div>
      </div>
      <div>
        <h6
          style={{ color: "white", marginTop: "154px" }}
          className="center-text"
        >
          Choose you car model
        </h6>
      </div>

      {/* Content */}
      <div className="contentContainer col-lg-11 col-xl-9">
        {carList.map((car, index) => (
          <div className="carCardContainer col-lg-3" key={index}>
            <div
              className="carCardImage"
              onClick={() => {
                handleClick(index);
              }}
            >
              {" "}
              <Image src={car.image} alt="Car image" className="shopImage" />
              <div className="carmodelTitle">
                {" "}
                <h6 style={{ margin: 0 }}>{car.name}</h6>{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
