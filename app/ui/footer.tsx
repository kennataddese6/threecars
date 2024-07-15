'use client';
import { MdLocationOn, MdPhone, MdMail } from 'react-icons/md';
import { MdOutlineEmail } from 'react-icons/md';
import { CiFacebook, CiInstagram } from 'react-icons/ci';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
export default function Footer() {
  return (
    <div className="copyRightFooter">
      <footer className="col-lg-11 col-xl-10">
        <div className="footerItem">
          <h5 className="white-text p-3">MT Custom Lights</h5>
          <p className="white-text p-3">
            <MdLocationOn color="white" fontSize={32} />
            <span className="ms-1">California, USA</span>
          </p>
          <p className="white-text p-3">
            <MdPhone color="white" fontSize={32} />
            <span className="ms-1">+251 991 374186</span>
          </p>
          <p className="white-text p-3">
            <MdOutlineEmail color="white" fontSize={32} />
            <span className="ms-2">mtcustomlights@gmail.com</span>
          </p>
        </div>
        <div className="footerItem">
          <h5 className="white-text p-3">Our Product</h5>
          <p className="white-text p-3">Career</p>
          <p className="white-text p-3">Lights</p>
          <p className="white-text p-3">Kits</p>
        </div>
        <div className="footerItem">
          <h5 className="white-text p-3">Follow us</h5>
          <p className="white-text p-3">
            <CiFacebook color="white" fontSize={32} />
            <Link href="#" className="ms-1">
              https://facebook.com/mtlithts
            </Link>
          </p>
          <p className="white-text p-3">
            <CiInstagram color="white" fontSize={32} />
            <Link href="#" className="ms-1">
              https://facebook.com/mtlithts
            </Link>
          </p>
          <p className="white-text p-3">
            <FaXTwitter color="white" fontSize={32} />
            <Link href="#" className="ms-1">
              https://facebook.com/mtlithts
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
