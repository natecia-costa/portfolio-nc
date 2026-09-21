export default function CardHabilidade({ src, name }) {
    return (
      <div className="item-skills">
        <img src={src} alt={name} />
        <p>{name}</p>
      </div>
    );
}