import card from "@/app/styles/Card.module.scss";
export default function CardHeader({ heading }) {
  return <h2 className={card.card__header}>{heading}</h2>;
}
