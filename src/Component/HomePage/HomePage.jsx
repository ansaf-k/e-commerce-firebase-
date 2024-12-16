import Banner from "../Banner";
import Navbar from "../Navbar";
import ProductCard from "../ProductCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

const HomePage = () => {
    const productCardRef = useRef(null);
    const [navbarColor, setNavbarColor] = useState("bg-transparent");
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        if (productCardRef.current) {
            ScrollTrigger.create({
                trigger: productCardRef.current,
                start: "top center",
                end: "bottom center",
                onEnter: () => setNavbarColor("bg-white"),
                onLeave: () => setNavbarColor("bg-transparent"),
                onEnterBack: () => setNavbarColor("bg-white"),
                onLeaveBack: () => setNavbarColor("bg-transparent"),
            });
        }
    }, []);

    return (
        <>
            <Navbar bgColor={navbarColor} />
            <Banner />
            <ProductCard ref={productCardRef} />
        </>
    );
};

export default HomePage;
