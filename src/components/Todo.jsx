import React from "react";

export default function Todo(props) {
  const { type, text } = props;

  return (
    <div className={`todo ${type === "done" ? "done_todo" : ""}`}>
      <div class="checkbox-wrapper-18">
        <div class="round">
          <input type="checkbox" id="checkbox-18" />
          <label for="checkbox-18"></label>
        </div>
      </div>
      <p>{text}</p>
    </div>
  );
}
