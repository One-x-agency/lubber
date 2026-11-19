import React from "react";
import Photo from "../assert/photo/hero.png";
import Logo from "../assert/photo/logo.svg";
import Logo1 from "../assert/photo/logo1.png";
import Img from "../assert/photo/img.png";
import Img1 from "../assert/photo/img1.png";
import Photo1 from "../assert/photo/photo.svg";
import Photo2 from "../assert/photo/photo1.svg";
import Photo3 from "../assert/photo/photo2.svg";
import Img2 from "../assert/photo/img2.png";
import Img3 from "../assert/photo/img3.png";
import Img4 from "../assert/photo/img4.png";

import Jcb from "../assert/photo/jcb.png";
import Arrow from "../assert/photo/arrow.svg";
import Photo4 from "../assert/photo/photo3.png";
export default function Herobanner() {
  return (
    <div>
        <div className="relative ">
        <div>
          <img className="max-h-[825px] w-[100%] mobile:h-[400px] " src={Photo} alt="" />
        </div>
        <div className="max-w-[1340px] mx-[90px] tablet:mx-[0px]">
          <div className="w-[364px] h-[calc(100%-90px)] bg-[rgba(12,57,133,0.7)] absolute top-0 tablet:h-[calc(100%-80px)] mobile:w-[170px] mobile:h-[calc(100%-120px)]"></div>
          <div className="flex items-center justify-between absolute top-0 w-[calc(100%-200px)] tablet:w-[calc(100%-0px)] ">
            <div>
              <img className="mt-[70px] ml-[14px] mobile:w-[150px]" src={Logo} alt="" />
            </div>
            <div>
              <img className="mobile:w-[120px]" src={Logo1} alt="" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 bg-[rgba(12,57,133,0.7)] py-[21px] w-[100%] px-[90px] flex items-center justify-center tablet:px-[10px] mobile:overflow-x-auto h-[120px]">
          <a
            href="blank"
            className="border-r border-[#fff] px-[60px] text-[32px] text-[#fff] tablet:px-[14px] tablet:text-[26px] mobile:px-[30px]"
          >
            Angebot
          </a>
          <a
            href="blank"
            className="border-r border-[#fff] px-[60px] text-[32px] text-[#fff]  tablet:px-[14px] tablet:text-[26px] mobile:px-[30px]"
          >
            Karriere
          </a>
          <a
            href="blank"
            className="border-r border-[#fff] px-[60px] text-[32px] text-[#fff]  tablet:px-[14px] tablet:text-[26px] mobile:px-[30px]"
          >
            Über uns
          </a>
          <a
            href="blank"
            className="border-r border-[#fff] px-[60px] text-[32px] text-[#fff]  tablet:px-[14px] tablet:text-[26px] mobile:px-[30px]"
          >
            Kontakt
          </a>
          <a href="blank" className=" pl-[60px] text-[32px] text-[#fff]  tablet:px-[14px] tablet:text-[26px] mobile:px-[30px]">
            Referenzen
          </a>
        </div>
      </div>  
        <div className="mx-auto max-w-[1203px] pt-[20px] pb-[105px] tablet:px-[20px]">
        <div className="grid grid-cols-[406px_1fr] gap-[60px] pb-[48px] tablet:gap-[30px] mobile:grid-cols-1">
          <div>
            <div className="bg-[rgba(255,126,0,.7)] h-[227px] mb-[60px] "></div>
            <img src={Img} alt="" />
          </div>
          <div>
            <img className="pb-[60px] tablet:pb-[20px]" src={Img1} alt="" />
            <h2 className="text-[32px] text-[#323232] font-semibold mb-[10px]">
              Lübber Erd- und Tiefbau
            </h2>
            <small className="text-[18px] font-semibold leading-[166%]">
              Herzlich willkommen!
            </small>
            <p className="pt-[10px] text-[17px] font-light text-[#323232] tablet:text-[13px]">
              Lübber besteht seit 1937 und hat sich im Laufe der letzten
              Jahrzehnte zu einem der führenden Unternehmen in der Erd- und
              Tiefbaubranche für die Region Bremen und Niedersachsen entwickelt.
              Angefangen als kleiner Familienbetrieb arbeiten heute mehr als 50
              Mitarbeiterinnen und Mitarbeiter für das Unternehmen: Im Syker
              Firmenhauptsitz, auf unserem großen Recyclingplatz in Weyhe oder
              auf einer der Baustellen unserer Auftraggeber.
            </p>
            <p className="text-[17px] font-light text-[#323232] tablet:text-[13px]">
              Bei unserer Arbeit setzen wir sowohl auf die Erfahrung aus über 80
              Jahren Firmengeschichte als auch auf ständige Weiterentwicklung —
              so arbeiten wir zum Beispiel daran, bei der Ausführung unserer
              Aufträge möglichst ressourcenschonend und nachhaltig vorzugehen.
              Außerdem legen wir großen Wert auf ein gutes Betriebsklima, das
              sich durch familiären Umgang, gute Kommunikation und Arbeit auf
              Augenhöhe definiert. Diese Werte und eine teamorientierte
              Arbeitsweise machen uns zu einem zuverlässigen und professionellen
              Partner für Bauunternehmer, Architekten und Kommunen der Region.
            </p>
            <p className="mt-[26px] text-[13px] text-[#323232] font-bold ">
              Niklas Franz
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[52px]  mobile:gap-[30px]">
          <div>
            <h1 className="text-[#0e4094b3] text-[64px] font-bold mobile:text-[50px]">546</h1>
            <p className="text-center text-[20px] text-[#323232] font-light">
              Angestellte
            </p>
          </div>
          <div>
            <h1 className="text-[#0e4094b3] text-[64px] font-bold mobile:text-[50px]">56</h1>
            <p className="text-center text-[20px] text-[#323232] font-light">
              Standorte
            </p>
          </div>
          <div>
            <h1 className="text-[#0e4094b3] text-[64px] font-bold pl-[15px] mobile:text-[50px]">
              237
            </h1>
            <p className="text-center text-[20px] text-[#323232] font-light">
              Zufriedene Kunden
            </p>
          </div>
        </div>
      </div>  
        <div className="max-w-[1338px] mx-auto pb-[106px] tablet:px-[20px]">
        <div className="grid grid-cols-3 gap-[51px]  tablet:grid-cols-2 mobile:grid-cols-1">
          <div className="bg-[#9191911a] py-[103px] px-[49px] tablet:py-[40px] tablet:px-[20px]">
            <img className="pb-[27px]" src={Photo1} alt="" />
            <h2 className="text-[20px] mb-[10px] text-[#323232] font-bold">
              TRADITION
            </h2>
            <p className="font-light text-[17px] leading-[166%]">
              Der Vorteil eines so langjährigen Unternehmens sind nicht nur die
              wertvollen Geschäftserfahrungen — es sind vor allem die
              gemeinsamen Werte und Beziehungen, die im Laufe der Zeit entstehen
              und von Generation zu Generation weitergegeben werden, um die
              Basis für neue Ideen und eine starke Weiterentwicklung zu bilden.
            </p>
          </div>
          <div className="bg-[#0c3985b3] py-[103px] px-[49px] tablet:py-[40px] tablet:px-[20px]">
            <img className="pb-[27px]" src={Photo2} alt="" />
            <h2 className="text-[20px] mb-[10px] text-[#fff] font-bold">
              TRADITION
            </h2>
            <p className="font-light text-[17px] leading-[166%] text-[#fff]">
              Der Vorteil eines so langjährigen Unternehmens sind nicht nur die
              wertvollen Geschäftserfahrungen — es sind vor allem die
              gemeinsamen Werte und Beziehungen, die im Laufe der Zeit entstehen
              und von Generation zu Generation weitergegeben werden, um die
              Basis für neue Ideen und eine starke Weiterentwicklung zu bilden.
            </p>
          </div>
          <div className="bg-[#9191911a] py-[103px] px-[49px] tablet:py-[40px] tablet:px-[20px]">
            <img className="pb-[27px]" src={Photo3} alt="" />
            <h2 className="text-[20px] mb-[10px] text-[#323232] font-bold">
              TRADITION
            </h2>
            <p className="font-light text-[17px] leading-[166%]">
              Der Vorteil eines so langjährigen Unternehmens sind nicht nur die
              wertvollen Geschäftserfahrungen — es sind vor allem die
              gemeinsamen Werte und Beziehungen, die im Laufe der Zeit entstehen
              und von Generation zu Generation weitergegeben werden, um die
              Basis für neue Ideen und eine starke Weiterentwicklung zu bilden.
            </p>
          </div>
        </div>
      </div>  
      <div className="px-[10px]">
        <div className="grid grid-cols-3 gap-[8px] tablet:grid-cols-2 mobile:grid-cols-1">
          <div>
            <img className="w-[100%] h-[472px] mobile:h-[300px]" src={Img2} alt="" />
          </div>
          <div>
            <img className="w-[100%] h-[472px] mobile:h-[300px]" src={Img3} alt="" />
          </div>
          <div>
            <img className="w-[100%] h-[472px] mobile:h-[300px]" src={Img2} alt="" />
          </div>
        </div>
      </div>  

        <div className="pt-[86px] pb-[155px] max-w-[1154px] mx-auto mobile:pb-[40px]">
        <h1 className="text-[80px] text-[#323232] text-center font-bold pb-[60px] tablet:text-[50px] tablet:px-[20px] tablet:pb-[30px] mobile:text-[40px]">
          Unsere Dienstleistungen
        </h1>
        <div className="grid grid-cols-2 gap-[60px] tablet:px-[20px] mobile:grid-cols-1 mobile:gap-[20px]">
          <div className="bg-[#7a7a7a1a] py-[75px] px-[69px] tablet:py-[30px] tablet:px-[30px]">
            <h2 className="text-[20px] text-[#323232] pb-[27px] font-bold">
              FUHRBETRIEB
            </h2>
            <img className="mobile:h-[250px] mobile:w-[100%]" src={Jcb} alt="" />
          </div>
          <div className="bg-[#7a7a7a1a] py-[75px] px-[69px] tablet:py-[30px] tablet:px-[30px]">
            <h2 className="text-[20px] text-[#323232] pb-[27px] font-bold">
              FUHRBETRIEB
            </h2>
            <img className="mobile:h-[250px] mobile:w-[100%]"  src={Jcb} alt="" />
          </div>
          <div className="bg-[#7a7a7a1a] py-[75px] px-[69px] tablet:py-[30px] tablet:px-[30px]">
            <h2 className="text-[20px] text-[#323232] pb-[27px] font-bold">
              FUHRBETRIEB
            </h2>
            <img className="mobile:h-[250px] mobile:w-[100%]" src={Jcb} alt="" />
          </div>
          <div className="bg-[#7a7a7a1a] py-[75px] px-[69px] tablet:py-[30px] tablet:px-[30px]">
            <h2 className="text-[20px] text-[#323232] pb-[27px] font-bold">
              FUHRBETRIEB
            </h2>
            <img className="mobile:h-[250px] mobile:w-[100%]" src={Jcb} alt="" />
          </div>
          <div className="bg-[#7a7a7a1a] py-[75px] px-[69px] tablet:py-[30px] tablet:px-[30px]">
            <h2 className="text-[20px] text-[#323232] pb-[27px] font-bold">
              FUHRBETRIEB
            </h2>
            <img className="mobile:h-[250px] mobile:w-[100%]" src={Jcb} alt="" />
          </div> 
          <div className="bg-[#7a7a7a1a] py-[75px] px-[69px] tablet:py-[30px] tablet:px-[30px]">
            <h2 className="text-[20px] text-[#323232] pb-[27px] font-bold">
              FUHRBETRIEB
            </h2>
            <img className="mobile:h-[250px] mobile:w-[100%]" src={Jcb} alt="" />
          </div>
          <div className="bg-[#7a7a7a1a] py-[75px] px-[69px] tablet:py-[30px] tablet:px-[30px]">
            <h2 className="text-[20px] text-[#323232] pb-[27px] font-bold">
              FUHRBETRIEB
            </h2>
            <img className="mobile:h-[250px] mobile:w-[100%]" src={Jcb} alt="" />
          </div>
          <div className="bg-[#ff7e00b3] py-[75px] px-[69px] tablet:py-[30px] tablet:px-[30px] mobile:h-[250px] mobile:w-[100%]"></div>
        </div>
      </div> 
        <div className="pb-[104px] max-w-[1226px] mx-auto tablet:px-[20px]">
        <div className="grid grid-cols-[1fr_406px] gap-[60px] tablet:grid-cols-1 mobile:grid-cols-1 mobile:gap-[30px]">
          <div>
            <h1 className="text-[80px] text-[#323232] mb-[26px]  font-bold tablet:text-[40px] mobile:text-[30px] mobile:text-center ">
              Begleiten Sie uns
            </h1>
            <div className="flex items-center gap-[36px] pb-[60px] mobile:pb-[20px] ">
              <div>
                <img src={Arrow} alt="" />
              </div>
              <div>
                <p className="text-[24px] leading-[157%] max-w-[554px] mobile:text-[17px]">
                  Informieren Sie sich über die Stellenangebote, die wir für Sie
                  haben
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[62px] mobile:gap-[20px]">
              <img className="w-[349px] " src={Photo4} alt="" />
              <div className="bg-[#ff7e00b3] "></div>
            </div>
          </div>
          <div>
            <img className="tablet:w-[100%] tablet:h-[600px] mobile:h-[400px] mobile:w-[100%] " src={Img4} alt="" />
          </div>
        </div>
      </div>  
    </div>
  );
}
