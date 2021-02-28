import React from 'react';

const NewsLetter = () => {
  function clickHandler(e) {
      alert("Thank you for subscribing.");
    e.preventDefault();
  }

    return (
        <div id="newsletter">
            <h2>Subscribe to our newsletter</h2>
            <p>Follow our story and get the latest promotional <br/> news about our products and events.</p>
          <form >
            <input type="email" placeholder="Your email address" required/>
            <input type="submit" value="Subscribe" onClick={clickHandler}/>
          </form>
        </div>
    );
};

export default NewsLetter;
