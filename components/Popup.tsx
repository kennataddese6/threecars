import { IoClose } from 'react-icons/io5';
interface PopupProps {
  headerText: String;
  descriptionText: String;
  setPopupView: (value: Boolean) => void;
  setEmail: (value: String) => void;
  callFunction: () => void;
}
const Popup: React.FC<PopupProps> = ({
  headerText,
  descriptionText,
  setPopupView,
  setEmail,
  callFunction,
}) => {
  const popupContainerStyle = {
    backdropFilter: 'blur("12px")',
    position: 'fixed' as const,
    top: 0,
    zIndex: 4,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
  };
  const popstyle = {
    width: '35rem',
    backgroundColor: 'dodgerblue',
    margin: '12px',
    padding: '16px',
    borderRadius: '8px',
    position: 'relative' as const,
  };

  const inputstyle = {
    padding: '4px 10px',
    borderRadius: '4px',
    border: 'none',
    margin: '0 8px 0 0',
    outline: 'none',
  };
  const whiteText = {
    color: 'white',
    textAlign: 'center' as const,
  };
  const centerDiv = {
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
  };
  const closeIcon = {
    position: 'absolute' as const,
    top: 0,
    right: 0,
    backgroundColor: 'red',
    borderRadius: '50%',
    marginTop: '-8px',
    marginRight: '-5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  };
  return (
    <>
      <div style={popupContainerStyle} onClick={() => setPopupView(false)}>
        <div style={popstyle} onClick={e => e.stopPropagation()}>
          <div style={closeIcon} onClick={() => setPopupView(false)}>
            <IoClose fontSize={20} color="white" />
          </div>
          <h3 style={whiteText}>{headerText}</h3>
          <p style={whiteText}>{descriptionText}</p>
          <div style={centerDiv}>
            <input
              type="text"
              placeholder="Enter your email here"
              style={inputstyle}
              onChange={e => setEmail(e.target.value)}
            />
            <button
              className="btn btn-primary"
              style={whiteText}
              onClick={callFunction}
            >
              {' '}
              Request order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Popup;
