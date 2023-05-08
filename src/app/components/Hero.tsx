import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="heropic">
          <Image src="/hero.svg" width={300} height={200} alt="hero" />
        </div>
        <div className="herodesc">
          <div>Hello Simran</div>
          <div className="smalltext">
            Get free delivery every Rs 500 purchase
          </div>
          <div className="buttonStyle">
            <button className="learnmore">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
