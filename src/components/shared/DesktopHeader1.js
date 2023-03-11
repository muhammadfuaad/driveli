import logo from "../../assets/icons/logo.svg";
import user_circle_white from "../../assets/icons/user_circle_white.svg";
import toggler_white from "../../assets/icons/toggler_white.svg";



function DesktopHeader1() {
  return (
    <div className="flex flex-col h-72 bg-[#102558] ">
      <div className="px-48 flex justify-between py-8 border-b border-b-platinum">
        <img src={logo}></img>
        <div className="flex gap-8 items-center">
          <div className="flex gap-4 items-center">
            <img src={user_circle_white} className="w-8"></img>
            <p className="font-medium text-[1.2rem] tracking-[0px] leading-[4rem] text-white">Sign In</p>
          </div>
          <img src={toggler_white} className="w-6"></img>
        </div>
        
      </div>
      <div className="px-48">
        <p className="font-medium text-[1rem] tracking-[0px] leading-[1.2rem] text-95">Home / Booking</p>
      </div>
    </div>
  );
}
export default DesktopHeader1;