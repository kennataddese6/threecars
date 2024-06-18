"use client";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import FirstImage from "@/assets/FirstImage.webp";
import SecondImage from "@/assets/SecondImage.webp";
import ThirdImage from "@/assets/ThirdImage.webp";
import FourthImage from "@/assets/FourthImage.webp";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import { MdClose } from "react-icons/md";
import { MdMenu } from "react-icons/md";
export default function Home() {
  const router = useRouter();
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
    disableHeaders();
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
    <>
      <ToastContainer theme="dark" />
      <div className="headerContainer col-lg-12" id="headerContainer">
        <div className="headerSubContainer col-lg-11 col-xl-9">
          <div className="logoContainer col-lg-3 roboto-regular">
            MT CUSTOM LIGHTS
            <MdClose
              color="white"
              fontSize={"1.5rem"}
              onClick={disableHeaders}
              id="closeicon"
              style={{ display: "none" }}
            />
            <MdMenu
              color="white"
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
                  item.active ? `headerItemActive headerItem` : ` headerItem`
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
      <motion.div
        className="contentContainer col-lg-11 col-xl-9"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
      >
        <h1 className="white-text center-text landingpageHeaderText zen-tokyo-zoo-regular">
          Brighten the darkness with intense LED headlights and imprint a
          memorable signature with stylishly designed taillights. Boost your
          automobile{"'"}s outdoor illumination for unequaled clarity and class.
        </h1>

        <Image
          src={FirstImage}
          alt="Landing page Image"
          className="LandingpageImageone"
        />
        <br />
      </motion.div>
      <div className="contentContainer col-lg-11 col-xl-9" id="service">
        <motion.h1
          className="white-text center-text landingpageHeaderText roboto-regular"
          style={{ width: "100%" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
        >
          Our services
        </motion.h1>
      </div>
      <motion.div
        className="contentContainer col-lg-11 col-xl-9"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.5, ease: "easeInOut" }}
      >
        <div className="col-lg-6">
          {" "}
          <Image
            src={SecondImage}
            alt="Second Image"
            style={{
              borderRadius: "16px",
              width: "90%",
              height: "60vh",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="col-lg-6 firstServiceContainer">
          <h1 className="white-text play-write">Custom Headlights</h1>
          <p className="customHeadlightsParagraph inconsolata">
            See your car become the star of the show with lights that perfectly
            highlight its shape, making it impossible to ignore.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="contentContainer col-lg-11 col-xl-9"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.5, ease: "easeInOut" }}
      >
        <div className="col-lg-6 firstServiceContainer">
          {" "}
          <h1 className="white-text play-write">Custom backlights</h1>
          <p className="customHeadlightsParagraph inconsolata">
            Imagine your car’s tail lights drawing every eye, their radiant glow
            highlighting its sleek lines and bold design, ensuring everyone
            remembers your departure.
          </p>
        </div>
        <div className="col-lg-6 ">
          <Image
            src={ThirdImage}
            alt="Second Image"
            style={{
              borderRadius: "16px",
              width: "100%",
              height: "60vh",
              objectFit: "cover",
            }}
          />
        </div>
      </motion.div>
      <motion.div
        className="contentContainer col-lg-11 col-xl-9"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.5, ease: "easeInOut" }}
      >
        <div className="col-lg-6">
          {" "}
          <Image
            src={FourthImage}
            alt="Second Image"
            style={{
              borderRadius: "16px",
              width: "90%",
              height: "60vh",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="col-lg-6 firstServiceContainer">
          <h1 className="white-text play-write">Make your own kit</h1>
          <p className="customHeadlightsParagraph inconsolata">
            With our customizable options, your car will reflect your distinct
            taste, making every drive a testament to your personal style.
          </p>
        </div>
      </motion.div>
      <div className="footerOne">
        <h1 className="center-text play-write" style={{ marginTop: "24px" }}>
          Get in touch with us
        </h1>
        <div className="contactUsFormContainer col-lg-3">
          <input type="text" placeholder="Name" className="contactinputs" />
          <input type="text" placeholder="Email" className="contactinputs" />
          <textarea
            placeholder="Message"
            style={{ width: "100%", height: "128px" }}
            className="contactinputs"
          />
          <button
            style={{ width: "100%", padding: "8px 0", marginTop: "6px" }}
            className="btn btn-dark"
          >
            Get in touch with us
          </button>
        </div>
      </div>
      <div className="copyRightFooter">
        <h6 className="white-text">MT Lights</h6>
        <h6 className="white-text">Instagram Email</h6>
      </div>
    </>
  );
}
