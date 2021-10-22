import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1 contenteditable="true" spellcheck="true">
        {props.title}
      </h1>
      <p contenteditable="true" spellcheck="true">
        {props.content}
      </p>
    </div>
  );
}

export default Note;
