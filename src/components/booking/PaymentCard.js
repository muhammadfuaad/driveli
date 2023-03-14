import DrivingLessonComponent from './DrivingLessonComponent';
import user_circle_black from "../../assets/icons/user_circle_black.svg";
import info_circle_blue from "../../assets/icons/info_circle_blue.svg";


function PaymentCard() {
  return (
    <div className="flex flex-col shadow-md bg-white rounded-3xl">
      <div className="p-12 bg-purple flex justify-center items-center">
        <p className='font-semibold text-[1.8rem] tracking-[-0.45px] leading-[2rem] text-white'>My Order</p>
      </div>
      <div className='px-8'>
        <p className='font-semibold text-[1.4rem] tracking-[-0.35px] leading-[1.4rem] text-medium-black my-8'>Driving Lesson</p>
        <div className='flex flex-col'>
          <div className='border-b border-b-black'><DrivingLessonComponent time="08:15 - 09:15" date="Monday 8 Dec" duration="(60 mins)" instructor="Sam Collins" school="Driving School Plus" transmission="Manual" fee="25"/></div>
          <div className='border-b border-b-black'><DrivingLessonComponent time="08:15 - 09:15" date="Monday 8 Dec" duration="(60 mins)" instructor="Sam Collins" school="Driving School Plus" transmission="Manual" fee="25"/></div>
          <div><DrivingLessonComponent time="08:15 - 09:15" date="Monday 8 Dec" duration="(60 mins)" instructor="Sam Collins" school="Driving School Plus" transmission="Manual" fee="25"/></div>
        </div>
      </div>
      <div className='flex justify-between px-8 py-12 bg-light-green bg-opacity-50'>
        <div className='flex gap-4'>
          <div><img src={user_circle_black}></img></div>
          <p className='font-bold text-[1.8rem] tracking-[-0.45px] leading-[2rem] text-dark-black'>Discount -10%</p>
        </div>
        <p className='font-semibold text-[1.4rem] tracking-[-0.35px] leading-[1.4rem] text-light-green'>-£2.50</p>
      </div>
        <div className='flex justify-between px-8 py-12 border-b border-b-platinum'>
          <p className='font-semibold text-[1.8rem] tracking-[-0.45px] leading-[2rem] text-dark-black'>Total to pay</p>
          <p className='font-semibold text-[2rem] tracking-[-0.5px] leading-[2.4rem] text-light-green'>£72.40</p>
        </div>
        <div className='p-8'>
          <p className='font-semibold text-[1.4rem] tracking-[-0.35px] leading-[1.6rem] text-dark-black mb-8'>Cancellation policy</p>
          <div className='flex gap-4'>
            <div><img src={info_circle_blue} className="w-8"></img></div>
            <p className='font-semibold text-[1.1rem] tracking-[-0.28px] leading-[1.3rem] text-sky-blue'>If you need to reschedule or cancel your appointment, the instructor youre visiting loves it when you give as much notice as possible so they can refill your spot.</p>
          </div>
        </div>
    </div>
  );
}
export default PaymentCard;