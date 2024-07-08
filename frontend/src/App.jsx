import { Box, Container, useBreakpointValue } from "@chakra-ui/react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Controls from "./components/Controls";
import HomePage1 from "./pages/HomePage1";
import AuthPage from "./pages/AuthPage";
import Ideaspage from "./pages/Ideaspage";
import Solvepage from "./pages/Solvepage";
import { useRecoilValue } from "recoil";
import userAtom from "./atoms/userAtom";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import CreatePost from "./components/CreatePost";
import ChatPage from "./pages/ChatPage";
import { SettingsPage } from "./pages/SettingsPage";
import AboutUs from "./pages/Aboutuspage";
import HomePage2 from "./pages/Homepage2";
import Topicspage from "./pages/Topicspage";
import Explorepage from "./pages/Explorepage";
import Discoverdailypage from "./pages/Discoverdailypage";
import Premiumpage from "./pages/Premiumpage";
import Communitiespage from "./pages/Communitiespage";
import Podcastpage from "./pages/Podcastpage";
import Reddit500page from "./pages/Reddit500page";
import Careerspage from "./pages/Careerspage";
import Supportpage from "./pages/Supportpage";
import Contactuspage from "./pages/Contactuspage";
import Comingsoonpage from "./pages/Comingsoonpage";


function App() {
    const user = useRecoilValue(userAtom);
  
    


    return (
        <Box position={"relative"} w='full'>
            <Container maxW={{ base: "620px", md: "1400px" }}>
             <Controls/>
                <Routes>                
                    <Route path='/' element={ <HomePage1 /> } />
                    <Route path='/about' element={ <AboutUs /> } />
                    <Route path='/topics' element={ <Topicspage /> } />
                    <Route path='/explore' element={ <Explorepage /> } />
                    <Route path='/support' element={ <Supportpage /> } />
                    <Route path='/careers' element={ <Careerspage /> } />
                    <Route path='/premium' element={ <Premiumpage /> } />
                    <Route path='/podcast' element={ <Podcastpage /> } />
                    <Route path='/contactus' element={ <Contactuspage /> } />
                    <Route path='/ideas' element={ <Ideaspage /> } />
                    <Route path='/solve' element={ <Solvepage /> } />
                    <Route path='/comingsoon' element={ <Comingsoonpage /> } />
                    <Route path='/communities' element={ <Communitiespage /> } />
                    <Route path='/reddit500' element={ <Reddit500page /> } />
                    <Route path='/discoverdaily' element={ <Discoverdailypage /> } />

                    <Route path='/auth' element={!user ? <AuthPage /> : <Navigate to='/' />} />
                    <Route path='/update' element={user ? <UpdateProfilePage /> : <Navigate to='/auth' />} />
                    <Route
						path='/:username'
						element={
							user ? (
								<>
									<UserPage />
									<CreatePost />
								</>
							) : (
								<UserPage />
							)
						}
					/>
                 
					<Route path='/:username/post/:pid' element={<PostPage />} />
                    <Route path='/chat' element={ <ChatPage  />} />
                    <Route path='/settings' element={user ? <SettingsPage /> : <Navigate to={"/auth"} />} />
                
                    <Route path='/about' element={ <AboutUs /> } />
                </Routes>
            </Container>
          
        </Box>
    );
}

export default App;