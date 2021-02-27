import React from 'react';

const NewsLetter = () => {
    return (
        <div id="newsletter">
            <h2>Subscribe to our newsletter</h2>
            <p>Follow our story and get the latest promotional <br/> news about our products and events.</p>
          <form>
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
    );
};

export default NewsLetter;
