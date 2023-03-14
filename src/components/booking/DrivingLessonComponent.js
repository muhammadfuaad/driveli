import calendar_clock_black from "../../assets/icons/calendar_clock_black.svg";
import user_circle_black from "../../assets/icons/user_circle_black.svg";

function DrivingLessonComponent(props) {
  return (
    <div className="flex flex-col gap-8 py-8">
      <div className="flex justify-between px-8">
        <p className='font-bold text-[2.8rem] tracking-[-0.7px] leading-[3.4rem] text-dark-black w-1/2 border-r border-r-medium-black'>{props.time}</p>
        <div className="flex gap-2">
          <img src={calendar_clock_black}></img>
          <div className="flex flex-col">
            <p className='font-semibold text-[1.2rem] tracking-[-0.3px] leading-[1.4rem] text-medium-black whitespace-nowrap'>{props.date}</p>
            <p className='font-normal text-[1.2rem] tracking-[-0.3px] leading-[1.4rem] text-medium-black'>{props.duration}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-12">
          <div className="flex gap-4">
            <div><img src={user_circle_black}></img></div>
            <div className="flex flex-col">
              <p className='font-medium text-[1rem] tracking-[0px] leading-[1.2rem] text-slate'>INSTRUCTOR</p>
              <p className='font-normal text-[1.2rem] tracking-[-0.3px] leading-[1.4rem] text-medium-black'>{props.instructor}</p>
              <p className='font-semibold text-[1.2rem] tracking-[-0.3px] leading-[1.4rem] text-medium-black'>{props.school}</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <img src={user_circle_black}></img>
            <div className="flex flex-col">
              <p className='font-medium text-[1rem] tracking-[0px] leading-[1.2rem] text-slate'>TRANSMISSION</p>
              <p className='font-normal text-[1.2rem] tracking-[-0.3px] leading-[1.4rem] text-medium-black'>{props.transmission}</p>
            </div>
          </div>
        </div>

        <div className="flex items-end">
          <p className='font-semibold text-[1.4rem] tracking-[-0.35px] leading-[1.4rem] text-light-green'>£{props.fee}</p>
        </div>
      </div>
    </div>
  );
}
export default DrivingLessonComponent;