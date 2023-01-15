import { useEffect, useRef, useState } from 'react'
import { SlideDotsStyle, SlideDotStyle, SliderStyle, SlideshowStyle, SlideStyle } from './SlideStyle';
import fpv from '../../assets/img/slideshow/fpv.jpg'
import accesorios from '../../assets/img/slideshow/accesorios.jpg'
import img3 from '../../assets/img/slideshow/img3.jpg'
import image from '../../assets/img/slideshow/image.jpg'


const img = [image, fpv, accesorios];
const delay = 2500;

export const Slideshow = () => {

    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === img.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <SlideshowStyle>
            <SliderStyle
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {img.map((src, index) => (
                    <SlideStyle
                        key={index}
                        style={{ backgroundImage: `url("${src}")` }}
                    ></SlideStyle>
                ))}
            </SliderStyle>
            <SlideDotsStyle>
                {img.map((_, idx) => (
                    <SlideDotStyle
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></SlideDotStyle>
                ))}
            </SlideDotsStyle>
        </SlideshowStyle>
    )
}
