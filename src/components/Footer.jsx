import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32 pb-4 border-t border-borderColor">
      <div className="flex flex-wrap justify-between gap-12 md:gap-6">
        <div className="max-w-80">
          <div>
            <img src={assets.logo} alt="logo" />
            <p className="text-sm mt-4 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
          </div>
          <div className="flex gap-4 items-center mt-4 text-2xl">
            <FaInstagram className="rounded-full hover:bg-gray-200 w-8 h-8 p-1" />
            <FaFacebook className="rounded-full hover:bg-gray-200 w-8 h-8 p-1" />
            <FaLinkedin className="rounded-full hover:bg-gray-200 w-8 h-8 p-1" />
            <FaGithub className="rounded-full hover:bg-gray-200 w-8 h-8 p-1" />
          </div>
        </div>
        <div>
            <p className="text-lg text-gray-800 font-semibold selection:text-primary capitalize">Quick Link</p>
            <ul className="mt-2 flex flex-col gap-2 text-sm">
                <li><a href="#" className="capitalize hover:text-primary hover:underline">home</a></li>
                <li><a href="#" className="capitalize hover:text-primary hover:underline">browse car</a></li>
                <li><a href="#" className="hover:text-primary capitalize hover:underline">list yout car</a></li>
                <li><a href="#" className="hover:text-primary hover:underline">about us</a></li>
                <li><a href="#" className="hover:text-primary hover:underline">Accessibility</a></li>
            </ul>
        </div>
        <div>
            <p className="text-lg text-gray-800 font-semibold selection:text-primary capitalize">Resources</p>
            <ul className="mt-2 flex flex-col gap-2 text-sm">
                <li><a href="#" className="capitalize hover:text-primary">help center</a></li>
                <li><a href="#" className="capitalize hover:text-primary">term of service</a></li>
                <li><a href="#" className="capitalize hover:text-primary">privacy police</a></li>
                <li><a href="#" className="capitalize hover:text-primary">insurance</a></li>
            </ul>
        </div>
              <div>
            <p className="text-lg text-gray-800 font-semibold selection:text-primary capitalize">Contact</p>
            <ul className="mt-2 flex flex-col gap-2 text-sm">
                <li><a href="#" className="capitalize hover:text-primary">help center</a></li>
                <li><a href="#" className="capitalize hover:text-primary">term of service</a></li>
                <li><a href="#" className="capitalize hover:text-primary">privacy police</a></li>
                <li><a href="#" className="capitalize hover:text-primary">insurance</a></li>
            </ul>
        </div>
     
      </div>
    </div>
  );
};

export default Footer;
