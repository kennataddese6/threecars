import Image from "next/image";
import Car1 from "@/assets/Car1.jpeg";
import Car2 from "@/assets/Car2.jpeg";
import Car3 from "@/assets/Car3.jpeg";
import Car4 from "@/assets/Car4.jpeg";
interface Paramter {
  id: number;
}
export default function BuildCarkit({ params }: { params: Paramter }) {
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
      <div className="contentContainer col-lg-11 col-xl-7">
        <div className="col-lg-8" style={{ backgroundColor: "green" }}>
          <div className="carImagePreivewContainer">
            <Image
              src={carList[params.id].image}
              alt="car1"
              className="carpreivewbuildkit"
            ></Image>
          </div>
          <div className="col-lg-4">another IS HERE</div>
        </div>
        <div className="col-lg-4">
          {" "}
          <div className="addtokitcontainer">
            <input
              type="text"
              placeholder="Search"
              className="buildkitsearchbar"
            />
          </div>
        </div>
      </div>
    </>
  );
}
