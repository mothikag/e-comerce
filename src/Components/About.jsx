import React from "react";
import "../App.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <img
          src="https://img.freepik.com/free-vector/pop-art-girl-holding-shopping-bags_88138-217.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1719532800&semt=ais_user"
          alt="About Us"
          className="about-image"
        />
       
        <div className="about-text">
          <h1>About Shopsy</h1>
          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              At Shopsy, our mission is to empower people to discover and purchase the products they love, while providing a platform for sellers to reach a global audience. We strive to create a seamless shopping experience through cutting-edge technology, exceptional customer service, and a diverse range of high-quality products.
            </p>
          </section>
          <section className="about-section">
            <h2>Our History</h2>
            <p>
              Shopsy was founded in [2021] with a vision to revolutionize the online shopping experience. What started as a small startup has quickly grown into a thriving marketplace with millions of users worldwide. Our commitment to innovation and customer satisfaction has driven our growth and success.
            </p>
          </section>
          <section className="about-section">
            <h2>Our Team</h2>
            <p>
              Our team at Shopsy is composed of talented individuals from various backgrounds, all passionate about ecommerce and technology. From our software engineers who build our intuitive platform, to our customer service representatives who ensure a smooth shopping experience, each team member plays a crucial role in our success.
            </p>
          </section>
          <section className="about-section">
            <h2>Why Shop with Us?</h2>
            <ul>
              <li>Wide Selection: With thousands of sellers, Shopsy offers a vast array of products across different categories, ensuring you can find exactly what you're looking for.</li>
              <li>Secure Transactions: We prioritize your security, using advanced encryption and secure payment gateways to protect your personal information.</li>
              <li>Customer Satisfaction: Our dedicated support team is always ready to assist you with any questions or concerns, ensuring a pleasant shopping experience.</li>
              <li>Global Reach: Shopsy connects buyers and sellers from around the world, providing opportunities to discover unique products and reach a broader audience.</li>
            </ul>
          </section>
          <section className="about-section">
            <h2>Contact Us</h2>
            <p>
              We love hearing from our users! If you have any questions, feedback, or inquiries, please feel free to reach out to us at support@shopsy.com or call us at (123) 456-7890. You can also follow us on social media to stay updated on the latest news and promotions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
