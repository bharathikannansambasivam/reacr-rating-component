import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import thankYouGif from "../assets/cel.gif";
function Rating() {
  const [items, setItems] = useState("0😕 star");
  const [submited, setSubmitted] = useState(false);
  const Button = ({ number }) => {
    return <button>{number}</button>;
  };
  const Thankyou = ({ items }) => {
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
            <p className="text-4xl mb-9 ">ThankYou for giving {items}</p>
            <div className=" flex justify-center">
              <button
                className=" absolute bg-gradient-to-r from-violet-300 to-violet-500 rounded-md px-3 h-12 w-32 text-xl font-medium  "
                onClick={() => setSubmitted(false)}
              >
                Rate Again
              </button>
            </div>{" "}
          </div>
        </div>
      </>
    );
  };
  return (
    <div>
      {!submited && (
        <div className=" bg-violet-100 h-screen w-screen flex  flex-col items-center justify-center gap-5">
          <h1 className="font-extrabold text-2xl text-black ml-8 ">
            How was the quality of my post?
          </h1>{" "}
          <ul className="flex gap-3">
            <li className=" hover:border">
              <Button
                number={
                  <FontAwesomeIcon
                    icon={faStar}
                    color="red"
                    className=" h-9 hover:h-12"
                    onClick={() => setItems("⭐️ Star da")}
                  />
                }
              />
            </li>
            <li className=" ">
              {" "}
              <Button
                number={
                  <FontAwesomeIcon
                    icon={faStar}
                    color="orange"
                    className="h-9 hover:h-12"
                    onClick={() => setItems("⭐️⭐️ Stars")}
                  />
                }
              />
            </li>
            <li className="">
              {" "}
              <Button
                number={
                  <FontAwesomeIcon
                    icon={faStar}
                    color="yellow"
                    className=" h-9 hover:h-12"
                    onClick={() => setItems("⭐️🌟⭐️ Stars")}
                  />
                }
              />
            </li>
            <li className=" ">
              {" "}
              <Button
                number={
                  <FontAwesomeIcon
                    icon={faStar}
                    color="lightgreen "
                    className=" h-9 hover:h-12"
                    // className="fa-beat-fade"                     className="hover:h-6"

                    onClick={() => setItems("⭐️🌟🌟⭐️ Stars")}
                  />
                }
              />
            </li>
            <li className=" ">
              <Button
                number={
                  <FontAwesomeIcon
                    icon={faStar}
                    className="fa-beat h-9 hover:h-12"
                    color="green"
                    onClick={() => setItems("🌟🌟🌟🌟🌟 Stars")}
                  />
                }
              />
            </li>
          </ul>
          <button
            className=" bg-gradient-to-r from-violet-300 to-violet-500 rounded-md px-3 h-12 w-32 text-xl font-medium  "
            onClick={() => setSubmitted(true)}
          >
            Submit
          </button>
        </div>
      )}

      {submited == true && <Thankyou items={items} />}
    </div>
  );
}
export default Rating;
