import React, { useState } from "react";
import { USFlag, PKFlag } from "public/assests/footer";
import Image from "next/image";
import Modal from "react-modal";

const CountrySelecter = () => {
  const countries = [
    {
      id: 1,
      flag: PKFlag,
      name: "Pakistan",
    },
    {
      id: 2,
      flag: USFlag,
      name: "USA",
    },
  ];
  const [current, setCurrent] = useState(countries[0]);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  //   const customStyles = {
  //     content: {
  //       top: "50%",
  //       left: "50%",
  //       right: "auto",
  //       bottom: "auto",
  //       marginRight: "-50%",
  //       transform: "translate(-50%, -50%)",
  //     },
  //   };

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="mt-3 ">
      <div
        className="w-4/5 border-2 border-[#f85757] rounded-lg hover:shadow-2xl hover:mt-4 hover:bg-slate-100  cursor-pointer  px-2 py-2 flex justify-between items-center lg:py-0"
        onClick={openModal}
      >
        <div className="flex items-center gap-2">
          <Image src={current.flag} width="30px" height="30px" />
          <span className="font-bold ">{current.name}</span>
        </div>
        <div className="text-[#f85757]">&#x21a7;</div>
      </div>
      <div className="">
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          //   style={customStyles}
          contentLabel="Example Modal"
        >
          {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
        </Modal>
      </div>
    </div>
  );
};

export default CountrySelecter;
