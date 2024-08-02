import codeExamplePic from '../assets/images/code-example.png';

export default function Knowledge() {
	return (
		<>
			<section id="knowledge" className="knowledge">
				<div className="space-50"></div>
				<h3>Knowledge</h3>
				<div className="space-50"></div>
				<div className="container">
					<div className="row">
						<div className="col-md-1"></div>
						<div className="col-md-7">
							<ul>
								<li>Bash (Linux)</li>
								<li>Clean code</li>
								<li>GitHub and Git</li>
								<li>Relational database design and modeling</li>
								<li>Object-oriented programming</li>
							</ul>
						</div>
						<div className="col-md-4">
							<div className="space-20"></div>
							<img
								src={codeExamplePic}
								alt="Code example"
								className="img-code"
							/>
						</div>
					</div>
				</div>
				<div className="space-50"></div>
			</section>
		</>
	);
}
