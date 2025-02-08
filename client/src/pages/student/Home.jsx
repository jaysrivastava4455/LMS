import React from 'react'
import Hero from '../../component/student/Hero'
import Companies from '../../component/student/Companies'
import CourseSection from '../../component/student/CourseSection'



const Home = () => {
    return (
        <div className='flex flex-col items-center space-y-7 text-center'>
            <Hero />
            <Companies />
            <CourseSection />
        </div>
    )
}

export default Home
