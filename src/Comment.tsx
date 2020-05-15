import React, { FC, useState, useEffect } from "react";

const Comment: FC<{ text?: string }> = ({ text = "pichka" }) => {
  const [comment, setComment] = useState(text);

  useEffect(() => {
    console.log("changed!");
  }, [comment]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span style={{ backgroundColor: "grey" }}>{comment}</span>
      <input
        placeholder="write comment here..."
        type="text"
        onChange={(event) => setComment(event.target.value)}
      />
    </div>
  );
};

export default Comment;
