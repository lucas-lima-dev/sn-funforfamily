import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignIn/SignInPage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import HomePage from "./pages/Home/HomePage";
import TimelineContext from "./contexts/TimelineContext";
import UserContext from "./contexts/UserContext";

function App() {
  const [user, setUser] = useState({});
  const [isResponseEdited, setIsResponseEdited] = useState(false);
  const [isPostDeleted, setIsPostDeleted] = useState(false);
  const [isPostCreated, setIsPostCreated] = useState(false);
  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <TimelineContext.Provider
            value={{
              isResponseEdited,
              setIsResponseEdited,
              isPostDeleted,
              setIsPostDeleted,
              isPostCreated,
              setIsPostCreated,
            }}
          >
            <Routes>
              <Route path="/" element={<SignInPage />} />
              <Route path="/users/sign-up" element={<SignUpPage />} />
              <Route path="/home" element={<HomePage />} />
            </Routes>
          </TimelineContext.Provider>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;