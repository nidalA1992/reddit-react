import React, { ChangeEvent, FormEvent, useState } from "react";
import { getValue } from "../../utils/react/pickFromSyntheticEvent";
import { preventDefault } from "../../utils/react/preventDefault";
import { CommentForm } from "../CommentForm/CommentForm";

export function CommentFormContainer() {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    alert("Комментарий отправлен!");
  };

  return (
    <CommentForm
      value={value}
      onChange={() => getValue(setValue)}
      handleSubmit={preventDefault(handleSubmit)}
    />
  );
}
