import Image from "next/image";
import Car1 from "@/assets/Car1.jpeg";
import Car2 from "@/assets/Car2.webp";
import Car3 from "@/assets/Car3.jpeg";
import Car4 from "@/assets/Car4.jpeg";
import Light1 from "@/assets/light1.jpg";
import Light2 from "@/assets/light2.jpg";
import Light3 from "@/assets/light3.jpg";
import Light4 from "@/assets/light4.jpeg";
import Light5 from "@/assets/image5.jpg";
import { FaPlus } from "react-icons/fa";
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
        <div className="headerSubContainer col-lg-11 col-xl-9">
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
      <div className="contentContainer col-lg-11 col-xl-9">
        <div className="col-lg-8" style={{ backgroundColor: "black" }}>
          <div className="carImagePreivewContainer">
            <Image
              src={carList[params.id].image}
              alt="car1"
              className="carpreivewbuildkit"
            ></Image>
          </div>
          <div className="choiceContainer">
            <div className="choiceItemContainer col-lg-3">
              <Image
                src={Light1}
                alt="Car 1"
                className="carpreivewbuildkit"
              ></Image>
            </div>
            <div className="choiceItemContainer col-lg-3">
              {" "}
              <Image
                src={Light2}
                alt="Car 1"
                className="carpreivewbuildkit"
              ></Image>
            </div>
            <div className="choiceItemContainer col-lg-3">
              <Image
                src={Light3}
                alt="Car 1"
                className="carpreivewbuildkit"
              ></Image>
            </div>
            <div className="choiceItemContainer col-lg-3">
              <Image
                src={Light2}
                alt="Car 1"
                className="carpreivewbuildkit"
              ></Image>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          {" "}
          <div className="addtokitcontainer">
            <input
              type="text"
              placeholder="Search"
              className="buildkitsearchbar"
            />
            <div className="addKitsContainer">
              <div className="addkitImagecontainer">
                <Image src={Light1} alt="Car1" className="kitImage"></Image>
              </div>
              <div className="kitdescriptionContainer col-lg-7">
                <h6 className="white-text">Light title</h6>
                <p className="white-text">
                  This is a small description about the light
                </p>
              </div>
              <div className="addkitcontainer col-lg-1">
                <FaPlus color="dodgerblue" />{" "}
              </div>
            </div>
            <div className="addKitsContainer">
              <div className="addkitImagecontainer">
                <Image src={Light2} alt="Car1" className="kitImage"></Image>
              </div>
              <div className="kitdescriptionContainer col-lg-7">
                <h6 className="white-text">Light title</h6>
                <p className="white-text">
                  This is a small description about the light
                </p>
              </div>
              <div className="addkitcontainer col-lg-1">
                <FaPlus color="dodgerblue" />{" "}
              </div>
            </div>
            <div className="addKitsContainer">
              <div className="addkitImagecontainer">
                <Image src={Light3} alt="Car1" className="kitImage"></Image>
              </div>
              <div className="kitdescriptionContainer col-lg-7">
                <h6 className="white-text">Light title</h6>
                <p className="white-text">
                  This is a small description about the light
                </p>
              </div>
              <div className="addkitcontainer col-lg-1">
                <FaPlus color="dodgerblue" />{" "}
              </div>
            </div>
            <div className="addKitsContainer">
              <div className="addkitImagecontainer">
                <Image src={Light5} alt="Car1" className="kitImage"></Image>
              </div>
              <div className="kitdescriptionContainer col-lg-7">
                <h6 className="white-text">Light title</h6>
                <p className="white-text">
                  This is a small description about the light
                </p>
              </div>
              <div className="addkitcontainer col-lg-1">
                <FaPlus color="dodgerblue" />{" "}
              </div>
            </div>
            <div className="addKitsContainer">
              <div className="addkitImagecontainer">
                <Image src={Light4} alt="Car1" className="kitImage"></Image>
              </div>
              <div className="kitdescriptionContainer col-lg-7">
                <h6 className="white-text">Light title</h6>
                <p className="white-text">
                  This is a small description about the light
                </p>
              </div>
              <div className="addkitcontainer col-lg-1">
                <FaPlus color="dodgerblue" />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
