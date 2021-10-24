import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1 contentEditable="true" spellCheck="true">
        {props.title}
      </h1>
      <p contentEditable="true" spellCheck="true">
        {props.content}
      </p>
    </div>
  );
}

export default Note;
