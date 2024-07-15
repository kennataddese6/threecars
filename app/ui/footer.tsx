import { MdLocationOn } from 'react-icons/md';

export default function Footer() {
  return (
    <div className="copyRightFooter">
      <footer className="col-lg-11 col-xl-9">
        <div>
          <h6 className="white-text logoContainer">MT Lights</h6>
          <MdLocationOn fontSize={32} color="white" />
          <div>
            <p>25566 Hc 1, Glenallen, Alaska, 99588, USA</p>
          </div>
        </div>
        <h6 className="white-text">Instagram Email</h6>
      </footer>
    </div>
  );
}
