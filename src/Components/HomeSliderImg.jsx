import react from "react";

export default function HomeSliderImg({ src }) {
    return (
        <div className="slider-img">
            <img src={src} alt="imagem" />
        </div>
    );
}