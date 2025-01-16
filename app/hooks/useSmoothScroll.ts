import { useEffect } from 'react';

export function useSmoothScroll() {
    useEffect(() => {
        const handleScroll = (event: WheelEvent) => {
            event.preventDefault();

            const scrollAmount = event.deltaY;
            const scrollDuration = 30; // ms
            const scrollStep = Math.PI / (scrollDuration / 150);
            const cosParameter = scrollAmount / 2;

            let scrollCount = 0;
            let scrollMargin;

            const scrollInterval = setInterval(() => {
                if (scrollCount < scrollDuration) {
                    scrollCount += 10;
                    scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
                    window.scrollTo(0, window.pageYOffset + scrollMargin);
                } else {
                    clearInterval(scrollInterval);
                }
            }, 15);
        };

        window.addEventListener('wheel', handleScroll, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);
}
