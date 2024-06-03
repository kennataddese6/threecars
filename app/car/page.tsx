"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Car1 from "@/assets/Car1.jpeg";
import Car2 from "@/assets/Car2.jpeg";
import Car3 from "@/assets/Car3.jpeg";
import Car4 from "@/assets/Car4.jpeg";
import { FaGear, FaGasPump } from "react-icons/fa6";
import { FaTachometerAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { IoIosColorPalette, IoIosArrowForward } from "react-icons/io";
export default function Car() {
  const headerListItems = [
    "Build you kit",
    "Latest deals",
    "Shop",
    "Why choose us",
  ];
  const carList = [
    {
      name: "Volkswagen Golf R 2.0 TSI R 5dr",
      image: Car1,
      gear: "Automatic",
      date: 2019,
      gas: "Petrol",
      color: "Blue",
      miles: "240 Km/h",
      trending: true,
    },
    {
      name: "Volkswagen Golf R 2.0 TSI R 5dr",
      image: Car2,
      gear: "Manual",
      date: 2023,
      gas: "Diesel",
      color: "Red",
      miles: "320 Km/h",
      trending: false,
    },
    {
      name: "Volkswagen Golf R 2.0 TSI R 5dr",
      image: Car3,
      gear: "Semiauto",
      date: 2024,
      gas: "Gasoline",
      color: "Grey",
      miles: "180 Km/h",
      trending: true,
    },
    {
      name: "Volkswagen Golf R 2.0 TSI R 5dr",
      image: Car4,
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
    router.push(`/car/${id + 1}`);
  };
  return (
    <>
      {/* Header */}
      <div className="headerContainer col-lg-12">
        <div className="headerSubContainer col-lg-11 col-xl-7">
          <div className="logoContainer col-lg-3">BRANDNAME</div>
          <ul className="headerList col-lg-6">
            {headerListItems.map((item, index) => (
              <li key={index} className="headerItem">
                {item}
              </li>
            ))}
          </ul>
          <div className="rightheader col-xl-3">
            <button className="signinbtn">Sign in</button>
            <button className="btn btn-primary">Sign up</button>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="contentContainer col-lg-11 col-xl-7">
        <div className="shopFilterPanel col-lg-4">
          <div className="filtercard">
            <h6 className="white-text"> Make</h6>
            <IoIosArrowForward color="white" />
          </div>
          <div className="filtercard">
            <h6 className="white-text"> Body type</h6>
            <IoIosArrowForward color="white" />
          </div>
          <div className="filtercard">
            <h6 className="white-text"> Doors</h6>
            <IoIosArrowForward color="white" />
          </div>
          <div className="filtercard">
            <h6 className="white-text"> Seat</h6>
            <IoIosArrowForward color="white" />
          </div>
          <div className="filtercard">
            <h6 className="white-text"> Fuel</h6>
            <IoIosArrowForward color="white" />
          </div>
        </div>
        <div className="col-lg-8">
          {carList.map((car, index) => (
            <div className="shopCards" key={index}>
              <div className="col-lg-5">
                {car.trending && <div className="tredingBanner">Trending </div>}
                <Image
                  className="shopImage"
                  src={car.image}
                  alt={car.name}
                ></Image>
              </div>
              <div className="shopDescriptionHolder col-lg-7">
                <h6 className="white-text">{car.name}</h6>
                <div className="moredetailContainer">
                  <div className="d-flex col-lg-6">
                    <FaGear color="white" fontSize={22} />
                    <p className="px-2 white-text">{car.gear}</p>
                  </div>
                  <div className="d-flex col-lg-6">
                    <FaGasPump color="white" fontSize={22} />
                    <p className="px-2 white-text">{car.gas}</p>
                  </div>
                  <div className="d-flex col-lg-6">
                    <MdDateRange color="white" fontSize={22} />
                    <p className="px-2 white-text">{car.date}</p>
                  </div>
                  <div className="d-flex col-lg-6">
                    <IoIosColorPalette color="white" fontSize={22} />
                    <p className="px-2 white-text">{car.color}</p>
                  </div>
                  <div className="d-flex col-lg-6">
                    <FaTachometerAlt color="white" fontSize={22} />
                    <p className="px-2 white-text">{car.miles}</p>
                  </div>
                </div>
                <button
                  className="buildbutton btn btn-primary"
                  onClick={() => handleClick(index)}
                >
                  Build
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
