/* eslint-disable jsx-a11y/control-has-associated-label */
// Write your code here
import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="header-content-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo-img"
        />
      </Link>
      <Popup
        modal
        trigger={
          // eslint-disable-next-line jsx-a11y/control-has-associated-label
          <button
            type="button"
            className="menu-button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu size="30" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              type="button"
              className="close-btn"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose size="25" />
            </button>
            <ul className="menu-list">
              <li className="list-item">
                <Link to="/" className="nav-link" onClick={() => close()}>
                  <AiFillHome size="30" />
                  <p className="menu-item-name">Home</p>
                </Link>
              </li>
              <li className="list-item">
                <Link to="/about" className="nav-link" onClick={() => close()}>
                  <BsInfoCircleFill size="30" />
                  <p className="menu-item-name">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
