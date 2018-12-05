import React from 'react';
import './Timeline.css'

const Timeline = () => {
    let sectionArr = [{
        classes: 'fa-mars',
        sectionYear: 1879,
        title: 'Albert Einstein born',
        text: 'Albert Einstein is born in Ulm, Germany, the son of Hermann Einstein, a German Jewish featherbed salesman, and his wife Pauline.',
    },
    {
        classes:'fa-magnet',
        sectionYear: 1884,
        title: 'Mystery of Magnetism',
        text: "At the age of five, Albert Einstein becomes fascinated by his father's pocket compass, intrigued by invisible forces that cause the needle always to point north. Later in life, Einstein will look back at this moment as the genesis of his interest in science.",
    },
    {
        classes: 'fa-plane',
        sectionYear: 1894,
        title: 'Move to Italy',
        text: 'Struggling financially, the Einstein family moves from Germany to Italy in search of better work. Albert, aged fifteen, stays behind in Munich to finish his schooling, but soon either quits or is kicked out of his high school and follows his parents to Italy.',
    },
    {
        classes: 'fa-ban',
        sectionYear: 1895,
        title: 'Boarding School in Aarau',
        text: 'Albert Einstein attempts to get out of his last year of high school by taking an entrance exam to ETH, the Swiss Polytechnic University in Zurich. He fails the test, forcing him to attend one final year of high school in the small town of Aarau, Switzerland, instead.',
    },
    {
        classes: 'fa-university',
        sectionYear: 1896,
        title: 'Einstein at ETH',
        text: 'Albert Einstein graduates from high school and begins attending ETH, the prestigious Swiss Polytechnic University in Zurich.',
    },
    {
        classes:'fa-graduation-cap',
        sectionYear: 1900,
        title: 'College Graduation',
        text: 'Albert Einstein graduates from ETH with a degree in physics. He tries to find a teaching job, but is unable to obtain work.',
    },
    {
        classes:'fa-briefcase',
        sectionYear: 1902,
        title: 'Swiss Patent Office',
        text: 'Unable to find any work as a teacher or academic, Albert Einstein takes a job as a clerk at the Swiss Patent Office.',
    },
    {
        classes:'fa-files-o',
        sectionYear: 1905,
        title: 'Annus Mirabilis',
        text: 'Over the course of a year that he will later describe as his "Annus Mirabilis" - his miraculous year - Albert Einstein publishes four major theoretical papers in the prestigious German academic journal Annalen Der Physik. The four papers include a groundbreaking new interpretation of the photoelectric effect as well as the first published exploration of the theory of Special Relativity and the first formulation of the famous equation E = mc2',
    },
    {
        classes:'fa-file-o',
        sectionYear: 1915,
        title: 'General Theory of Relativity',
        text: 'Einstein completes his General Theory of Relativity.',
    },
    {
        classes:'fa-thumbs-up',
        sectionYear: 1919,
        title: 'Eclipse Proves Theory of Relativity',
        text: "A solar eclipse provides dramatic observable evidence that Einstein's General Theory of Relativity is correct. Einstein suddenly becomes a worldwide celebrity.",
    },
    {
        classes:'fa-trophy',
        sectionYear: 1921,
        title: 'Nobel Prize',
        text: 'Albert Einstein wins the Nobel Prize in Physics for his work on the photoelectric effect, first published in 1905.',
    },
    {
        classes:'fa-envelope',
        sectionYear: 1939,
        title: 'Letter to President Roosevelt',
        text: "Fearing that Nazi scientists might win the race to develop the world's first atomic bombs, Albert Einstein writes a letter to President Franklin D. Roosevelt, urging him to launch an American program of nuclear research.",
    },
    {
        classes:'fa-death',
        sectionYear: 1955,
        title: 'Death of Albert Einstein',
        text: 'Albert Einstein dies of heart failure at the age of 76.',
    }
]
    let result = sectionArr.map(el=> 
        <section key={el.sectionYear}>
            <div className={`fa ${el.classes}`}></div>
            <h3><div className="year">{el.sectionYear}</div>{el.title}</h3>
            <p>{el.text}</p>
       </section>
        )
    return (
        <div id="timeline">
            <h2>Timeline of Albert Einstein's life</h2>
            {result}
        </div>
    );
};

export default Timeline;