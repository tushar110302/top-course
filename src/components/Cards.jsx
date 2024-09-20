import React, { useState } from 'react'
import CardItem from './CardItem';

function Cards({data, category}) 
{
    let allCourses = [];
    const [likedCourses, setLikedCourses] = useState([])
    if(category == "All"){
        Object.values(data).forEach((courseCategory) => courseCategory.forEach((course) => {
            allCourses.push(course);
        }))
    }else{
        allCourses = data[category];
    }
    
    // console.log(allCourses)
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
            allCourses.map((course) => (
                <CardItem key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
            ))
        }
    </div>
  )
}

export default Cards