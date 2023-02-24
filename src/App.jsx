import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
<<<<<<< HEAD
import  FacultyBio  from "./pages/FacultyBio/Facultybio";
import  Gallery  from "./pages/FacultyBio/Gallery";
import  NewsEvent  from "./pages/NewsEvents/NewsEvent";
import  Courses  from "./pages/Courses/Courses";
import  Download  from "./pages/Courses/Download";
import  YearTwoCourse  from "./pages/Courses/YearTwoCourses";
import Achievements from "./pages/Achievementspage";
=======
import { FacultyBio } from "./pages/FacultyBio/Facultybio";
import { Gallery } from "./pages/FacultyBio/Gallery";
import { NewsEvent } from "./pages/News/NewsEvent";
import { Courses } from "./pages/Courses/Courses";
import { Download } from "./pages/Courses/Download";
import { YearTwoCourse } from "./pages/Courses/YearTwoCourses";
import { Nuesa } from "./pages/News/Nuesa";
import { DownloadResources } from "./pages/Courses/DownloadResources";
import { Staff } from "./pages/Staff/Staff";
>>>>>>> 447b0b35435e6a7195aff9b103715142cdc20bf7

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
<<<<<<< HEAD
          <Route path="/achievement" element={<Achievements/>} />
          <Route path="/download" element={<Download/>} />
=======
          <Route path="/download" element={<DownloadResources/>} />
          <Route path="/nuesa" element={<Nuesa/>} />
          
>>>>>>> 447b0b35435e6a7195aff9b103715142cdc20bf7
        </Routes>
      </Router>
    </>
  )
}

export default App
