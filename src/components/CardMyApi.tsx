import myApiPic from '../assets/images/project-myapi.png';

export default function CardWebFront(){

    return (
        <>
            <div className="card-base">
                <div className="card-image">
                    <img src={myApiPic} alt="Proyecto de MyApi" />
                </div>
                <div className="card-body">
                    <h5>MyAPI</h5>
                    <div className="card-description">
                        <p>Una plantilla para desarrollar una RESTful API completa en PHP.</p>
                    </div>
                    <a href="https://github.com/agopdev/MyAPI" target="_blank" rel="noreferrer" className="btn">Visitar Github</a>
                </div>
            </div>
        </>
    );
}