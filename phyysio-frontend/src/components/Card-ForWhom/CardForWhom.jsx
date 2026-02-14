import './CardForWhom.css';

function CardForWhom({ title, description }) {
    return (
        <div className="card-forwhom-container">
            <h2 className="card-forwhom-title">{title}</h2>
            <p className="card-forwhom-description">
                {description}
            </p>
        </div>
    );
}

export default CardForWhom;