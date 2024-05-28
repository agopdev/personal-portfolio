import webFrontPic from '../assets/images/project-webfront.png';

export default function CardWebFront(){

    return (
        <>
            <div className="card-base">
                <div className="card-image">
                    <img src={webFrontPic} alt="Proyecto de WebFront" />
                </div>
                <div className="card-body">
                    <h5>WebFront</h5>
                    <div className="card-description">
                        <p>Una plantilla para desarrollar desde un sitio web estático sencillo, hasta una aplicación web completa. Integra PHP y Javascript.</p>
                    </div>
                    <a href="https://github.com/agopdev/WebFront" target="_blank" rel="noreferrer" className="btn">Visitar Github</a>
                </div>
            </div>
        </>
    );
}