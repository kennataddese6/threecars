import Image from "next/image";
import Car1 from "@/assets/Car1.jpeg";
import Car2 from "@/assets/Car2.jpeg";
import Car3 from "@/assets/Car3.jpeg";
import Car4 from "@/assets/Car4.jpeg";
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
    },
    {
      name: "Volkswagen Golf R 2.0 TSI R 5dr",
      image: Car2,
    },
    {
      name: "Volkswagen Golf R 2.0 TSI R 5dr",
      image: Car3,
    },
    {
      name: "Volkswagen Golf R 2.0 TSI R 5dr",
      image: Car4,
    },
  ];
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
        <div className="shopFilterPanel col-lg-4">hi</div>
        <div className="col-lg-8">
          {carList.map((car) => (
            <div className="shopCards">
              <div className="col-lg-6">
                <Image
                  className="shopImage"
                  src={car.image}
                  alt={car.name}
                ></Image>
              </div>
              <div className="shopDescriptionHolder col-lg-6">
                <h6 className="white-text">{car.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
