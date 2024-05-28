import Footer from '../components/Footer';
import profilePic from '../assets/images/profile-pic.jpeg';
import codeExamplePic from '../assets/images/code-example.png';
// import cordovaLogo from '../assets/images/cordova-logo.png';
// import csLogo from '../assets/images/cs-logo.png';
// import cssLogo from '../assets/images/css-logo.png';
// import electronLogo from '../assets/images/electronjs-logo.png';
import gitLogo from '../assets/images/git-logo.png';
// import hostingerLogo from '../assets/images/hostinger-logo.png';
// import htmlLogo from '../assets/images/html-logo.png';
import javaLogo from '../assets/images/java-logo.png';
import jsLogo from '../assets/images/js-logo.png';
import linuxLogo from '../assets/images/linux-logo.png';
import mysqlLogo from '../assets/images/mysql-logo.png';
import nodejsLogo from '../assets/images/nodejs-logo.png';
import phpLogo from '../assets/images/php-logo.png';
import reactLogo from '../assets/images/react-logo.png';
import typescriptLogo from '../assets/images/typescript-logo.png';
import windowsLogo from '../assets/images/windows-logo.png';

import CardNetworkInterfacesInfo from '../components/CardNetworkInterfacesInfo';
import CardNotaria1Leon from '../components/CardNotaria1Leon';
import CardPandanot from '../components/CardPandanot';
import CardSimpli from '../components/CardSimpli';
import CardXfwall from '../components/CardXfwall';
import CardMyAPI from '../components/CardMyApi';
//import CardWebFront from '../components/CardWebFront';

export default function Index(){
    
    return (
        <>
            <header>
                <div className="space-100"></div>
                <div className="container py-3">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="display-2 name">
                                <span className="type">Alonso González-Leal</span>
                            </h1>
                            <div className="space-20"></div>
                            <div className="border-description">
                                <p className="lead-2 description">Estudiante de ingeniería en software con especial interés en el desarrollo backend. Apasionado por resolver problemas y crear soluciones técnicas eficientes. Siempre buscando aprender y mejorar en el campo del desarrollo de software.</p>
                                <a href="https://github.com/agopdev" target="_blank" rel="noreferrer" className="social-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="white" className="bi bi-github" viewBox="0 0 16 16" style={{margin: '15px'}}>
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                    </svg>
                                </a>
                                <a href="https://linkedin.com/in/agopdev" target="_blank" rel="noreferrer" className="social-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="white" className="bi bi-linkedin" viewBox="0 0 16 16" style={{margin: '15px'}}>
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-4 float-md-right mx-auto">
                            <img src={profilePic} className="img-fluid rounded-circle profile-pic d-block mx-auto" alt="Imagen de perfil" />
                        </div>
                    </div>
                </div>
                <div className="space-100"></div>
            </header>

            <main>
                <section id="portfolio" className="portfolio">
                    <div className="space-50"></div>
                    <h3>Este es mi portafolio</h3>
                    <CardXfwall />
                    <CardSimpli />
                    <CardNetworkInterfacesInfo />
                    <CardMyAPI />
                    <CardNotaria1Leon />
                    <CardPandanot />
                    <p className="info-github">Más en <a href="https://github.com/agopdev" target="_blank" rel="noreferrer">Github</a>.</p>
                    <div className="space-50"></div>
                </section>

                <section id="skills" className="skills">
                    <div className="space-50"></div>
                    <h3>Mis habilidades</h3>
                    <div className="space-50"></div>
                    <div className="container">
                        <div className="row logos-row">
                            <div className="col-sm-6 col-md-3 col-lg-3 text-center">
                                <img src={jsLogo} alt="Javascript logo" className="logo-skills" />
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 text-center">
                                <img src={typescriptLogo} alt="Hostinger logo" className="logo-skills" />
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 text-center">
                                <img src={nodejsLogo} alt="NodeJS logo" className="logo-skills" />
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 text-center">
                                <img src={gitLogo} alt="Git logo" className="logo-skills" />
                            </div>
                        </div>
                        <div className="row logos-row">
                            <div className="col-sm-6 col-md-3 col-lg-3 text-center">
                                <img src={phpLogo} alt="PHP logo" className="logo-skills" />
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 text-center">
                                <img src={javaLogo} alt="Java logo" className="logo-skills" />
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 text-center">
                                <img src={reactLogo} alt="React logo" className="logo-skills" />
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 text-center">
                                <img src={mysqlLogo} alt="MySQL logo" className="logo-skills" />
                            </div>
                        </div>
                        <div className="row logos-row">
                            <div className="col-sm-6 col-md-6 col-lg-6 text-center">
                                <img src={linuxLogo} alt="Linux logo" className="logo-skills" />
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 text-center">
                                <img src={windowsLogo} alt="Windows logo" className="logo-skills" />
                            </div>
                        </div>
                    </div>
                    <div className="space-50"></div>
                </section>

                <section id="knowledge" className="knowledge">
                    <div className="space-50"></div>
                    <h3>Conocimientos</h3>
                    <div className="space-50"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-7">
                                <ul>
                                    <li>Bash (Linux)</li>
                                    <li>Código limpio</li>
                                    <li>Github y Git</li>
                                    <li>Diseño y modelado de bases de datos relacionales</li>
                                    <li>Programación orientada a objetos</li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <div className="space-20"></div>
                                <img src={codeExamplePic} alt="Código de ánimo" className="img-code" />
                            </div>
                        </div>
                    </div>
                    <div className="space-50"></div>
                </section>
            </main>

            <div className="background">
            <div className="square" style={{ top: '-10rem', right: '-40rem' }}></div>
            <div className="square" style={{ top: '-10rem', left: '-20rem' }}></div>
            <div className="square" style={{ bottom: '40rem', left: '20rem' }}></div>
            <div className="square" style={{ top: '40rem', left: '20rem' }}></div>
            </div>

            <Footer />
        </>
    );
}