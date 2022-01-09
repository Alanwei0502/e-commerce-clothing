import React from "react";
import { useSelector } from "react-redux";
import { auth } from "../../config/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
// import "./Header.styles.scss";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./Header.styles";

const Header = () => {
  const isHidden = useSelector(selectCartHidden);
  const currentUser = useSelector(selectCurrentUser);
  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <>
            <OptionLink as="div" onClick={handleSignOut}>
              SIGN OUT
            </OptionLink>
            <CartIcon />
          </>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
      </OptionsContainer>
      {isHidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
