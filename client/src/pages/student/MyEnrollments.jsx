import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { Line } from 'rc-progress'

const MyEnrollments = () => {
    const { enrolledCourses, calculateCourseDuration } = useContext(AppContext);
    const [progessArray] = useState([
        { lectureCompleted: 2, totaLectures: 4 },
        { lectureCompleted: 0, totaLectures: 7 },
        { lectureCompleted: 5, totaLectures: 120 },
        { lectureCompleted: 2, totaLectures: 20 },
        { lectureCompleted: 20, totaLectures: 20 },
        { lectureCompleted: 12, totaLectures: 20 },
        { lectureCompleted: 4, totaLectures: 20 },
        { lectureCompleted: 2, totaLectures: 20 }
    ]);

    const navigate = useNavigate(); // Use the hook here

    return (
        <>
            <div className="md:px-36 px-8 pt-10">
                <h1 className="text-2xl font-semibold">My Enrollments</h1>
                <table className="w-full mt-10 border-collapse border border-gray-200">
                    <thead className="bg-gray-100 text-gray-900 border-b border-gray-500/20 text-sm text-left">
                        <tr>
                            <th className="px-4 py-3 font-semibold truncate">Course</th>
                            <th className="px-4 py-3 font-semibold truncate">Duration</th>
                            <th className="px-4 py-3 font-semibold truncate">Completed</th>
                            <th className="px-4 py-3 font-semibold truncate">Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {enrolledCourses.map((course, index) => (
                            <tr key={index} className="border-b border-gray-200">
                                <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3">
                                    <img
                                        src={course.courseThumbnail}
                                        alt="Course Thumbnail"
                                        className="w-14 sm:w-24 rounded"
                                    />
                                    <div className="flex-1">
                                        <p className="mb-1 max-sm:text-sm">{course.courseTitle}</p>
                                        <Line strokeWidth={2} percent={progessArray[index] ? (progessArray[index].lectureCompleted / progessArray[index].totaLectures) * 100 : 0} className='bg-gray-300' />
                                    </div>
                                </td>
                                <td className="px-4 py-3 max-sm:hidden">
                                    {calculateCourseDuration(course)}
                                </td>
                                <td className="px-4 py-3 max-sm:hidden">
                                    {progessArray[index] && `${progessArray[index].lectureCompleted} / ${progessArray[index].totaLectures}`} <span>lectures</span>
                                </td>
                                <td className="px-4 py-3 max-sm:text-right">
                                    <button
                                        onClick={() => navigate(`/player/${course._id}`)} // Corrected navigation
                                        className="px-3 sm:px-5 py-1.5 sm:py-2 bg-blue-600 max-sm:text-xs text-white rounded hover:bg-blue-600"
                                    >
                                        {progessArray[index] && progessArray[index].lectureCompleted / progessArray[index].totaLectures === 1
                                            ? 'Completed'
                                            : 'On Going'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MyEnrollments;
