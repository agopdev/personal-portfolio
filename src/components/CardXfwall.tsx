import xfwallPic from '../assets/images/project-xfwall.png';

export default function CardXfwall(){

    return (
        <>
            <div className="card-base">
                <div className="card-image">
                    <img src={xfwallPic} alt="Proyecto de xfwall" />
                </div>
                <div className="card-body">
                    <h5>XFWall</h5>
                    <div className="card-description">
                        <p>XFWall es un script de bash que permite a los usuarios de XFCE cambiar su fondo de pantalla cada cierto tiempo gracias a la API de Wallhaven. Puede personalizar las preferencias de búsqueda.</p>
                    </div>
                    <a href="https://github.com/agopdev/xfwall" target="_blank" rel="noreferrer" className="btn">Visitar Github</a>
                </div>
            </div>
        </>
    );
}