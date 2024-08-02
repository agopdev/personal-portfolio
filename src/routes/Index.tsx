import Background from '../components/Background';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Knowledge from '../components/Knowledge';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';

export default function Index() {
	return (
		<>
			<Header />

			<main>
				<Portfolio />
				<Skills />
				<Knowledge />
			</main>

			<Background />

			<Footer />
		</>
	);
}
