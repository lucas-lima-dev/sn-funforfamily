import { useContext, useState } from "react";
import { NoPostMessage } from "../../pages/Home/styled";
import PostContent from "./PostContent";
import TimelineContext from "../../contexts/TimelineContext";
import useFetchTimeline from "../../hooks/api/useFetchTimeline";

function PostCard() {
  // const { token } = useContext(UserContext);

  const token = localStorage.getItem("token");

  const {
    isResponseEdited,
    setIsResponseEdited,
    isPostDeleted,
    setIsPostDeleted,
    isPostCreated,
  } = useContext(TimelineContext);

  const timelineContent = useFetchTimeline(
    token,
    isResponseEdited,
    isPostDeleted,
    isPostCreated
  );

  return (
    <>
      {timelineContent.length === 0 ? (
        <NoPostMessage>Ainda não existem posts</NoPostMessage>
      ) : (
        timelineContent.map((post) => (
          <PostContent
            key={post.id}
            post={post}
            timelineContent={timelineContent}
            setIsResponseEdited={setIsResponseEdited}
            setIsPostDeleted={setIsPostDeleted}
          />
        ))
      )}
    </>
  );
}

export default PostCard;
