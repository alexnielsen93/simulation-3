import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className = 'App-header'><p className = 'robin'>Gee Willickers, Batman, what is this?</p>
      <p className = 'batman'>It's a header in a fixed position, Robin.  Such skill is impressive</p>
      </header>
      <body className="App-body">
        <section className = 'three-columns'>
          <section className = 'left-column'>
        <h1>Look at this expert use of display: flex!</h1>
        
        </section>
        <section className = 'middle-column'>
        
        <section className = 'video'>
        <iframe width="631" height="473" src="https://www.youtube.com/embed/J---aiyznGQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
        <section className = "fancy-css">
        <div className = 'fancy-text-box'>
        <h1 className = 'fancy-text'>
        Woah, look at this fancy CSS.  So competent!
        </h1>
        <h2 className = 'fancy-text'>Text shadows, AND radial gradients?  Amazing!</h2>
        </div>
        </section>
        <section className = "animation">
        <p>look at this animation!  Give that man a badge!</p>
        </section></section>
        <section className = 'right-column'>
        <h1> 3 columns with their flex-direction as Row.  Wow!</h1>
        <div className = 'wrap-box'>look</div>
        <div className = 'wrap-box'>At</div>
        <div className = 'wrap-box'>Me</div>
        <div className = 'wrap-box'>Wrap</div>
        <div className = 'wrap-box'>These</div>
        <div className = 'wrap-box'>Boxes</div>
        <div className = 'wrap-box'>This</div>
        <div className = 'wrap-box'>is </div>
        <div className = 'wrap-box'> cool</div>
        
        </section></section>

        <footer className = 'rick-foot'>
          <h3 className = 'morty'>Aww, jeeze Rick.  Where are we?</h3>
          <h2 className  ='rick'> I don't know Morty.  It looks like we're in the footer of an obnoxiously bad web page.</h2>
          <h3 className = 'morty'>But what's the point Rick? I mean, couldn't this area just say, "This is a footer"?  This isn't even what a footer is supposed to be. Couldn't this just come across as trying way too hard to be funny?</h3>
          <h2 className  ='rick'>Comedy is subjective, Morty, you ignorant piece of s**t.  *Belch* Don't pretend that you're some kind of comedic genius and you alone know what's funny.</h2>
          <h3 className = 'morty'>But do you think it's funny?</h3>
          <h2 className  ='rick'>That's not the point Morty, it's --</h2>
          <h3 className = 'morty'>Do you?</h3>
          <h2 className  ='rick'>Well, no, not really.  </h2>
        </footer>
      </body>
    </div>
  );
}

export default App;
