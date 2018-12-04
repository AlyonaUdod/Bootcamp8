import React from 'react';
import './Description.css'

const Description = () => {
    return (
            <div id="first-row">
                <div id="img-div">
                    <figure>
                        <img id="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/640px-Albert_Einstein_Head.jpg" alt="Profile of Albert Einstein."/>
                        <figcaption id="img-caption">Profile picture of Albert Einstein</figcaption>
                    </figure>
                </div>
                <div id="tribute-info">
                    <p><strong>Albert Einstein</strong> was a German-born theoretical physicist. He developed the theory of relativity, one of the two pillars of modern physics. Einstein's work is also known for its influence on the philosophy of science. Einstein is
                    best known in popular culture for his mass-energy equivalence formula. He received the 1921 Nobel Prize in Physics for his services to theoretical physics, and especially for his discovery of the law of the photoelectric
                    effect, a pivotal step in the evolution of quantum theory.</p>
                </div>
            </div>
    );
};

export default Description;