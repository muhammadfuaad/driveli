import RadioComponent from './RadioComponent';
import visa from "../../icons/visa.svg";
function PaymentMethodsComponent() {
  return (
    <div className="flex justify-between bg-white p-8 rounded-xl border border-platinum">
      <div className="flex gap-8 items-center">
        <RadioComponent/>
        <p className="text-[1.4rem] font-medium tracking-[-0.21px] text-black">Pay with Paypal</p>
      </div>
      <div className="flex gap-4">
        <img src={visa} className="mix-blend-luminosity w-[9rem] h-[2rem]"></img>
      </div>
    </div>
  );
}
export default PaymentMethodsComponent;