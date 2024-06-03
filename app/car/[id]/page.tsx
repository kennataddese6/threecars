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
  return (
    <>
      {/* Header */}
      <div className="headerContainer col-lg-12">
        <div className="headerSubContainer col-lg-11 col-xl-7">
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
      <div className="contentContainer col-lg-11 col-xl-7">
        <h1 className="white-text">Car detail {params.id}</h1>
      </div>
    </>
  );
}
