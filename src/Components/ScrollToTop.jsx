import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect((pathname) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);
    return null;
    return (
        <div>ScrollToTop</div>
    )
}

export default ScrollToTop