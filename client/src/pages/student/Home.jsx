import React from 'react'
import Hero from '../../component/student/Hero'
import Companies from '../../component/student/Companies'
import CourseSection from '../../component/student/CourseSection'
import TestimonialsSection from '../../component/student/TestimonialsSection'
import CallToAction from '../../component/student/CallToAction'
import Footer from '../../component/student/Footer'



const Home = () => {
    return (
        <div className='flex flex-col items-center space-y-7 text-center'>
            <Hero />
            <Companies />
            <CourseSection />
            <TestimonialsSection />
            <CallToAction />
            <Footer />
        </div>
    )
}

export default Home
