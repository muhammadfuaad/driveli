import DrivingLessonComponent from './DrivingLessonComponent';
import user_circle_black from "../../assets/icons/user_circle_black.svg";
import info_circle_blue from "../../assets/icons/info_circle_blue.svg";


function SecureCheckoutCard() {
  return (
    <div className='flex flex-col gap-10 p-12 bg-white rounded-3xl border border-black'>
      <div className='flex gap-4'>
        <p className='font-semibold text-[1.8rem] tracking-[-0.45px] leading-[2rem] text-dark-black'>Secure checkout</p>
        <div><img src={info_circle_blue} className="w-8"></img></div>
      </div>

      <div className='flex gap-8 items-center'>
        <button className="px-20 h-20 py-6 uppercase text-[1.4rem] font-semibold text-white bg-green rounded-xl">
          Sign in
        </button>
        <p className='font-normal text-[1.3rem] tracking-[0.07px] leading-[1.5rem] text-slate'>or register and book lesson below</p>
      </div>
    </div>
  );
}
export default SecureCheckoutCard;