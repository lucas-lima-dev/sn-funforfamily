import { useNavigate } from "react-router-dom";
import { LogOutButton, LogOutContainer } from "./styled";

function LogOut() {
  const navigate = useNavigate();

  function handleClick() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <LogOutContainer>
      <LogOutButton onClick={handleClick}>Sair</LogOutButton>
    </LogOutContainer>
  );
}

export default LogOut;
