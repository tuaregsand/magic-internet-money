import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="hero" className="section">
        <div className="hero-content">
          <div className="social-media-top">
            <a href="https://www.dextools.io" target="_blank" rel="noopener noreferrer" aria-label="Dextools">
              <Image src="/detools.png" alt="Dextools" width={48} height={48} className="social-icon" />
            </a>
            <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer" aria-label="Dexscreener">
              <Image src="/descreener.png" alt="Dexscreener" width={48} height={48} className="social-icon" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">
              <Image src="/X.png" alt="X" width={48} height={48} className="social-icon" />
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <Image src="/telegram.png" alt="Telegram" width={48} height={48} className="social-icon" />
            </a>
          </div>
          <div className="title-container">
            <Image src="/logo text.png" alt="Magic Internet Money" width={700} height={200} className="logo" priority />
          </div>
          <div className="wizard-scene">
            <Image src="/main page wizard.webp" alt="Wizard" width={350} height={500} className="wizard" />
            <Image src="/main page books.webp" alt="Books" width={1920} height={1080} className="books" />
            <Image src="/main page yellow book.webp" alt="Yellow Book" width={220} height={220} className="yellow-book" />
            <Image src="/main page purple book.webp" alt="Purple Book" width={280} height={280} className="purple-book" />
            <div className="magic-ball"></div>
            <div className="table-container">
              <Image src="/table.webp" alt="Table" width={1200} height={300} className="table" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="about-frame">
          <Image src="/About frame w bg.png" alt="About Frame" width={1920} height={1080} className="about-bg" priority />
          <div className="about-content">
            <div className="about-left-content" style={{textAlign: 'center'}}>
              <h2>ABOUT</h2>
              <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in malesuada nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce euismod, velit vel bibendum commodo.</p>
            </div>
            <div className="about-right-content" style={{display: 'flex', justifyContent: 'flex-end', position: 'relative', right: '-2%', top: '-35px'}}>
              <Image src="/spell.webp" alt="Wizard Spell" width={500} height={500} className="spell-wizard" style={{transform: 'translateX(20%)'}} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Money Line positioned with precise control */}
      <div className="divider-wrapper">
        <div className="money-line-container">
          {/* Money line images are handled via CSS */}
        </div>
      </div>
      
      {/* Tokenomics Section */}
      <section id="tokenomics" className="section">
        <div className="tokenomics-bg">
          <Image src="/tokenomics bg.png" alt="Tokenomics Background" width={1920} height={1080} className="tokenomics-background" priority />
          <div className="tokenomics-content-wrapper">
            <h2 className="tokenomics-title">TOKENOMICS</h2>
            <div className="tokenomics-content">
              <div className="tokenomics-left">
                <p>Magic Internet Money features a total supply of 1,000,000,000 tokens. With 40% allocated to liquidity, 30% for community rewards, and 20% for marketing and development, our tokenomics structure ensures long-term stability while rewarding holders.</p>
              </div>
              <div className="tokenomics-center">
                <div className="cauldron-container">
                  <Image src="/pot 2.webp" alt="Cauldron" width={700} height={700} className="cauldron" priority />
                </div>
              </div>
              <div className="tokenomics-right">
                <p>Taxes are set at 1% buy and 1% sell, with revenue directed to marketing to fuel growth and community initiatives. The contract is renounced with LP locked for 3 months, ensuring maximum security and trust for all investors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Meme Section with Line Background */}
      <section id="meme" className="section">
        <div className="meme-background">
          <Image src="/line_memes.png" alt="Meme Section Background" width={1920} height={1080} className="meme-bg-img" priority />
          <div className="meme-container">
            <div className="meme-scroll-container">
              <div className="meme-scroll-track">
                {/* First set of memes */}
                <div className="meme-item">
                  <Image src="/Content_1.jpg" alt="Magic Internet Money Meme" width={350} height={350} className="meme-image" />
                </div>
                <div className="meme-item">
                  <Image src="/IMG_4372 3.PNG" alt="Magic Internet Money Meme" width={350} height={350} className="meme-image" />
                </div>
                <div className="meme-item">
                  <Image src="/IMG_4374 3.PNG" alt="Magic Internet Money Meme" width={350} height={350} className="meme-image" />
                </div>
                <div className="meme-item">
                  <Image src="/IMG_4375 2.PNG" alt="Magic Internet Money Meme" width={350} height={350} className="meme-image" />
                </div>
                <div className="meme-item">
                  <Image src="/IMG_4376 2.png" alt="Magic Internet Money Meme" width={350} height={350} className="meme-image" />
                </div>
                <div className="meme-item">
                  <Image src="/Content_1.jpg" alt="Magic Internet Money Meme" width={350} height={350} className="meme-image" />
                </div>
                <div className="meme-item">
                  <Image src="/IMG_4372 3.PNG" alt="Magic Internet Money Meme" width={350} height={350} className="meme-image" />
                </div>

                {/* Duplicate exact set for seamless infinite scrolling */}
                <div className="meme-item">
                  <Image src="/Content_1.jpg" alt="Magic Internet Money Meme" width={350} height={350} className="meme-image" />
                </div>
                <div className="meme-item">
                  <Image src="/IMG_4372 3.PNG" alt="Magic Internet Money Meme" width={350} height={350} className="meme-image" />
                </div>
                <div className="meme-item">
                  <Image src="/IMG_4374 3.PNG" alt="Magic Internet Money Meme" width={350} height={350} className="meme-image" />
                </div>
                <div className="meme-item">
                  <Image src="/IMG_4375 2.PNG" alt="Magic Internet Money Meme" width={350} height={350} className="meme-image" />
                </div>
                <div className="meme-item">
                  <Image src="/IMG_4376 2.png" alt="Magic Internet Money Meme" width={350} height={350} className="meme-image" />
                </div>
                <div className="meme-item">
                  <Image src="/Content_1.jpg" alt="Magic Internet Money Meme" width={350} height={350} className="meme-image" />
                </div>
                <div className="meme-item">
                  <Image src="/IMG_4372 3.PNG" alt="Magic Internet Money Meme" width={350} height={350} className="meme-image" />
                </div>
                
                {/* Add a third set for extra smoothness */}
                <div className="meme-item">
                  <Image src="/Content_1.jpg" alt="Magic Internet Money Meme" width={350} height={350} className="meme-image" />
                </div>
                <div className="meme-item">
                  <Image src="/IMG_4372 3.PNG" alt="Magic Internet Money Meme" width={350} height={350} className="meme-image" />
                </div>
                <div className="meme-item">
                  <Image src="/IMG_4374 3.PNG" alt="Magic Internet Money Meme" width={350} height={350} className="meme-image" />
                </div>
                <div className="meme-item">
                  <Image src="/IMG_4375 2.PNG" alt="Magic Internet Money Meme" width={350} height={350} className="meme-image" />
                </div>
                <div className="meme-item">
                  <Image src="/IMG_4376 2.png" alt="Magic Internet Money Meme" width={350} height={350} className="meme-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Socials Section */}
      <section id="socials" className="section">
        {/* Background image is set via CSS */}
        <div className="socials-container">
          <div className="socials-content">
            <div className="socials-wizard">
              <Image src="/hat.webp" alt="Wizard Hat" width={300} height={300} className="wizard-character" />
            </div>
            <div className="socials-text">
              <h2 className="socials-title">SOCIALS</h2>
              <p className="socials-description">Join our community and stay updated with the latest news, announcements, and magical events across our social media channels and trading platforms.</p>
            </div>
          </div>
        </div>
        
        {/* Books at the bottom of the section */}
        <div className="books-footer">
          <Image 
            src="/books footer.png" 
            alt="Books" 
            width={1919} 
            height={738} 
            className="books-image" 
            priority 
            style={{objectFit: 'contain', objectPosition: 'bottom', width: '100%'}} 
          />
          
          {/* Social icons precisely positioned on the book spines */}
          <div className="book-social-icons">
            {/* Icons on the purple book spine */}
            <div className="purple-book-icons">
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <Image 
                  src="/telegram footer.png" 
                  alt="Telegram" 
                  width={100} 
                  height={100} 
                  style={{width: '100px', height: '100px'}}
                  priority
                />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">
                <Image 
                  src="/x footer.png" 
                  alt="X" 
                  width={100} 
                  height={100} 
                  style={{width: '100px', height: '100px'}}
                  priority
                />
              </a>
              <a href="https://www.dextools.io" target="_blank" rel="noopener noreferrer" aria-label="Dextools">
                <Image 
                  src="/dextools footer.png" 
                  alt="Dextools" 
                  width={100} 
                  height={100} 
                  style={{width: '100px', height: '100px'}}
                  priority
                />
              </a>
              <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer" aria-label="Dexscreener">
                <Image 
                  src="/dexscreener footer.png" 
                  alt="Dexscreener" 
                  width={100} 
                  height={100} 
                  style={{width: '100px', height: '100px'}}
                  priority
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
