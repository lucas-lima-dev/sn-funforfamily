import axios from "axios";
import { StyledForm, StyledInput } from "./styled";

function UpdatePost({
  editingPostId,
  setIsResponseEdited,
  setEditingPostId,
  editedMessage,
  setEditedMessage,
  id,
}) {
  // const { token } = useContext(UserContext);
  const token = localStorage.getItem("token");

  function onKeyPressed(k) {
    if (k.keyCode === 27) {
      setEditingPostId(null);
      setEditedMessage("");
    }
    if (k.keyCode === 13) {
      handleEditSubmit(null, editingPostId);
    }
  }

  function handleInputChange(event) {
    setEditedMessage(event.target.value);
  }

  function handleEditSubmit(event, postId) {
    event && event.preventDefault();

    const URL = `${import.meta.env.VITE_API_BASE_URL}/home/posts/${postId}`;

    const body = { description: editedMessage };
    const header = { headers: { Authorization: `Bearer ${token}` } };

    const updatePromise = axios.patch(URL, body, header);

    updatePromise.then((success) => {
      setIsResponseEdited(success.data);
    });

    updatePromise.catch((error) => {
      alert(error);
    });
    
    setEditingPostId(null);
    setEditedMessage("");
  }

  return (
    <StyledForm
      onKeyDown={onKeyPressed}
      onSubmit={(event) => handleEditSubmit(event, id)}
    >
      <StyledInput
        type="text"
        value={editedMessage}
        onChange={handleInputChange}
      />
    </StyledForm>
  );
}

export default UpdatePost;
