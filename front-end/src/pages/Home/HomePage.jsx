import CreateNewPost from "../../components/CreateNewPost/CreateNewPost";
import Header from "../../components/Header/Header";
import PostCard from "../../components/PostCard/PostCard";
import { ContentContainer, HomePageContainer, PostArea, PostsWrapper } from "./styled";

function HomePage() {
  return (
    <>
      <Header />
      <HomePageContainer>
        <PostsWrapper>
          <ContentContainer>
            <PostArea>
              <CreateNewPost />
              <PostCard />
            </PostArea>
          </ContentContainer>
        </PostsWrapper>
      </HomePageContainer>
    </>
  );
}

export default HomePage;
