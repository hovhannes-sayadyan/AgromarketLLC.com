import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { memo } from "react";
import "./contact.scss";

function Contact() {
  return (
    <div className="Contact">
      <div className="ContactIconDiv">
        <h1 className="h1">հԵՏԱԴԱՐՁ ԿԱՊ `</h1>
        <div className="ContactIconsDivs">
          <div className="ContactIconsDiv">
            <FaLocationDot className="ContactIcons" />
          </div>
          <div>
            <h3 className="h3">ՀԱՍՑԵ՝</h3>
            <h4 className="h4">ՔԱՂԱՔ ԱՐՏԱՇԱՏ ԵՐևԱՆ-ԵՐԱՍԽ</h4>
          </div>
        </div>
        <div className="ContactIconsDivs">
          <div className="ContactIconsDiv">
            <BsTelephoneFill className="ContactIcons" />
          </div>
          <div>
            <h3 className="h3">ՀԵՌԱԽՈՍ՝</h3>
            <h4 className="h4">+374 94 08 16 56</h4>
            <h4 className="h4">+374 93 05 11 61</h4>
          </div>
        </div>
        <div className="ContactIconsDivs">
          <div className="ContactIconsDiv">
            <IoMail className="ContactIcons" />
          </div>
          <div>
            <h3 className="h3">ԷԼ․ՓՈՍՏ ՝</h3>
            <h4 className="h4">agromarket.eu@gmail.com</h4>
          </div>
        </div>
      </div>
      <div className="ContactTextField">
        <div className="White">
          <h1 className="h1">ՆԱՄԱԿ՝</h1>
          <div className="NameMail">
            <input
              type="text"
              placeholder="ԱՆՈՒՆ"
              name="Name"
              className="NameInput2"
            />
            <input
              type="text"
              placeholder="ԷԼ․ՓՈՍՏ "
              name="G-Mail"
              className="MailInput2"
            />
          </div>
          <textarea
            onChange={() => {
              const body = document.querySelector(`.LetterInput2`)?.value;
              console.log(body);
            }}
            type="text"
            placeholder="ՆԱՄԱԿ"
            name="Letter"
            className="LetterInput2"
          ></textarea>
          <a
            className="Submit2"
            onClick={() => {
              const a = document.querySelector(`.Submit2`);
              const subject = document.querySelector(`.NameInput2`).value;
              const GMail = document.querySelector(`.MailInput2`).value;
              const body = document.querySelector(`.LetterInput2`)?.value;
              const text = `Hello I'am ${subject}. ${body}. My G-Mail is ${GMail}`;
              a.href = `mailto:agromarket.eu@gmail.com?subject= Letter from WebSite&body=${text}`;
            }}
          >
            ՈՒՂԱՐԿԵԼ
          </a>
        </div>
      </div>
    </div>
  );
}

export default memo(Contact);
