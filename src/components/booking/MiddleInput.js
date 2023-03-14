function MiddleInput(props) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label for={props.id} className='font-medium text-[1.1rem] tracking-[-0.28px] leading-[1.2rem] text-dark-black'>{props.label}</label>
      <input type="text" id={props.id} className="font-normal text-[1.2rem] tracking-[-0.3px] leading-[1.6rem] text-slate focus:outline-none focus:bg-transparent block border border-platinum rounded-xl p-4" placeholder={props.placeholder} />
    </div>
  );
}
export default MiddleInput;