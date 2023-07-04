import { SearchBarContainer, StyledInput, StyledLi, StyledUl, StyledUserImg } from "./styled";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function SearchBar() {
  const [searchUser, setSearchUser] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const URL = `${import.meta.env.VITE_API_BASE_URL}/users/search-users`;
  const body = { username: `${searchUser}`, };
  const token = localStorage.getItem("token");
  const header = { headers: { Authorization: `Bearer ${token}` } };

  useEffect(() => {
    const fetchData = async () => {
      if (searchUser.length >= 3) {
        try {
          const result = await axios.post(URL, body);
          setSearchResult(result.data);
          // return;
        } catch (error) {
          alert("Ops! Tente novamente!");
        }
      }
    };
    fetchData();
  }, [searchUser]);

  return (
    <SearchBarContainer>
      <StyledInput
        type={"text"}
        placeholder="Pesquisar por pessoas..."
        onChange={(e) => setSearchUser(e.target.value)}
      />
      {searchUser.length !== 0 ? (
        <StyledUl>
          {searchResult.map((user) => (
            <StyledLi key={user.id}>
              <StyledUserImg alt="foto do usuario" src={user.user_url} />{" "}
              <span>{user.username}</span>
            </StyledLi>
          ))}
        </StyledUl>
      ) : (
        ""
      )}
    </SearchBarContainer>
  );
}

export default SearchBar;
