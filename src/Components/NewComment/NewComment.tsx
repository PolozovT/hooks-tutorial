import React, { FC, useState, useEffect } from "react";
import { CommentEntity, ICommentEntity } from "../../helper";
import { CommentsStore } from "../../Stores/CommentsStore";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const NewComment: FC<{ comment?: CommentEntity }> = ({}) => {
  const [comment, setComment] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState(new Date());

  const input = {
    height: 40,
  };

  useEffect(() => {
    console.log("changed!");
  }, [comment]);

  const onSubmit = () => {
    CommentsStore.push({ author: author, comment: comment, date: date });
    console.error("onSubmit");
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", maxWidth: "200px" }}
    >
      <TextField
        id="authorName"
        label="write your name here..."
        variant="outlined"
        style={{
          marginTop: "3px",
          backgroundColor: "#ffffff",
          borderRadius: "5px",
        }}
        InputLabelProps={{ style: { fontWeight: "bold" } }}
        onChange={(event) => setAuthor(event.target.value)}
      />
      <TextField
        id="comment"
        label="write comment here..."
        variant="outlined"
        style={{
          marginTop: "3px",
          backgroundColor: "#ffffff",
          borderRadius: "5px",
        }}
        InputLabelProps={{ style: { fontWeight: "bold" } }}
        onChange={(event) => setComment(event.target.value)}
      />
      <Button
        onClick={onSubmit}
        style={{
          backgroundColor: "rgb(30,144,255)",
          marginTop: "3px",
        }}
      >
        Post
      </Button>
    </div>
  );
};

export { NewComment };
