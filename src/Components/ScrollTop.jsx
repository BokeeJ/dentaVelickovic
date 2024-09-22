import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from 'framer-motion'

function ScrollTab() {
    const [IsVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }), [];

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div>
            {IsVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className="fixed bottom-8 right-0 z-50">
                    <button
                        className="bg-gray opacity-60 bg-gray-300 text-gray-800 rounded-l-xl  p-2 focus:outline-none"
                        onClick={scrollTop}
                    >
                        <FaArrowUp className="h-6 w-6" />
                    </button>
                </motion.div>
            )}
        </div>
    )
}

export default ScrollTab