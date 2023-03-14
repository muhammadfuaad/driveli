import DrivingLessonComponent from './DrivingLessonComponent';
import user_circle_black from "../../assets/icons/user_circle_black.svg";
import info_circle_blue from "../../assets/icons/info_circle_blue.svg";


function PaymentMethodsComponent() {
  return (
    <div className="flex justify-between bg-white p-8 rounded-xl border border-platinum">
      <div className="flex gap-8 items-center">
        <Radio/>
        <p className="text-[1.4rem] font-medium tracking-[-0.21px] text-black">Pay with Paypal</p>
      </div>
      <div className="flex gap-4">
        <img src={Paypal} className="mix-blend-luminosity w-[9rem] h-[2rem]"></img>
      </div>
    </div>
  );
}
export default PaymentMethodsComponent;