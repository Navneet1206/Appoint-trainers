import React from 'react';

const About: React.FC = () => (
    <main className="about-container">
        <h1>About Us</h1>
        <p>
            Welcome to Appoint Trainers! We are dedicated to connecting you with the best trainers to help you achieve your fitness and wellness goals.
        </p>
        <h2>Our Mission</h2>
        <p>
            Our mission is to make it easy for everyone to find, book, and connect with professional trainers in their area or online.
        </p>
        <h2>Why Choose Us?</h2>
        <ul>
            <li>Verified and experienced trainers</li>
            <li>Easy booking and scheduling</li>
            <li>Personalized training programs</li>
            <li>Supportive community</li>
        </ul>
        <h2>Contact</h2>
        <p>
            Have questions? Reach out to us at <a href="mailto:support@appointtrainers.com">support@appointtrainers.com</a>.
        </p>
    </main>
);

export default About;