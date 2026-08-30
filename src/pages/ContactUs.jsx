import { FaSearchLocation } from "react-icons/fa";
import { TbMailbox } from "react-icons/tb";
import { PiPhoneCallFill } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";

const ContactUs = () => {

  const contactItems = [
    {
      icon: <FaSearchLocation />,
      text: "آدرس : اصفهان،محله رهنان،خیابان درخشان،خبابان چمران،کوچه شماره یک ،پلاک 13،واحد1",
    },
    {
      icon: <TbMailbox />,
      text: "صندوق پستی : 8189813742",
    },
    {
      icon: <PiPhoneCallFill />,
      text: "شماره تماس : 09381609883",
    },
    {
      icon: <HiOutlineMail />,
      text: " info@eskanoo.ir : ایمیل",
    },
  ];

  return (
    <div className="
      slecte-none
      flex
      flex-col
      items-end
      gap-4
      px-40
      py-20
    ">

      {contactItems.map((item, index) => (
        <div
          key={index}
          className="
            group
            flex
            flex-row-reverse
            items-center
            gap-4
            max-w-full
            p-4
            rounded-xl
            cursor-pointer
            transition-all
            duration-300
            hover:-translate-x-2
          "
        >

          <span
            className="
              flex
              items-center
              justify-center
              w-12
              h-12
              rounded-full
              bg-sky-100
              text-2xl
              text-sky-900
              transition-all
              duration-300
              ease-out
              group-hover:bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
              group-hover:text-white
              group-hover:scale-110
            "
          >
            {item.icon}
          </span>

          <span
            className="
              text-gray-500
              font-medium
              transition-all
              duration-300
              group-hover:text-gray-800
            "
          >
            {item.text}
          </span>

        </div>
      ))}

    </div>
  );
};

export default ContactUs;
