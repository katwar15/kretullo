import { ColumnContainer, ColumnTitle } from "./styles";
import { ColumnProps } from "./helpers/interfaces";
import { useAppState } from "./stateFolder/AppStateContext";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { addTask } from "./stateFolder/actions";

export const Column = ({ text, id }: ColumnProps) => {
  const { getTasksByListId, dispatch } = useAppState();

  const tasks = getTasksByListId(id);

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};
