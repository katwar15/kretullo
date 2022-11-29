import { CardContainer } from "./styles";
import { CardProps } from "./helpers/interfaces";

export const Card = ({ text }: CardProps) => {
  return <CardContainer>{text}</CardContainer>;
};
