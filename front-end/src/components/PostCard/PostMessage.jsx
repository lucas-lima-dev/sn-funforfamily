import { useNavigate } from "react-router-dom";
import { Tagify } from "react-tagify";
import { PostMessageContainer } from "./styled";

function PostMessage({ description }) {
  const navigate = useNavigate();

  const tagStyle = {
    color: "white",
    fontWeight: 500,
    cursor: "pointer",
  };

  function handleClick(tag) {
    const tagName = tag.substring(1);

    navigate(`/hashtag/${tagName}`);
  }

  return (
    <PostMessageContainer>
      <Tagify tagStyle={tagStyle} tagClicked={(tag) => handleClick(tag)}>
        <p>{typeof description === "string" ? description : JSON.stringify(description)}</p>
      </Tagify>
    </PostMessageContainer>
  );
}

export default PostMessage;
