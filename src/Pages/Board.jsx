import React from "react";
import "../CSS/Board.css";
import { MdModeEdit, MdDelete } from "react-icons/md";

export default function Board() {
  return (
    <div className="Contact" id="Contact">
      <div className="inner-width">
        <h1 className="Section-title-Contact">Message Board</h1>
        <div className="contact-info">
          <form action="#" className="Contact-form">
            <input type="text" className="SubjectZone" placeholder="Subject" />
            <textarea className="MessageZone" placeholder="Message" />
            <input type="submit" value="Post Message" className="Btn" />
          </form>
        </div>
        <div className="Messages">
          <div className="Avatar"></div>
          <div className="Message-contact"></div>
          <button className="edit-btn" id="Change">
            <MdModeEdit size={30} />
          </button>
          <button className="delete-btn" id="Change">
            <MdDelete size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
