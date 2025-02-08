import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom';
import Home from './pages/student/Home';
import CourseList from './pages/student/CourseList';
import CourseDetails from './pages/student/CourseDetails';
import MyEnrollments from './pages/student/MyEnrollments';
import Player from './pages/student/Player';
import Loading from './component/student/Loading';
import Educator from './pages/educator/Educator';
import Dasboard from './pages/educator/Dasboard';
import AddCourse from './pages/educator/AddCourse';
import StudentsEnrolled from './pages/educator/StudentsEnrolled';
import Mycourse from './pages/educator/Mycourse';
import Navbar from './component/student/navbar';

const App = () => {

  const isEducatorRoute = useMatch('/educator/*');
  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRoute && <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course-list' element={<CourseList />} />
        <Route path='/course-list/:input' element={<CourseList />} />
        <Route path='/course/:id' element={< CourseDetails />} />
        <Route path='/my-enrollment' element={<MyEnrollments />} />
        <Route path='/player/:courseId' element={<Player />} />
        <Route path='/loading/:path' element={<Loading />} />
        <Route path='/educator' element={<Educator />}>
          <Route path='educator' element={<Dasboard />} />
          <Route path='add-course' element={<AddCourse />} />
          <Route path='my-courses' element={<Mycourse />} />
          <Route path='student-enrollment' element={<StudentsEnrolled />} />
        </Route >



      </Routes>
    </div>
  );
}

export default App