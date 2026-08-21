import React, { useRef, useState } from "react";

const OTPInput = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const inputRefs = useRef([]);

  // وقتی کاربر داخل Input چیزی وارد می‌کند
  const handleChange = (e, index) => {
    const value = e.target.value;

    // فقط عدد قبول شود
    if (!/^\d*$/.test(value)) {
      return;
    }

    // فقط آخرین رقم را نگه می‌داریم
    const number = value.slice(-1);

    // کپی گرفتن از OTP
    const newOtp = [...otp];

    // قرار دادن عدد در Input مربوطه
    newOtp[index] = number;

    setOtp(newOtp);

    // اگر عدد وارد شد، برو Input بعدی
    if (number && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // کنترل Backspace
  const handleKeyDown = (e, index) => {
    // اگر Input خالی بود و Backspace زد
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // کنترل Focus
  const handleFocus = (index) => {
    // پیدا کردن اولین Input خالی
    const firstEmptyIndex = otp.findIndex(
      (item) => item === ""
    );

    // اگر Input خالی وجود دارد
    // و کاربر خواست روی Input بعد از آن کلیک کند
    if (
      firstEmptyIndex !== -1 &&
      index > firstEmptyIndex
    ) {
      inputRefs.current[firstEmptyIndex]?.focus();
    }
  };

  return (
    <div
      className="
        flex
        gap-4
        direction-ltr
      "
    >
      {otp.map((value, index) => (
        <input
          key={index}
          ref={(element) => {
            inputRefs.current[index] = element;
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={value}
          onFocus={() => handleFocus(index)}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className={`
            w-12
            h-12
            rounded-lg
            border
            outline-none
            text-center
            text-[1.2rem]
            caret-[#0C2965]
            transition-colors
            duration-200

            ${
              value
                ? "bg-[#0C2965] text-white border-[#0C2965]"
                : "bg-white border-gray-300"
            }

            focus:border-[#0C2965]
          `}
        />
      ))}
    </div>
  );
};

export default OTPInput;