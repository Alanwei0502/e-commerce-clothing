import React from "react";
import { useSelector } from "react-redux";
import { auth } from "../../config/firebase.utils";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import "./Header.styles.scss";

const Header = () => {
  const isHidden = useSelector(selectCartHidden);
  const currentUser = useSelector(selectCurrentUser);
  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <>
            <div className="option" onClick={handleSignOut}>
              SIGN OUT
            </div>
            <CartIcon />
          </>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
      {isHidden ? null : <CartDropdown />}
    </div>
  );
};

export default Header;
