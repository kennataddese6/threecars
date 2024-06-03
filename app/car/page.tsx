export default function Car() {
  return (
    <>
      <div className="headerContainer col-lg-12">
        <div className="headerSubContainer col-lg-11 col-xl-7">
          <div className="logoContainer col-lg-3">BRANDNAME</div>
          <ul className="headerList col-lg-6">
            <li className="headerItem">Build your kit</li>
            <li className="headerItem">Latest deals</li>
            <li className="headerItem">Shop</li>
            <li className="headerItem">Why choose us</li>
          </ul>
          <div className="rightheader col-xl-3">
            <button className="signinbtn">Sign in</button>
            <button className="btn btn-primary">Sign up</button>
          </div>
        </div>
      </div>
    </>
  );
}
