import React from "react";
import Arrow from "../assert/photo/arrow.svg";
export default function Footer() {
  return (
    <div>
      <footer className="bg-[#4c6ca1] py-[37px] px-[57px] tablet:p-[30px]">
        <div className="max-w-[1104px] mx-auto">
          <div className="grid grid-cols-[1fr_400px] gap-[150px] pb-[60px] tablet:grid-cols-1 tablet:gap-[50px] mobile:gap-[30px]">
            <div>
              <h6 className="text-[#ff7e00b3] text-[64px] font-bold leading-[130%] mb-[10px] mobile:text-[35px]">
                LÜBBER Erd- und Tiefbau GmbH
              </h6>
              <p className="text-[30px] font-medium text-[#323232] leading-[150%] mobile:text-[20px]">
                Bassumer Landstraße 60
              </p>
              <p className="text-[30px] font-medium text-[#323232] leading-[150%]  mobile:text-[20px]">
                28857 Syke
              </p>
              <p className="text-[30px] font-medium text-[#323232] leading-[150%]  mobile:text-[20px]">
                (04242) 5 06 96
              </p>
            </div>
            <div>
              <h2 className="text-[35px] text-[#323232] font-bold leading-[133%] mb-[40px] ">
                Ihre Nachricht an uns:
              </h2>
              <input
                type="Name"
                name="name"
                value=""
                placeholder="Name"
                className="placeholder-black placeholder: focus:placeholder-transparent bg-[#3e3e3e0a] w-[100%] px-[25px] h-[59px] border-none mb-[10px]"
              />
              <input
                type="Email"
                name="name"
                value=""
                placeholder="Email Adresse"
                className="placeholder-black placeholder: focus:placeholder-transparent bg-[#3e3e3e0a] w-[100%] px-[25px] h-[59px] border-none mb-[10px]"
              />
              <input
                type="number"
                name="name"
                value=""
                placeholder="Telefon"
                className="placeholder-black placeholder: focus:placeholder-transparent bg-[#3e3e3e0a] w-[100%] px-[25px] h-[59px] border-none mb-[10px]"
              />
              <input
                type="text"
                name="name"
                value=""
                placeholder="Nachricht"
                className="placeholder-black placeholder: focus:placeholder-transparent bg-[#3e3e3e0a] w-[100%] px-[25px] h-[59px] border-none mb-[10px]"
              />
              <div className="flex items-center justify-end pt-[40px] gap-[12px]">
                <p className="text-[24px] text-[#323232] font-bold">Senden</p>
                <img className="max-w-[17px] h-[14px]" src={Arrow} alt="" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-[20px] mobile:overflow-auto">
            <a href="blank" className="text-[16px] text-[#323232] font-bold">
              Angebot
            </a>
            <a href="blank" className="text-[16px] text-[#323232] font-bold">
              Über uns
            </a>
            <a href="blank" className="text-[16px] text-[#323232] font-bold">
              Karriere
            </a>
            <a href="blank" className="text-[16px] text-[#323232] font-bold">
              Kontakt
            </a>
            <a href="blank" className="text-[16px] text-[#323232] font-bold">
              Referenzen
            </a>
            <a href="blank" className="text-[16px] text-[#323232] font-bold">
              Impressum
            </a>
            <a href="blank" className="text-[16px] text-[#323232] font-bold">
              Datenschutz
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
