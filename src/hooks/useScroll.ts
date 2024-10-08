import { useCallback, useEffect, useState } from "react"

export const useScroll = (threshold: number) => {
    const [scrolled, setScrolled] = useState(false);

    const onScroll = useCallback(
        () => { setScrolled(scrollY > threshold) },
        [threshold],
    )

    useEffect(() => {
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll);
    }, [onScroll])

    return scrolled;
}
