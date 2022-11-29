import { Item } from "./interfaces";

export const findItemIndexById = <TItem extends Item>(
  items: TItem[],
  id: string
) => {
  return items.findIndex((item: Item) => item.id === id);
};
