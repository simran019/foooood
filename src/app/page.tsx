import Image from "next/image";
import Nav from "./components/Nav";
import CategoryItemsComponent from "./components/CategoryItemsComponent";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="main-screen">
      <Nav />
      <div className="middle-div columns">
        <div className="todaymenu">
          Today&apos;s Menu 😋
          {/* <!-- <Image src="/yummyfoodemoji.png" width="55px" height="55px" /> --> */}
        </div>
        <Hero />
        <CategoryItemsComponent />
      </div>
      <div className="right-div columns">
        <div className="creditcard">
          <Image src="/creditcard2.svg" width={300} height={300} alt="hero" />
        </div>
        <div className="order-menu">Order Menu</div>
        <div className="order">
          <div className="order-item">
            <div>
              <Image
                src="/pizza_1.PNG"
                height={100}
                width={100}
                style={{ borderRadius: 10 }}
                alt="hero"
              />
            </div>
            <div className="flex-row">
              <div>Mushroom Pizza</div>
              <div>
                <span className="orange">X</span> 1
              </div>
            </div>
            <div className="price">
              <span className="orange">&#x20B9; </span> 300
            </div>
          </div>
          <div className="order-item">
            <div>
              <Image
                src="/pizza_1.PNG"
                height={100}
                width={100}
                style={{ borderRadius: 10 }}
                alt="hero"
              />
            </div>
            <div className="flex-row">
              <div>Mushroom Pizza</div>
              <div>
                <span className="orange">X</span> 1
              </div>
            </div>
            <div className="price">
              <span className="orange">&#x20B9; </span> 300
            </div>
          </div>
          <div className="order-item">
            <div>
              <Image
                src="/pizza_1.PNG"
                height={100}
                width={100}
                style={{ borderRadius: 10 }}
                alt="hero"
              />
            </div>
            <div className="flex-row">
              <div>Mushroom Pizza</div>
              <div>
                <span className="orange">X</span> 1
              </div>
            </div>
            <div className="price">
              <span className="orange">&#x20B9; </span> 300
            </div>
          </div>
          <div className="order-item">
            <div>
              <Image
                src="/pizza_1.PNG"
                height={100}
                width={100}
                style={{ borderRadius: 10 }}
                alt="hero"
              />
            </div>
            <div className="flex-row">
              <div>Mushroom Pizza</div>
              <div>
                <span className="orange">X</span> 1
              </div>
            </div>
            <div className="price">
              <span className="orange">&#x20B9; </span> 300
            </div>
          </div>
          <div className="order-item">
            <div>
              <Image
                src="/pizza_1.PNG"
                height={100}
                width={100}
                style={{ borderRadius: 10 }}
                alt="hero"
              />
            </div>
            <div className="flex-row">
              <div>Mushroom Pizza</div>
              <div>
                <span className="orange">X</span> 1
              </div>
            </div>
            <div className="price">
              <span className="orange">&#x20B9; </span> 300
            </div>
          </div>
        </div>

        <div className="checkout">
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}
