import { useRef, useState, useContext } from "react";
import {
  CreateNewPostContainer,
  PostBox,
  StyledButton,
  StyledDescriptionInput,
  StyledForm,
  StyledPostTitle,
  StyledURLInput,
  StyledUserImg,
  UserImgBox,
} from "./styled";
import axios from "axios";
import TimelineContext from "../../contexts/TimelineContext";
import UserContext from "../../contexts/UserContext";


function CreateNewPost() {
  const urlRef = useRef();
  const descriptionRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");
  const { user } = useContext(UserContext);
  
  const { setIsPostCreated } = useContext(TimelineContext);

  async function addNewPost(event) {
    event.preventDefault();
    setIsLoading(true);

    const URL = `${import.meta.env.VITE_API_BASE_URL}/home/posts`;

    const body = {
      url: urlRef.current.value,
      description: descriptionRef.current.value,
    };
    const header = { headers: { Authorization: `Bearer ${token}` } };

    try {
      const response = await axios.post(URL, body, header);

      setIsLoading(false);
      setIsPostCreated(true);
      urlRef.current.value = "";
      descriptionRef.current.value = "";
    } catch (error) {
      console.log(error);
      alert("Ops! Tente novamente!");
      setIsLoading(false);
      setIsPostCreated(false);
      urlRef.current.value = "";
      descriptionRef.current.value = "";
    }
  }

  return (
    <CreateNewPostContainer>
      <UserImgBox>
        <StyledUserImg src={user.user_url} />
      </UserImgBox>
      <PostBox>
        <StyledPostTitle>
          Qual lugar você gostaria de compatilhar?
        </StyledPostTitle>
        <StyledForm onSubmit={addNewPost}>
          <StyledURLInput
            placeholder="http://..."
            ref={urlRef}
            type="url"
            id="url"
            disabled={isLoading}
          />
          <StyledDescriptionInput
            placeholder="Compartilhe sua experiência!"
            ref={descriptionRef}
            type="text"
            id="description"
            disabled={isLoading}
          />
          <StyledButton type="submit" disabled={isLoading}>
            {isLoading ? "Publicando..." : "Publicar"}
          </StyledButton>
        </StyledForm>
      </PostBox>
    </CreateNewPostContainer>
  );
}

export default CreateNewPost;
