"use client";
import "./globals.css";
import FirstImage from "@/assets/FirstImage.webp";
import SecondImage from "@/assets/SecondImage.webp";
import ThirdImage from "@/assets/ThirdImage.webp";
import FourthImage from "@/assets/FourthImage.webp";
import { useRouter } from "next/navigation";
import Image from "next/image";
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
      des: "/",
    },
    {
      name: "Our services",
      active: false,
      des: "/",
    },
  ];
  return (
    <>
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
      <div
        className="contentContainer col-lg-11 col-xl-9"
        style={{ marginTop: "162px" }}
      >
        <h1 className="white-text center-text landingpageHeaderText">
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
      </div>
      <div className="contentContainer col-lg-11 col-xl-9">
        <h1
          className="white-text center-text landingpageHeaderText"
          style={{ width: "100%" }}
        >
          Our services
        </h1>
      </div>
      <div className="contentContainer col-lg-11 col-xl-9">
        <div className="col-lg-6">
          {" "}
          <Image
            src={SecondImage}
            alt="Second Image"
            style={{ borderRadius: "16px", width: "90%", objectFit: "cover" }}
          />
        </div>
        <div className="col-lg-6 firstServiceContainer">
          <h1 className="white-text">Custom Headlights</h1>
          <p className="customHeadlightsParagraph">
            See your car become the star of the show with lights that perfectly
            highlight its shape, making it impossible to ignore.
          </p>
        </div>
      </div>
      <div className="contentContainer col-lg-11 col-xl-9">
        <div className="col-lg-6 firstServiceContainer">
          {" "}
          <h1 className="white-text">Custom backlights</h1>
          <p className="customHeadlightsParagraph">
            Imagine your car’s tail lights drawing every eye, their radiant glow
            highlighting its sleek lines and bold design, ensuring everyone
            remembers your departure.
          </p>
        </div>
        <div className="col-lg-6 ">
          <Image
            src={ThirdImage}
            alt="Second Image"
            style={{ borderRadius: "16px", width: "90%", objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="contentContainer col-lg-11 col-xl-9">
        <div className="col-lg-6">
          {" "}
          <Image
            src={FourthImage}
            alt="Second Image"
            style={{ borderRadius: "16px", width: "90%", objectFit: "cover" }}
          />
        </div>
        <div className="col-lg-6 firstServiceContainer">
          <h1 className="white-text">Make your own kit</h1>
          <p className="customHeadlightsParagraph">
            With our customizable options, your car will reflect your distinct
            taste, making every drive a testament to your personal style.
          </p>
        </div>
      </div>
      <div className="footerOne">
        <h1 className="center-text" style={{ marginTop: "24px" }}>
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
