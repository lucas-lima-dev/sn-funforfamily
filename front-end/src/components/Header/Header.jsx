import { Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderUserInfoContainer,
  StyledUserImg,
  UserInfoWrapper,
} from "./styled";
import { useContext, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { FiChevronDown } from "react-icons/fi";
import LogOut from "./LogOut";
import UserContext from "../../contexts/UserContext";

export default function Header() {
  const [logout, setLogout] = useState(false);
  const { user } = useContext(UserContext);
  return (
    <>
      <HeaderContainer>
        <Link
          to="/home"
          className="
         text-white
         text-[40px]
         font-bold
         font-normal
         cursor-pointer
         "
        >
          FunForFamily
        </Link>

        <SearchBar />

        <HeaderUserInfoContainer onClick={() => setLogout(true)}>
          <UserInfoWrapper>
            <FiChevronDown className="text-white cursor-pointer text-[30px]" />
            <StyledUserImg alt="icon" src={user.user_url} />
          </UserInfoWrapper>
          {logout && <LogOut />}
        </HeaderUserInfoContainer>
      </HeaderContainer>
      
    </>
  );
}
