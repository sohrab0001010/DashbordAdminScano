import React from 'react'
import { GiRotaryPhone } from "react-icons/gi";

const AboutUs = () => {
  return (
    <div className='container'>
      <div
        className="
          aboutUs
          flex
          flex-col
          items-center
          justify-center
          gap-10
          sm:gap-12
          lg:gap-16
          py-12
          sm:py-16
          lg:py-20
          px-6
          sm:px-12
          lg:px-40
          text-gray-600
        "
      >
        <h2 className="text-gray-800 text-2xl sm:text-3xl font-medium text-center">
          سلام و خوش اومدید به اسکنو
        </h2>

        <div
          dir="rtl"
          className="
            max-w-2xl
            flex
            flex-col
            items-center
            justify-center
            gap-8
            sm:gap-10
            lg:gap-12
          "
        >
          <p className="text-sm sm:text-base leading-7 sm:leading-8">
            اسکنو رو از سال ۱۴۰۵ با یه هدف ساده شروع کردیم: این که یادگیری ریاضی و درس‌های دیگه رو برای دانش‌آموزای پایه چهارم تا دوازدهم راحت‌تر و شیرین‌تر کنیم.
          </p>

          <p className="text-sm sm:text-base leading-7 sm:leading-8">
            می‌دونیم که بعضی وقت‌ها یه مبحث ریاضی، علوم، فارسی و... توی کلاس خوب جا نمی‌افته، یا دانش‌آموز دنبال یه کاربرگ خوب برای تمرین بیشتره، یا معلم عزیزی دنبال منبعی مطمئنه که بتونه سر کلاس ازش استفاده کنه، برای همینه که ما اینجاییم. چه دانش‌آموز باشید که دنبال آموزش و نمونه‌سواله، چه معلمی که می‌خواد کارش راحت‌تر بشه، چه پدر و مادری که می‌خواد کنار بچه‌ش باشه و بهترین منابع رو در اختیارش بذاره.
          </p>

          <p className="text-gray-800 text-xl sm:text-2xl lg:text-3xl font-medium text-center">
            هر روز داریم صفحات آموزشی‌مون رو کامل‌تر می‌کنیم و تلاشمون اینه که اسکنو بشه یه همراه مطمئن برای همه‌ی خانواده‌هایی که دنبال یادگیری بهتر و ساده‌تر هستن
          </p>
        </div>

        <hr className="w-full text-gray-400" />

        <div className="flex gap-2 sm:gap-4 items-center font-medium text-sm sm:text-base">
          <span>۰۹۳۸۱۶۰۹۸۸۳</span>
          <GiRotaryPhone />
        </div>
      </div>
    </div>
  )
}

export default AboutUs