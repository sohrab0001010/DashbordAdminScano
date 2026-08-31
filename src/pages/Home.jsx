import React from "react";
import Course from "../components/Home/Course";
import { Link } from "react-router";
import courses from "../data/dataCourses";

const Home = () => {
    const course = [
    { title: "پایه چهارم", emoji: "📒", id: 4, color: "#FFB900" }, // نارنجی
    { title: "پایه پنجم", emoji: "📙", id: 5, color: "#F97316" }, // نارنجی روشن
    { title: "پایه ششم", emoji: "📘", id: 6, color: "#2563EB" }, // آبی
    { title: "پایه هفتم", emoji: "📗", id: 7, color: "#16A34A" }, // سبز
    { title: "پایه هشتم", emoji: "📕", id: 8, color: "#DC2626" }, // قرمز
    { title: "پایه نهم", emoji: "📔", id: 9, color: "#F7D7C4" }, // صورتی
];
    

    return (
        <main
            className="
        min-h-screen
        flex
        flex-col
        items-center
        px-6
        py-12
      "
        >
            <h1
                className="
          text-4xl
          font-bold
          text-[#082567]
          mb-40
        "
            >
                پایه تحصیلی خود را انتخاب کنید
            </h1>

            <div
                className="
          w-full
          max-w-5xl
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
            >
                {courses.map((course) => (
                    <Link 
                    to={`/year/${course.gradeId}`}
                    key={course.gradeId}
                    >
                        <Course
                            {...course}
                        />
                    </Link>
                ))}
            </div>
        </main>
    );
};

export default Home;