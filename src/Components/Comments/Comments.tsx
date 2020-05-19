import React, { FC, useState, useEffect, useMemo } from "react";
import { CommentEntity } from "../../helper";
import { CommentsStore } from "../../Stores/CommentsStore";
import { CommentWrapper } from "./CommentWrapper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Comments: FC<{ comment?: Array<CommentEntity> }> = () => {
  const [comments, setComments] = useState(CommentsStore);
  const [comment, setComment] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    console.log("comments list", comments);
  }, [comments]);

  const input = {
    height: 40,
  };

  const onSubmit = () => {
    const copy = [...comments];
    copy.push({ author: author, comment: comment, date: new Date() });
    setComments(copy);
  };

  return (
    <div style={{ height: "calc(100vh - 40px)", padding: "20px" }}>
      <div style={{ maxHeight: "calc(100% - 150px)", overflowY: "auto" }}>
        {comments.map((x) => (
          <CommentWrapper
            key={x.comment}
            author={x.author}
            comment={x.comment}
            date={x.date}
          />
        ))}
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", maxWidth: "200px" }}
      >
        <TextField
          id="authorName"
          label="fill in your name..."
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
    </div>
  );
};

export { Comments };
