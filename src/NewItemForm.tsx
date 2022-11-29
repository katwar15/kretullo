import { useState } from "react";
import { NewItemFormContainer, NewItemButton, NewItemInput } from "./styles";
import { NewItemFormProps } from "./helpers/interfaces";
import { useFocus } from "./helpers/useFocus";

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");
  const inputFocus = useFocus();

  const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onAdd(text);
    }
  };

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputFocus}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleAddText}
      />
      <NewItemButton onClick={() => onAdd(text)}> Create</NewItemButton>
    </NewItemFormContainer>
  );
};
