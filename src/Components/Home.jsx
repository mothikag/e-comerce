import React from "react"


const Home = () =>{
    return(
        <>
        
        <div className="home-container">
                {/* Hero Section */}
                <section className="hero-section">
                    <h1>Welcome to ShopEasy</h1>
                    <p>Your one-stop shop for all your needs</p>
                    <a href="/product" className="shop-now-btn">Shop Now</a>
                </section>


                {/* Categories */}
                <section className="categories">
                    
                    <h2>SHOP BY CATEGORIES</h2>
                    <div className="category-grid">
                        <div className="category-card">Electronics</div>
                        <div className="category-card">Fashion</div>
                        <div className="category-card">Home & Kitchen</div>
                        <div className="category-card">Beauty & Health</div>
                    </div>
                </section>

                {/* Customer Testimonials */}
                <section className="testimonials">
                    <h2>What Our Customers Say</h2>
                    <div className="testimonial-grid">
                        <div className="testimonial-card">
                            <p>"Great products and fantastic customer service!"</p>
                            
                        </div>
                        <div className="testimonial-card">
                            <p>"Quick delivery and top-notch quality. Highly recommend!"</p>
                            
                        </div>
                        <div className="testimonial-card">
                            <p>"ShopEasy is my go-to for online shopping. Love it!"</p>
                            
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="footer">
                    <div className="footer-content">
                        <div className="footer-section about">
                            <h3>About Us</h3>
                            <p>
                                ShopEasy is dedicated to providing the best online shopping experience. We offer a wide range of products to meet all your needs.
                            </p>
                        </div>
                        <div className="footer-section contact">
                            <h3>Contact Us</h3>
                            <p>Email: support@shopeasy.com</p>
                            <p>Phone: 876756479</p>
                        </div>
                        <div className="footer-section social">
                            <h3>Follow Us</h3>
                            <p>Facebook | Twitter | Instagram</p>
                        </div>
                    </div>
                    {/* <div className="footer-bottom">
                        &copy; 2024 ShopEasy | All rights reserved
                    </div> */}
                </footer>
            </div>
        </>
    )
}
export default Home