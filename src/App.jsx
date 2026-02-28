import AgeFilter from "./components/AgeFilter";
import Categories from "./components/Categories";
import CourseSection from "./components/CourseSection";
import Hero from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Teachers from "./components/Teachers";
import TimeFilter from "./components/TimeFilter";
import WebinarSection from "./components/WebinarSection";
import { courses } from "./data/courses";

function App() {
  return (
    <div className="w-full h-screen bg-white">
      <Navbar />
      <Hero />
      <AgeFilter />
      <CourseSection title="New Launches" courses={courses} />
      <CourseSection title="Featured Courses" courses={courses} />
      <Teachers/>
      <WebinarSection/>
      <Categories/>
      <TimeFilter/>
    </div>
  );
}

export default App;
