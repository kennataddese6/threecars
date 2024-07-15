"use client";
import { MdClose, MdMenu } from "react-icons/md";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const headerListItems = [
    {
      name: "Home",
      active: true,
      des: "/",
    },
    {
      name: "Make your own kit",
      active: false,
      des: "/kit",
    },
    {
      name: "Parts for sale",
      active: false,
      des: "/shop",
    },
    {
      name: "Our services",
      active: false,
      des: "#service",
    },
  ];

  const getElement = (id: string) => {
    return document.getElementById(id);
  };
  const setDisplay = (
    elementId: string,
    displayValue: string,
    height: string
  ) => {
    const element = getElement(elementId);
    if (element) {
      element.style.display = displayValue;
      element.style.height = height;
    }
  };
  const disableHeaders = () => {
    setDisplay("header", "none", "auto");
    setDisplay("headerright", "none", "auto");
    setDisplay("closeicon", "none", "auto");
    setDisplay("menuicon", "block", "auto");
    setDisplay("headerContainer", "block", "auto");
  };

  const enableHeader = () => {
    setDisplay("header", "block", "auto");
    setDisplay("headerright", "block", "auto");
    setDisplay("closeicon", "block", "auto");
    setDisplay("menuicon", "none", "auto");
    setDisplay("headerContainer", "block", "100vh");
  };
  const handleNavigation = (nav: String) => {
    if (nav === "/shop") {
      const data = localStorage.getItem("sale");
      if (data) {
        router.push("shop");
      } else {
        toast.info("Coming soon.");
      }
    } else {
      router.push(`${nav}`);
    }
  };
  return (
    <div className="headerContainer col-lg-12" id="headerContainer">
      <div className="headerSubContainer col-lg-11 col-xl-10 col-xxl-9">
        <div className="logoContainer col-lg-3 ">
          MT CUSTOM LIGHTS
          <MdClose
            color="black"
            fontSize={"1.5rem"}
            onClick={disableHeaders}
            id="closeicon"
            style={{ display: "none" }}
          />
          <MdMenu
            color="black"
            fontSize={"1.5rem"}
            onClick={enableHeader}
            id="menuicon"
          />
        </div>
        <ul className="headerList col-lg-8 col-xl-6" id="header">
          {headerListItems.map((item, index) => (
            <li
              key={index}
              className={
                pathname === item.des || pathname.startsWith(`${item.des}/`)
                  ? `headerItemActive headerItem`
                  : ` headerItem`
              }
              onClick={() => handleNavigation(item.des)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        <div className="rightheader col-xl-3" id="headerright">
          <button
            className="btn btn-primary"
            onClick={() => router.push("/signin")}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
