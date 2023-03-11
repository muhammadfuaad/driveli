import Footer from "components/shared/Footer";
import DesktopHeader1 from "../shared/DesktopHeader1";

function CashPayment() {
  return (
    <div>
      <DesktopHeader1/>
      <div className="flex flex-col px-48">
        <p className="font-bold text-[2.8rem] tracking-[-0.7px] leading-[3.4rem] text-dark-black mb-8">Search by Location</p>
        <div className="flex">
          <ul className="flex-1 footer-link">
            <li>Aberdeen</li>
            <li>Acton</li>
            <li>Banbury</li>
            <li>Barking</li>
            <li>Barnet</li>
            <li>Bath</li>
          </ul>

          <ul className="flex-1 footer-link">
            <li>Bedford</li>
            <li>Birmingham</li>
            <li>Blackburn</li>
            <li>Bolton</li>
            <li>Borehamwood</li>
            <li>Exeter</li>
          </ul>

          <ul className="flex-1 footer-link">
            <li>Finsbury Park</li>
            <li>Glasgow</li>
            <li>Gloucester</li>
            <li>Greenwich</li>
            <li>Guildford</li>
            <li>Hackney</li>
          </ul>

          <ul className="flex-1 footer-link">
            <li>Hampstead</li>
            <li>Harlow</li>
            <li>Harrow</li>
            <li>Hatfield</li>
            <li>Portsmouth</li>
            <li>Preson</li>
          </ul>

          <ul className="flex-1 footer-link">
            <li>Putney</li>
            <li>Reading</li>
            <li>Redhill</li>
            <li>Rochester</li>
            <li>Ramford</li>
            <li>Rugby</li>
          </ul>

          <ul className="flex-1 footer-link">
            <li>Sheffield</li>
            <li>Southend-on-Sea</li>
            <li>South East London</li>
            
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default CashPayment;