import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FormContainer,
  SignUpPageContainer,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledP,
  TitleContainer,
} from "./styled";

function SignUpPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user_url, setUserUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    const URL = `${import.meta.env.VITE_API_BASE_URL}/users/sign-up`;

    const body = {
      username,
      email,
      password,
      user_url,
    };


    try {
      const response = await axios.post(URL, body);
      // console.log(response);

      setIsLoading(false);
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Ops! Tente novamente!");
      setIsLoading(false);
    }
  }

  return (
    <SignUpPageContainer>
      <TitleContainer>
        <div className="m-[220px 0 0 110px]">
          <h1 className="text-[106px] ">FunForFamily</h1>
          <h2 className="font-bold w-[442px] text-[43px]">
            Discover where to go with yours kids
          </h2>
        </div>
      </TitleContainer>

      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="username"
            placeholder="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
          <StyledInput
            type="email"
            placeholder="e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <StyledInput
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <StyledInput
            type="user_url"
            placeholder="user_url"
            value={user_url}
            onChange={(event) => setUserUrl(event.target.value)}
            required
          />
          <StyledButton type="submit">Sign Up</StyledButton>
          <StyledP onClick={() => navigate("/")}>Switch back to log in</StyledP>
        </StyledForm>
      </FormContainer>
    </SignUpPageContainer>
  );
}

export default SignUpPage;
