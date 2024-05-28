import notariaPic from '../assets/images/project-notaria.png';

export default function CardNotaria1Leon() {
    return (
        <>
            <div className="card-base">
                <div className="card-image">
                    <img src={notariaPic} alt="Página web de Notaría 1 León" />
                </div>
                <div className="card-body">
                    <h5>Notaría 1 León</h5>
                    <div className="card-description">
                        <p>Página web informativa sobre la Notaría 1 León, contempla también el panel de administración.</p>
                    </div>
                    <a href="https://notaria1leon.mx" target="_blank" rel="noreferrer" className="btn">Visitar sitio web</a>
                </div>
            </div>
        </>
    );
}