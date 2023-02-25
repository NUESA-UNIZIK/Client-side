import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import  {FacultyBio}  from "./pages/FacultyBio/Facultybio";
import  {Gallery}  from "./pages/FacultyBio/Gallery";
import  {Download}  from "./pages/Courses/Download";
import Achievements from "./pages/Achievementspage";
import  {NewsEvent}  from "./pages/News/NewsEvent";
import  {Courses}  from "./pages/Courses/Courses";
import  {YearTwoCourse}  from "./pages/Courses/YearTwoCourses";
import  {Nuesa}  from "./pages/News/Nuesa";
import  {DownloadResources}  from "./pages/Courses/DownloadResources";
import  {Staff}  from "./pages/Staff/Staff";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/facultybio" element={<FacultyBio/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/newsevent" element={<NewsEvent/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/yeartwo" element={<YearTwoCourse/>} />
          <Route path="/achievement" element={<Achievements/>} />
          <Route path="/download" element={<Download/>} />
          <Route path="/download" element={<DownloadResources/>} />
          <Route path="/nuesa" element={<Nuesa/>} />
          <Route path="/allStaff" element={<Staff/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
