import { IoIosClose , IoIosCheckmark  } from "react-icons/io";


const modalConfig = {
  success: {
    title: "موفق",
    icon: <IoIosCheckmark/>,
    iconBg: "bg-green-400",
    borderIcon: "bg-green-200",
  },

  error: {
    title: "خطا",
    icon: <IoIosClose/>,
    iconBg: "bg-red-400",
    borderIcon: "bg-red-200",
  },

  inValidPhone : {message : "لطفا  یک فرمت صحیح وارد کنید"},

  emptyFields : {message : "لطفا تمام فیلد ها را پر کنید"},

  equlityPassword : {message : "پسوورد و تکرار آن تطابق ندارد"},

  inValidCode : {message : "کد وارد شده صحیح نیست"},

  successRegister : {message : "ثبت نام انجام شد"},

  successLogin : {message : "شما وارد حساب خود شدید"},


  // emptyFields : {message : "message"},

  // emptyFields : {message : "message"},

  
  
};

export default modalConfig;