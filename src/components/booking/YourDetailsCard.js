import MiddleInput from './MiddleInput';

function YourDetailsCard() {
  return (
    <div className='flex flex-col p-12 bg-white rounded-3xl border border-black'>
      <div className='flex justify-between'>
        <p className='card-heading'>Your Details</p>
        <p className='font-normal text-[1.3rem] tracking-[0.07px] leading-[1.5rem] text-slate'>* Required field</p>
      </div>

      <div className='flex flex-col gap-8'>
        <div className='flex gap-4'>
          <MiddleInput id="full-name" label="Full Name*" placeholder="Stephen Kingsman"/>
          <MiddleInput id="email" label="Email*" placeholder="stephen.kingsman@gmail.com"/>
        </div>
        <div className='flex gap-4'>
          <div className='w-1/2'><MiddleInput id="phone" label="Phone" placeholder="283 785 2403"/></div>
          <div className='w-[30%]'><MiddleInput id="addresss" label="Addresss" placeholder="Bordesley Green Road"/></div>
          <div className='w-[20%]'><MiddleInput id="postal-address" label="Postal Address"/></div>
        </div>
      </div>
    </div>
  );
}
export default YourDetailsCard;