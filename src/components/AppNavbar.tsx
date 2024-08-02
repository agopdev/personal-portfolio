import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import '../assets/styles/AppNavbar.css';
import { List } from 'react-bootstrap-icons';

export default function AppNavbar() {
	const [isResponsive, setIsResponsive] = useState(false);

	const handleClick = () => {
		setIsResponsive(!isResponsive);
	};

	useEffect(() => {
		const handleScroll = () => {
			const nav = document.querySelector('.topnav') as HTMLElement | null;
			if (nav) {
				nav.classList.toggle(
					'scrolled',
					window.scrollY > nav.offsetHeight,
				);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const navClass = isResponsive ? 'topnav responsive' : 'topnav';

	return (
		<>
			<nav className={navClass}>
				<a href="/">Home</a>
				<a href="#portfolio">Portfolio</a>
				<a href="#skills">Skills</a>
				<a href="#knowledge">Knowledge</a>
				<a href="#contact">Contact</a>
				<a href="#nav" className="icon" onClick={handleClick}>
					<List width="24" height="24" />
				</a>
			</nav>
			<Outlet />
		</>
	);
}
