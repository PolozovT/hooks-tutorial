import React, { FC, useState, useEffect } from "react";
import { CommentEntity } from "../../helper";
import { CommentsStore } from "../../Stores/CommentsStore";
import { CommentWrapper } from "./CommentWrapper";

const Comments: FC<{ comment?: CommentEntity }> = ({}) => {
  const [comments, setComment] = useState();

  useEffect(() => {
    console.error("changed comment list");
  }, [CommentsStore]);

  return (
    <div>
      {CommentsStore.map((x) => (
        <CommentWrapper
          key={x.comment}
          author={x.author}
          comment={x.comment}
          date={x.date}
        />
      ))}
    </div>
  );
};

export { Comments };
