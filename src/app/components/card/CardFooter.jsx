import card from "@/app/styles/Card.module.scss";
export default function CardFooter({ footer }) {
  return <div className={card.card__footer}>{footer}</div>;
}
