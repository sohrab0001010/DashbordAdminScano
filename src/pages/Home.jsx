import React from "react";
import Course from "../components/Home/Course";
import { Link } from "react-router";
import courses from "../data/dataCourses";
import books  from "../data/dataBooks";

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
        gap-12
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

            <h2
            className="
            text-4xl
            font-bold
            text-[#082567]
            mt-40
            "
            >
                کتاب های گروه آموزشی ویژا
            </h2>

            <div
            className="
            grid
            grid-cols-3
            gap-6
            "
            >
                {
                    books.map((item,index) => (
                        <Link
                        key={index}
                        className="
                        "
                        >
                            <img 
                            className="
                            w-12
                            h-12
                            "
                            src={item.imgBook} 
                            alt={item.name} />

                            <span>نویسنده : {item.author}</span>
                            <span>قیمت : {item.price} تومان</span>
                            <span>موجودی : {item.count} عدد</span>
                        </Link>
                    ))
                }
            </div>
        </main>
    );
};

export default Home;