"use client";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import { FaCar } from "react-icons/fa";
import Slider from "react-slick";
import Vw from "@/assets/Vw.png";
import lexus from "@/assets/lexus.png";
import honda from "@/assets/honda.png";
import dodge from "@/assets/dodge.png";
import audi from "@/assets/audi.png";
import chev from "@/assets/chev.png";
import mazda from "@/assets/mazda.png";
import ram from "@/assets/ram.png";
import subaru from "@/assets/subaru.png";
import mini from "@/assets/mini.png";
import jeep from "@/assets/jeep.png";
import { RiCarLine } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";
import { CiAlarmOn } from "react-icons/ci";
import sports from "@/assets/sports.png";
import sports2 from "@/assets/sports2.png";
import {
  FaRegClock,
  FaPhone,
  FaCheckCircle,
  FaCartPlus,
  FaTruckMoving,
} from "react-icons/fa";
export default function Home() {
  const router = useRouter();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
        <button className="works-button " style={{ margin: "auto" }}>
          How it works
        </button>
        <h1 className="steps-header">Buy with following 3 working steps</h1>
      </div>
      <div className="stepsContainer col-lg-10 col-xl-8 center-text">
        <div className="col-lg-3 stepItemContainer">
          <div className="stepIconContainer">
            <FaCheckCircle color="#0d6efd" fontSize={32} />
          </div>
          <h6 className="center-text ">
            <b>Choose car model</b>
          </h6>
          <p className="stepsPargraph">
            Select you car model from the build kit.{" "}
          </p>
        </div>
        <div className="col-lg-3 stepItemContainer">
          <div className="stepIconContainer">
            <FaCartPlus color="#0d6efd" fontSize={32} />
          </div>
          <h6 className="center-text ">
            <b>Add your lights</b>
          </h6>
          <p className="stepsPargraph">
            Add you lights for the car of your choice.{" "}
          </p>
        </div>
        <div className="col-lg-3 stepItemContainer">
          <div className="stepIconContainer">
            <FaTruckMoving color="#0d6efd" fontSize={32} />
          </div>
          <h6 className="center-text ">
            <b>Order you kits</b>
          </h6>
          <p className="stepsPargraph">
            Book your lights and we will deliver it to you.{" "}
          </p>
        </div>
      </div>
      <div className="brandsContainer">
        <Slider {...settings}>
          <div>
            <Image
              src={Vw}
              alt="Volswagen"
              width={100}
              className="center-item"
            />
          </div>
          <div>
            {" "}
            <Image
              src={lexus}
              alt="Volswagen"
              width={100}
              className="center-item"
            />
          </div>
          <div>
            {" "}
            <Image
              src={dodge}
              alt="Volswagen"
              width={100}
              className="center-item"
            />
          </div>
          <div>
            <Image
              src={audi}
              alt="Volswagen"
              width={100}
              className="center-item"
              height={100}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <Image
              src={chev}
              alt="Volswagen"
              width={100}
              className="center-item"
              height={100}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <Image
              src={ram}
              alt="Volswagen"
              width={100}
              className="center-item"
              height={100}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <Image
              src={mazda}
              alt="Volswagen"
              width={100}
              className="center-item"
              height={80}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <Image
              src={honda}
              alt="Volswagen"
              width={100}
              height={100}
              className="center-item"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <h3 className="center-text">
              <div>
                <Image
                  src={mini}
                  alt="Volswagen"
                  width={100}
                  className="center-item"
                  height={100}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </h3>
          </div>
          <div>
            <h3 className="center-text">
              <Image
                src={jeep}
                alt="Volswagen"
                width={100}
                className="center-item"
                height={100}
                style={{ objectFit: "cover" }}
              />
            </h3>
          </div>
          <div>
            <h3 className="center-text">
              <Image
                src={subaru}
                alt="Volswagen"
                width={100}
                className="center-item"
                height={100}
                style={{ objectFit: "cover" }}
              />
            </h3>
          </div>
        </Slider>
      </div>
      <motion.div
        className="contentContainer col-lg-11 col-xl-9"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.5, ease: "easeInOut" }}
      >
        <div className="col-lg-6">
          <Image src={sports2} alt="Second Image" className="heroImage" />
        </div>
        <div className="firstServiceContainer col-lg-6">
          <div className=" serviceHolder col-xl-9">
            {" "}
            <button className="service-button">Our services</button>
            <h3 className="servicesSubHeader">
              We offer the best experience with our sales
            </h3>
            <div className="servicesContainer">
              <div className="serviceIconContainer">
                <FaCar fontSize={24} color="#0d6efd" />
              </div>
              <div className="serviceDescription">
                <h6 className="stepstext">Custom headlight</h6>
                <p className="servicesPargraph">
                  See you car become the start of the show with lights that
                  perfectly highlights it shape
                </p>
              </div>
            </div>
            <div className="servicesContainer">
              <div className="serviceIconContainer">
                <RiCarLine fontSize={24} color="#0d6efd" />
              </div>
              <div className="serviceDescription">
                <h6 className="stepstext">Custom backlight</h6>
                <p className="servicesPargraph">
                  Make everyone look back and imprint a memorable signature with
                  our stylish backlights
                </p>
              </div>
            </div>
            <div className="servicesContainer">
              <div className="serviceIconContainer">
                <CiShoppingCart fontSize={24} color="#0d6efd" />
              </div>
              <div className="serviceDescription">
                <h6 className="stepstext">Make your own kits</h6>
                <p className="servicesPargraph">
                  With our customizable options, you car will reflect your
                  distinct taste.
                </p>
              </div>
            </div>
            <div className="servicesContainer">
              <div className="serviceIconContainer">
                <CiAlarmOn fontSize={24} color="#0d6efd" />
              </div>
              <div className="serviceDescription">
                <h6 className="stepstext">Parts for sale</h6>
                <p className="servicesPargraph">
                  Coming soon with our latest products
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="footerOne">
        <h1 className="center-text play-write">Get in touch with us</h1>
        <div className="contactUsFormContainer col-lg-3">
          <input type="text" placeholder="Name" className="contactinputs" />
          <input type="text" placeholder="Email" className="contactinputs" />
          <textarea placeholder="Message" className="contact-text-area" />
          <button
            style={{ padding: "8px 0" }}
            className="btn btn-dark contactUsButton"
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
