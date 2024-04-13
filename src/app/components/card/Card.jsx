import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import card from '@/app/styles/Card.module.scss'

export default function Card({ heading, body, footer }) {
  return (
    <div className={`${card.card} ${card['mt-2']}`}>
      <CardHeader heading={heading} />
      <CardBody body={body} />
      <CardFooter footer={footer} />
    </div>
  );
}
