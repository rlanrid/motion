import { useState, useEffect } from "react";

const useMouse = (ref) => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    const updateMouse = e => {
        if (ref.current) {
            const { left, top } = ref.current.getBoundingClientRect();
            const x = e.clientX - left;
            const y = e.clientY - top;
            setMousePosition({ x, y });
        }
    };

    useEffect(() => {
        document.addEventListener("mousemove", updateMouse);

        return () => document.removeEventListener("mousemove", updateMouse);
    }, [ref]);

    return mousePosition;
};

export default useMouse;