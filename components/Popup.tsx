import { IoClose } from "react-icons/io5";
interface PopupProps {
  headerText: String;
}
const Popup: React.FC<PopupProps> = ({ headerText }) => {
  const popupContainerStyle = {
    backdropFilter: 'blur("12px")',
    position: "absolute" as const,
    top: 0,
    zIndex: 4,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.95)",
  };
  const popstyle = {
    width: "35rem",
    backgroundColor: "dodgerblue",
    margin: "12px",
    padding: "16px",
    borderRadius: "8px",
    position: "relative" as const,
  };
  const inputstyle = {
    padding: "4px 10px",
    borderRadius: "4px",
    border: "none",
    margin: "0 8px 0 0",
  };
  const whiteText = {
    color: "white",
    textAlign: "center" as const,
  };
  const centerDiv = {
    margin: "auto",
    display: "flex",
    justifyContent: "center",
  };
  const closeIcon = {
    position: "absolute" as const,
    top: 0,
    right: 0,
    backgroundColor: "red",
    borderRadius: "50%",
    marginTop: "-8px",
    marginRight: "-5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  };
  return (
    <>
      <div style={popupContainerStyle}>
        <div style={popstyle}>
          <div style={closeIcon}>
            <IoClose fontSize={20} color="white" />
          </div>
          <h3 style={whiteText}>{headerText}</h3>
          <p style={whiteText}>
            {" "}
            This is a description about the text which could be about the item
            or any other concept about the type of item{" "}
          </p>
          <div style={centerDiv}>
            <input
              type="text"
              placeholder="Enter your email here"
              style={inputstyle}
            />
            <button className="btn btn-primary" style={whiteText}>
              {" "}
              Request order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Popup;
