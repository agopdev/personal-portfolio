import simpliPic from '../assets/images/project-github-simpli.png';

export default function CardSimpli() {
    return (
        <>
            <div className="card-base">
                <div className="card-image">
                    <img src={simpliPic} alt="Proyecto de simpli" />
                </div>
                <div className="card-body">
                    <h5>Simpli</h5>
                    <div className="card-description">
                        <p>Un editor de código open-source hecho en electron, con soporte para Python, Java y Javascript.</p>
                    </div>
                    <a href="https://github.com/agopdev/simpli" target="_blank" rel="noreferrer" className="btn">Visitar Github</a>
                </div>
            </div>
        </>
    );
}