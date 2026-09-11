import { FcLike, FcReading, FcGraduationCap, FcFlashOn } from "react-icons/fc";

// اطلاعات هر سطح: اسم کلید، عنوان فارسی، آیکون، کد یکتای سطح (برای ساخت codeNumber)
const levelDefs = [
  { level: "levelOne", title: "آسان", icon: FcLike, code: 1 },
  { level: "levelTow", title: "متوسط", icon: FcReading, code: 2 },
  { level: "levelThree", title: "سخت", icon: FcGraduationCap, code: 3 },
  { level: "levelFour", title: "تیز هوشان", icon: FcFlashOn, code: 4 },
];

// هر کاربرگ ۵ ویدیو داره؛ دو تای اول رایگان، بقیه نیاز به اشتراک دارن
const createVideos = () =>
  Array.from({ length: 5 }, (_, i) => ({
    isFree: i < 2,
    vid: `/videos/vid${i + 1}.mp4`,
    subjectVid: `عنوان آزمایشی ویدیو ${i + 1}`,
  }));

// هر فصل ۴ سطح داره
// codeNumber: gradeId + chapter + کد سطح + کد بخش (بدون جداکننده)
// کد بخش: کاربرگ‌ها=1، امتحان دی=2، امتحان خرداد=3
// مثال: پایه ۴، فصل ۱، سطح آسان، کاربرگ‌ها → 4111
//       همون ترکیب ولی امتحان خرداد → 4113
const createLevels = (gradeId, chapterNumber, sectionCode) =>
  levelDefs.map(({ level, title, icon, code }) => ({
    codeNumber: Number(`${gradeId}${chapterNumber}${code}${sectionCode}`),
    level,
    title,
    icon,
    content: {
      pdf: `/pdfs/${chapterNumber}.pdf`,
      img: `/images/worksheet/${chapterNumber}.jpg`,
      videos: createVideos(),
    },
  }));

// هر بخش (کاربرگ‌ها یا امتحانات) ۸ فصل داره
const createChapters = (gradeId, sectionCode, chapterCount = 8) =>
  Array.from({ length: chapterCount }, (_, i) => ({
    chapter: i + 1,
    levels: createLevels(gradeId, i + 1, sectionCode),
  }));

// سه بخش ثابت هر پایه: کاربرگ‌ها، امتحانات دی، امتحانات خرداد
const createContentCourse = (gradeId) => [
  { name: "کاربرگ ها", title: "workSheet", content: createChapters(gradeId, 1) },
  { name: "امتحانات دی ماه", title: "examDey", content: createChapters(gradeId, 2) },
  { name: "امتحانات خرداد ماه", title: "examKhordad", content: createChapters(gradeId, 3) },
];

// اطلاعات ثابت هر پایه
const gradeDefs = [
  { gradeId: 4, emoji: "📒", color: "#FFB900", nameGrade: "پایه چهارم" },
  { gradeId: 5, emoji: "📙", color: "#F97316", nameGrade: "پایه پنجم" },
  { gradeId: 6, emoji: "📘", color: "#2563EB", nameGrade: "پایه ششم" },
  { gradeId: 7, emoji: "📗", color: "#16A34A", nameGrade: "پایه هفتم" },
  { gradeId: 8, emoji: "📕", color: "#DC2626", nameGrade: "پایه هشتم" },
  { gradeId: 9, emoji: "📔", color: "#F7D7C4", nameGrade: "پایه نهم" },
];

const course = gradeDefs.map(({ gradeId, emoji, color, nameGrade }) => ({
  gradeId,
  emoji,
  color,
  subject: "ریاضی",
  nameGrade,
  contentCourse: createContentCourse(gradeId),
}));

export default course;
