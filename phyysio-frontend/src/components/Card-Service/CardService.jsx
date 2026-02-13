import './CardService.css';

function CardService ({service,image}){
    return(
        <>
            <div className="card-service">
                <img className='image-card' src={image} alt={service.title} />
                
                <h2 className='title-card'>{service.title}</h2>
                <p className='text-card'>{service.description}</p>

                
            </div>
        </>
    );
} export default CardService;