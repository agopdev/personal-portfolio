export interface CardProps {
	imageUrl: string;
	title: string;
	description: string;
	buttonText: string;
	buttonLink: string;
}

const Card: React.FC<CardProps> = ({
	imageUrl,
	title,
	description,
	buttonText,
	buttonLink,
}) => (
	<>
		<div className="card-base">
			<div className="card-image">
				<img src={imageUrl} alt={'Project name: ' + title} />
			</div>
			<div className="card-body">
				<h5>{title}</h5>
				<div className="card-description">
					<p>{description}</p>
				</div>
				<a
					href={buttonLink}
					target="_blank"
					rel="noreferrer"
					className="btn"
				>
					{buttonText}
				</a>
			</div>
		</div>
	</>
);

export default Card;
