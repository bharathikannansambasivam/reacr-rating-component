import React from "react";
import thankYouGif from "../assets/cel.gif";

const Thankyou = ({ items, onRateAgain }) => {
  return (
    <>
      <div className="grid   h-screen items-center justify-center bg-violet-200">
        <div className="absolute ">
          <img
            className="w-screen h-screen"
            src={thankYouGif}
            alt="Thank you GIF"
          />
        </div>
        {}
        <div>
          <p className="text-4xl mb-9 text-center">
            ThankYou for giving {items}
          </p>
          <div className=" flex justify-center">
            <button
              className=" absolute bg-gradient-to-r from-violet-300 to-violet-500 rounded-md px-3 h-12 w-32 text-xl font-medium  "
              onClick={onRateAgain}
            >
              Rate Again
            </button>
          </div>{" "}
        </div>
      </div>
    </>
  );
};
export default Thankyou;
