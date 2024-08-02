import cards from '../data/cards';
import Card, { CardProps } from '../components/Card';
import PopupInSection from './PopupInSection';

export default function Portfolio() {
	return (
		<>
			<section id="portfolio" className="portfolio">
				<div className="space-50"></div>
				<h3>Portfolio</h3>

				{cards.map((card: CardProps) => (
					<PopupInSection>
						<Card
							imageUrl={card.imageUrl}
							title={card.title}
							description={card.description}
							buttonText={card.buttonText}
							buttonLink={card.buttonLink}
						/>
					</PopupInSection>
				))}

				<p className="info-github">
					More on{' '}
					<a
						href="https://github.com/agopdev"
						target="_blank"
						rel="noreferrer"
					>
						Github
					</a>
					.
				</p>
				<div className="space-50"></div>
			</section>
		</>
	);
}
