import React from "react";

function Note() {
  return (
    <div className="note">
      <h1 contenteditable="true" spellcheck="true">
        Note
      </h1>
      <p contenteditable="true" spellcheck="true">
        This is your note
      </p>
    </div>
  );
}

export default Note;
