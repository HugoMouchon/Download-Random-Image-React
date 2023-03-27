import { useEffect, useState } from "react"

export default function useScrollPosition() {

    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
        const listener = window.addEventListener("scroll", handleScroll);
    }, []);

    function handleScroll() {
        setIsBottom(
            window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight
        );
    }

    return { isBottom };
}
