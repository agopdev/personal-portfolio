import gitLogo from '../assets/images/git-logo.png';
import javaLogo from '../assets/images/java-logo.png';
import jsLogo from '../assets/images/js-logo.png';
import linuxLogo from '../assets/images/linux-logo.png';
import mysqlLogo from '../assets/images/mysql-logo.png';
import nodejsLogo from '../assets/images/nodejs-logo.png';
import phpLogo from '../assets/images/php-logo.png';
import reactLogo from '../assets/images/react-logo.png';
import typescriptLogo from '../assets/images/typescript-logo.png';
import windowsLogo from '../assets/images/windows-logo.png';
import PopupInSection from '../components/PopupInSection';

export default function Skills() {
	return (
		<>
			<section id="skills" className="skills">
				<div className="space-50"></div>
				<h3>Skills</h3>
				<div className="space-50"></div>
				<div className="container">
					<div className="row logos-row">
						<div className="col-sm-6 col-md-3 col-lg-3 text-center">
							<PopupInSection>
								<img
									src={jsLogo}
									alt="Javascript logo"
									className="logo-skills"
								/>
							</PopupInSection>
						</div>
						<div className="col-sm-6 col-md-3 col-lg-3 text-center">
							<PopupInSection>
								<img
									src={typescriptLogo}
									alt="Hostinger logo"
									className="logo-skills"
								/>
							</PopupInSection>
						</div>
						<div className="col-sm-6 col-md-3 col-lg-3 text-center">
							<PopupInSection>
								<img
									src={nodejsLogo}
									alt="NodeJS logo"
									className="logo-skills"
								/>
							</PopupInSection>
						</div>
						<div className="col-sm-6 col-md-3 col-lg-3 text-center">
							<PopupInSection>
								<img
									src={gitLogo}
									alt="Git logo"
									className="logo-skills"
								/>
							</PopupInSection>
						</div>
					</div>
					<div className="row logos-row">
						<div className="col-sm-6 col-md-3 col-lg-3 text-center">
							<PopupInSection>
								<img
									src={phpLogo}
									alt="PHP logo"
									className="logo-skills"
								/>
							</PopupInSection>
						</div>
						<div className="col-sm-6 col-md-3 col-lg-3 text-center">
							<PopupInSection>
								<img
									src={javaLogo}
									alt="Java logo"
									className="logo-skills"
								/>
							</PopupInSection>
						</div>
						<div className="col-sm-6 col-md-3 col-lg-3 text-center">
							<PopupInSection>
								<img
									src={reactLogo}
									alt="React logo"
									className="logo-skills"
								/>
							</PopupInSection>
						</div>
						<div className="col-sm-6 col-md-3 col-lg-3 text-center">
							<PopupInSection>
								<img
									src={mysqlLogo}
									alt="MySQL logo"
									className="logo-skills"
								/>
							</PopupInSection>
						</div>
					</div>
					<div className="row logos-row">
						<div className="col-sm-6 col-md-6 col-lg-6 text-center">
							<PopupInSection>
								<img
									src={linuxLogo}
									alt="Linux logo"
									className="logo-skills"
								/>
							</PopupInSection>
						</div>
						<div className="col-sm-6 col-md-6 col-lg-6 text-center">
							<PopupInSection>
								<img
									src={windowsLogo}
									alt="Windows logo"
									className="logo-skills"
								/>
							</PopupInSection>
						</div>
					</div>
				</div>
				<div className="space-50"></div>
			</section>
		</>
	);
}
