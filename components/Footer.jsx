import { BsCode } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";

function Footer() {
  return (
    <div className="flex justify-center place-items-center py-8">
      <p className="flex gap-1 items-center text-sm text-gray-500 hover:text-white">
        <BsCode />
        Merch Github 2023 - By Bagse
        <BsCodeSlash />
      </p>
    </div>
  );
}

export default Footer;
