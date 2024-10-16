import React, { useState } from "react";
import Card from "./Card";
const Cards = ({ courses, category }) => {
  // let allCourses=[]
  let catagory = category;
  const [likedCourses, setLikedCourses] = useState([]);

  //returns the list of all courses recieved from api response
  // function getCourses(){
  //     Object.values(courses).forEach((courseCategory)=>{
  //         courseCategory.forEach((course)=>{
  //             allCourses.push(course);
  //         })
  //     })
  //     return allCourses;
  // }

  function getCourses() {
    if (catagory === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      return courses[catagory];
    }
  }
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => {
        return (
          <Card
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
    </div>
  );
};

export default Cards;
