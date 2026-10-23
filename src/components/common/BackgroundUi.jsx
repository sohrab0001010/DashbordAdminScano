import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const BackgroundUi = () => {

  const { theme } = useContext(ThemeContext)


  return (
    <div
      className={`
        fixed 
        inset-0 
        -z-0 
        pointer-events-none
        ${
          theme === "light"
          ?"bg-[#fff]"
          :"bg-gradient-to-br from-[#030303] via-[#25282D] via-[#080F1C] to-[#020817]"
        }
        `}
    />
  );
};

export default BackgroundUi;