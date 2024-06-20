"use client";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import FirstImage from "@/assets/FirstImage.webp";
import SecondImage from "@/assets/SecondImage.webp";
import ThirdImage from "@/assets/ThirdImage.png";
import FourthImage from "@/assets/FourthImage.webp";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import { MdClose, MdMenu, MdLocationOn } from "react-icons/md";
import { FaRegClock, FaPhone } from "react-icons/fa";
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

      <div className="contentContainer col-lg-11 col-xl-9" id="service"></div>
      <motion.div
        className="contentContainer col-lg-11 col-xl-9"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.5, ease: "easeInOut" }}
      >
        <div className="col-lg-6 firstServiceContainer">
          {" "}
          <h1 className="heroheaderText">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeIn" }}
            >
              See{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7, ease: "easeIn" }}
            >
              through{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9, ease: "easeIn" }}
            >
              the{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6, ease: "easeIn" }}
            >
              {" "}
              Darkness
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.4, ease: "easeIn" }}
              className="now-span"
            >
              {" "}
              Now{" "}
            </motion.span>
          </h1>
          <p className="customHeadlightsParagraph">
            Imagine your car’s tail lights drawing every eye, their radiant glow
            highlighting its sleek lines and bold design, ensuring everyone
            remembers your departure.
          </p>
          <button className="callActionButton"> Build kit </button>
        </div>
        <div className="col-lg-6 ">
          <Image src={ThirdImage} alt="Second Image" className="heroImage" />
        </div>
      </motion.div>
      <div className="sneakinfo col-lg-11 col-xl-9">
        <div className="sneakInfoItem">
          <MdLocationOn fontSize={32} color="grey" />
          <div>
            <h6>Location</h6>
            <p>Check our location.</p>
          </div>
        </div>
        <div className="sneakInfoItem borderLine">
          <FaRegClock fontSize={32} color="grey" />
          <div>
            <h6>Working Hours</h6>
            <p>Mon-Fri 8:00 am – 12:30 pm</p>
          </div>
        </div>
        <div className="sneakInfoItem borderLine">
          <FaPhone fontSize={32} color="grey" />
          <div>
            <h6>Our Contact</h6>
            <p>+1734310734329</p>
          </div>
        </div>
        <button className="btn btn-primary">Call us</button>
      </div>
      <div className="workstep col-lg-11 col-xl-9">
        <button className="works-button center-item">How it works</button>
        <h1 className="steps-header">Buy with following 3 working steps</h1>
      </div>
      <div className="footerOne">
        <h1 className="center-text play-write">Get in touch with us</h1>
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
