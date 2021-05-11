import { useEffect } from "react";
import Prism from "prismjs";

function Carousel(){
    useEffect(() => {
        Prism.highlightAll()
    }, []);

    return<div className="carouselTemplate">
        <h1>Carousel</h1>
        <p>A slideshow component for cycling through elements—images or slides of text—like a carousel.</p>
        <h2>Example</h2>
        <p>The carousel is a slideshow for cycling through a series of content, built with CSS. It includes support for previous/next controls and indicators. Does not support smoothnes</p>
        <div className="carouselExample">
            <div id="slide1" className="slide">
                <a href="#slide4" className="prevSlide"><div className="line1"/><div className="line2"/></a>
                1
                <a href="#slide2" className="nextSlide"><div className="line1"/><div className="line2"/></a>
            </div>
            <div id="slide2" className="slide">
                <a href="#slide1" className="prevSlide"><div className="line1"/><div className="line2"/></a>
                2
                <a href="#slide3" className="nextSlide"><div className="line1"/><div className="line2"/></a>
            </div>
            <div id="slide3" className="slide">
                <a href="#slide2" className="prevSlide"><div className="line1"/><div className="line2"/></a>
                3
                <a href="#slide4" className="nextSlide"><div className="line1"/><div className="line2"/></a>
            </div>
            <div id="slide4" className="slide">
                <a href="#slide3" className="prevSlide"><div className="line1"/><div className="line2"/></a>
                4
                <a href="#slide1" className="nextSlide"><div className="line1"/><div className="line2"/></a>
            </div>
        </div>
        <pre>
            <code className="language-html">
{`<div id="slide1" class="slide">
    <a href="#slide4" class="prevSlide"><div class="line1"/><div class="line2"/></a>
    1
    <a href="#slide2" class="nextSlide"><div class="line1"/><div class="line2"/></a>
</div>
<div id="slide2" class="slide">
    <a href="#slide1" class="prevSlide"><div class="line1"/><div class="line2"/></a>
    2
    <a href="#slide3" class="nextSlide"><div class="line1"/><div class="line2"/></a>
</div>
<div id="slide3" class="slide">
    <a href="#slide2" class="prevSlide"><div class="line1"/><div class="line2"/></a>
    3
    <a href="#slide4" class="nextSlide"><div class="line1"/><div class="line2"/></a>
</div>
<div id="slide4" class="slide">
    <a href="#slide3" class="prevSlide"><div class="line1"/><div class="line2"/></a>
    4
    <a href="#slide1" class="nextSlide"><div class="line1"/><div class="line2"/></a>
</div>`}
        </code>
        </pre>
        <pre>
            <code className="language-css">
{`.carouselExample {
	 width: 500px;
	 margin: 0 auto;
	 display: flex;
	 flex-direction: row;
	 overflow: hidden;
}
 .carouselExample .slide {
	 flex: 0 0 500px;
	 width: 500px;
	 height: 350px;
	 background-color: white;
	 display: inline-flex;
	 align-items: center;
	 justify-content: space-between;
	 color: purple;
	 font-size: 3rem;
}
 .carouselExample .slide .prevSlide {
	 cursor: pointer;
}
 .carouselExample .slide .prevSlide .line1 {
	 cursor: pointer;
	 width: 20px;
	 height: 5px;
	 background-color: purple;
	 transform: translateY(-2.8px) rotate(-45deg);
}
 .carouselExample .slide .prevSlide .line2 {
	 cursor: pointer;
	 width: 20px;
	 height: 5px;
	 background-color: purple;
	 transform: translateY(2.8px) rotate(45deg);
}
 .carouselExample .slide .nextSlide {
	 cursor: pointer;
}
 .carouselExample .slide .nextSlide .line1 {
	 cursor: pointer;
	 width: 20px;
	 height: 5px;
	 background-color: purple;
	 transform: translateY(-2.8px) rotate(45deg);
}
 .carouselExample .slide .nextSlide .line2 {
	 cursor: pointer;
	 width: 20px;
	 height: 5px;
	 background-color: purple;
	 transform: translateY(2.8px) rotate(-45deg);
}
 .carouselExample #slide1 {
	 background-color: #adbabd;
}
 .carouselExample #slide2 {
	 background-color: #91b7c7;
}
 .carouselExample #slide3 {
	 background-color: #6eb4d1;
}
 .carouselExample #slide4 {
	 background-color: #6cbeed;
}
 `}
      </code>
        </pre>
    </div>
};

export default Carousel;