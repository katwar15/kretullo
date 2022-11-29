import { useState } from "react";
import { AddItemButton } from "./styles";
import { AddNewItemProps } from "./helpers/interfaces";
import { NewItemForm } from "./NewItemForm";

export const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const { onAdd, toggleButtonText, dark } = props;

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};
