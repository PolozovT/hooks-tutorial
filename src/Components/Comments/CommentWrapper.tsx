import React, { JSXElementConstructor } from "react";
import { CommentEntity } from "../../helper";

function CommentWrapper(props: CommentEntity) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgb(175,238,238)",
        margin: "2px",
        padding: "2px",
        borderRadius: "5px",
        maxWidth: "200px",
        maxHeight: "300px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontSize: "12px", fontWeight: "bold" }}>
          {props.author}
        </span>
        <span style={{ fontSize: "12px" }}>{props.date.toDateString()}</span>
      </div>
      <span
        style={{
          textAlign: "left",
          fontFamily: '"Comic Sans MS", cursive, sans-serif',
        }}
      >
        {props.comment}
      </span>
    </div>
  );
}

export { CommentWrapper };
