import Image from 'next/image'
import CategoryComponent from './components/Category'

export default function Home() {
  return (

    <div className="main-screen">
      <div className="navigation-bar columns">
        <div className="upper-navigation">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="gray"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="gray"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>
          </div>
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="gray"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
              />
            </svg>
          </div>
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="gray"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="gray"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
              />
            </svg>
          </div>
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="gray"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
              />
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>
        <div className="icon logout">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="gray"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </div>
      </div>
      <div className="middle-div columns">
        <div className="todaymenu">
          Today&apos;s Menu 😋
          {/* <!-- <Image src="/yummyfoodemoji.png" width="55px" height="55px" /> --> */}
        </div>
        <div className="hero-container">
          <div className="hero">
            <div className="heropic">
              <Image src="/hero.svg" width={300} height={200} alt="hero"/>
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
        <div>
          <div className="menu-category">Menu Category</div>
          <div className="cat" id="cat">
           <CategoryComponent/>
            
          </div>
        </div>
        <div className="food-choice" id="food-choice">
          
        </div>
        
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
                style={{borderRadius: 10}}
                alt="hero"
              />
            </div>
            <div className="flex-row">
              <div>Mushroom Pizza</div>
              <div><span className="orange">X</span> 1</div>
            </div>
            <div className="price"><span className="orange">&#x20B9; </span> 300</div>
          </div>
          <div className="order-item">
            <div>
              <Image
                src="/pizza_1.PNG"
                height={100}
                width={100}
                style={{borderRadius: 10}}
                alt="hero"
              />
            </div>
            <div className="flex-row">
              <div>Mushroom Pizza</div>
              <div><span className="orange">X</span> 1</div>
            </div>
            <div className="price"><span className="orange">&#x20B9; </span> 300</div>
          </div>
          <div className="order-item">
            <div>
              <Image
                src="/pizza_1.PNG"
                height={100}
                width={100}
                style={{borderRadius: 10}}
                alt="hero"
              />
            </div>
            <div className="flex-row">
              <div>Mushroom Pizza</div>
              <div><span className="orange">X</span> 1</div>
            </div>
            <div className="price"><span className="orange">&#x20B9; </span> 300</div>
          </div>
          <div className="order-item">
            <div>
              <Image
               src="/pizza_1.PNG"
               height={100}
               width={100}
               style={{borderRadius: 10}}
               alt="hero"
              />
            </div>
            <div className="flex-row">
              <div>Mushroom Pizza</div>
              <div><span className="orange">X</span> 1</div>
            </div>
            <div className="price"><span className="orange">&#x20B9; </span> 300</div>
          </div>
          <div className="order-item">
            <div>
              <Image
               src="/pizza_1.PNG"
               height={100}
               width={100}
               style={{borderRadius: 10}}
               alt="hero"
              />
            </div>
            <div className="flex-row">
              <div>Mushroom Pizza</div>
              <div><span className="orange">X</span> 1</div>
            </div>
            <div className="price"><span className="orange">&#x20B9; </span> 300</div>
          </div>
        </div>

        <div className="checkout">
          <button>Checkout</button>
        </div>
      </div>
    </div>
  )
}
