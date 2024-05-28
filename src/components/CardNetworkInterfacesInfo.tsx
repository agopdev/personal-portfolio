import networkInterfacesPic from '../assets/images/project-gnome-extension-network-interfaces-info.png';

export default function CardNetworkInterfacesInfo() {
    return (
        <>
            <div className="card-base">
                <div className="card-image">
                    <img src={networkInterfacesPic} alt="Proyecto de GNOME extension Network Interfaces Info" />
                </div>
                <div className="card-body">
                    <h5>Network Interfaces Info</h5>
                    <div className="card-description">
                        <p>Una extension para GNOME que permite visualizar la información de tus interfaces de red desde la barra superior.</p>
                    </div>
                    <a href="https://extensions.gnome.org/extension/6331/network-interfaces-info/" target="_blank" rel="noreferrer" className="btn">Visitar sitio web</a>
                </div>
            </div>
        </>
    );
}