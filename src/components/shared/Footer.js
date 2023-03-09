import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import visa from "../../assets/icons/visa.svg";
import mastercard from "../../assets/icons/visa.svg";
import paypal from "../../assets/icons/visa.svg";
import stripe from "../../assets/icons/visa.svg";
import walio from "../../assets/icons/visa.svg";


function Footer() {
  return (
    <div className="flex flex-col px-48">
      <div className="flex bg-light-green p-4">
        <div className="flex gap-8 items-center border-r border-r-medium-black">
          <img src={facebook} alt="Logo" />
          <p className="font-semibold text-[1.3rem] tracking-[-0.33px] leading-[1.4rem] text-dark-black">The Driveli Promise</p>
        </div>
        <p className="font-normal text-[1.2rem] tracking-[-0.3px] leading-[1.4rem] text-medium-black pl-8">We want to make learning to drive stress-free from beginning to end. That’s why we take care of scheduling, payments, and everything else in between. You just need to keep your eyes on the road!</p>
      </div>

      <div className="flex justify-between pb-20 border-b border-b-[#999]">
        <div className="flex gap-28 w-[90%]">
          <div className="flex-1 flex flex-col">
            <p className="footer-heading">COMPANY</p>
            <ul className="footer-link">
              <li>About Us</li>
              <li>Contact</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>FAQ </li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col">
            <p className="footer-heading">LEARNERS</p>
            <ul className="footer-link">
              <li>How it works</li>
              <li>Referrals</li>
              <li>Learner’s Journey</li>
              <li>Learning to drive</li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col">
            <p className="footer-heading">INSTRUCTORS</p>
            <ul className="footer-link">
              <li>Driving Instructor </li>
              <li> How it works</li>
              <li>Referrals</li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col">
            <p className="footer-heading">ACCOUNT</p>
            <ul className="footer-link">
              <li>Login</li>
              <li>Register</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-8 items-center">
          <img src={facebook} className="w-[0.9rem] h-[1.6rem]"></img>
          <img src={twitter} className="w-[2rem] h-[1.7rem]"></img>
          <img src={instagram} className="w-[2.5rem] h-[2.5rem]"></img>
          <img src={linkedin} className="w-[1.8rem] h-[1.7rem]"></img>
        </div>
      </div>

      <div className="flex justify-between py-12">
        <p>© 2022 Driveli.co.uk All rights reserved.</p>

        <div className="flex gap-12 items-center">
          <img src={visa} className="mix-blend-luminosity"></img>
          <img src={mastercard} className="mix-blend-luminosity"></img>
          <img src={paypal} className="mix-blend-luminosity"></img>
          <img src={stripe} className="mix-blend-luminosity"></img>
          <img src={walio} className="mix-blend-luminosity"></img>
        </div>
      </div>
    </div>
  );
}
export default Footer;