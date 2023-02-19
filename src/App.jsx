import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import { FacultyBio } from "./pages/FacultyBio/Facultybio";
import { Gallery } from "./pages/FacultyBio/Gallery";
import { NewsEvent } from "./pages/News/NewsEvent";
import { Courses } from "./pages/Courses/Courses";
import { Download } from "./pages/Courses/Download";
import { YearTwoCourse } from "./pages/Courses/YearTwoCourses";
import { Nuesa } from "./pages/News/Nuesa";
import { DownloadResources } from "./pages/Courses/DownloadResources";

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
          <Route path="/download" element={<DownloadResources/>} />
          <Route path="/nuesa" element={<Nuesa/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
