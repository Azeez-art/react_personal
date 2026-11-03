import styles from "./card.module.css";

interface CardProps {
  title: string;
  text: string;
  image?: string;
}

function Card({ title, text, image}: CardProps) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <img src={image} alt={title} className={styles.cardImage} />
      <p>{text}</p>
    </div>
  )
}

export default Card