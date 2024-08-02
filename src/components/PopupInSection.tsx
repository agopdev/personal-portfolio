import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import '../assets/styles/PopupInSection.css';

interface PopupInSectionProps {
	children: React.ReactNode;
}

const PopupInSection: React.FC<PopupInSectionProps> = ({ children }) => {
	const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

	return (
		<div
			ref={ref}
			className={`popup-in-section ${isIntersecting ? 'visible' : ''}`}
		>
			{children}
		</div>
	);
};

export default PopupInSection;
