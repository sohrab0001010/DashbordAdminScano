import React from "react";
import Course from "../components/Home/Course";
import { Link } from "react-router";

const Home = () => {
    const courses = [
        { title: "پایه چهارم", emoji: "📒", id: 4 },
        { title: "پایه پنجم", emoji: "📙", id: 5 },
        { title: "پایه ششم", emoji: "📘", id: 6 },
        { title: "پایه هفتم", emoji: "📗", id: 7 },
        { title: "پایه هشتم", emoji: "📕", id: 8 },
        { title: "پایه نهم", emoji: "📔", id: 9 },
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
                    <Link to={"#"}>
                        <Course
                            key={course.id}
                            {...course}
                        />
                    </Link>
                ))}
            </div>
        </main>
    );
};

export default Home;