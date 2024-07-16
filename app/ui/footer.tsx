'use client';
import { MdLocationOn, MdPhone, MdMail } from 'react-icons/md';
import { MdOutlineEmail } from 'react-icons/md';
import { CiFacebook, CiInstagram } from 'react-icons/ci';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="col-lg-11 col-xl-10">
      <div className="footerItem">
        <h5 className="white-text p-3 ps-4">MT Custom Lights</h5>
        <p className="white-text ps-3">
          <MdLocationOn color="grey" fontSize={24} />
          <span className="ms-1 text-secondary">California, USA</span>
        </p>
        <p className="white-text ps-3">
          <MdPhone color="grey" fontSize={24} />
          <span className="ms-1 text-secondary">+251 991 374186</span>
        </p>
        <p className="white-text ps-3">
          <MdOutlineEmail color="grey" fontSize={24} />
          <span className="ms-2 text-secondary">mtcuss@gmail.com</span>
        </p>
      </div>
      <div className="footerItem">
        <h5 className="white-text p-3">Our Product</h5>
        <p className="white-text ps-3 text-secondary">Build kit</p>
        <p className="white-text ps-3 text-secondary">Parts for sale</p>
        <p className="white-text ps-3 text-secondary">Work with us</p>
      </div>
      <div className="footerItem">
        <h5 className="white-text p-3 ps-4">Follow us</h5>
        <p className="white-text ps-3 ">
          <CiFacebook color="grey" fontSize={32} className="m-1" />
          <FaXTwitter color="grey" fontSize={32} className="m-1" />
          <CiInstagram color="grey" fontSize={32} />
        </p>
      </div>
    </footer>
  );
}
