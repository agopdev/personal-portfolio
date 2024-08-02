import { useEffect, useRef, useState } from 'react';

interface IntersectionObserverArgs {
	threshold?: number | number[];
	root?: Element | null;
	rootMargin?: string;
}

const useIntersectionObserver = ({
	threshold = 0,
	root = null,
	rootMargin = '0%',
}: IntersectionObserverArgs) => {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsIntersecting(entry.isIntersecting);
			},
			{
				threshold,
				root,
				rootMargin,
			},
		);

		const currentRef = ref.current;
		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, [threshold, root, rootMargin]);

	return { ref, isIntersecting };
};

export default useIntersectionObserver;
