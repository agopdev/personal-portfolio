import pandanotPic from '../assets/images/project-pandanot.png';

export default function CardPandanot() {
    return (
        <>
            <div className="card-base">
                <div className="card-image">
                    <img src={pandanotPic} alt="Proyecto de pandanot" />
                </div>
                <div className="card-body">
                    <h5>Pandanot</h5>
                    <div className="card-description">
                        <p>Una plataforma web que contiene distintas herramientas para diferentes cálculos fiscales en México.</p>
                    </div>
                    <a href="https://pandanot.com" target="_blank" rel="noreferrer" className="btn">Visitar sitio web</a>
                </div>
            </div>
        </>
    );
}