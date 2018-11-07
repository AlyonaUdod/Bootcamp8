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


let root = document.querySelector('#root');
console.log(root);

let header = document.createElement('header')
let h1 = document.createElement('h1');
h1.setAttribute("id","title")
h1.textContent = 'Albert Einstein';
header.append(h1);
root.append(header);


let main = document.createElement('main');
main.setAttribute("id","main")
root.append(main);

////////////////////////////////////////////////

let divFirstRow = document.createElement('div');
divFirstRow.setAttribute("id","first-row")
main.append(divFirstRow);

let divQuote = document.createElement('div');
divQuote.setAttribute("id","quote")
main.append(divQuote);

let divTimeline = document.createElement('div');
divTimeline.setAttribute("id","timeline")
main.append(divTimeline);

let divLink= document.createElement('div');
divLink.setAttribute("id","link")
main.append(divLink);


///////////////////////////////////////////////

let divImgDiv = document.createElement('div');
divImgDiv.setAttribute("id","img-div")
divFirstRow.append(divImgDiv);

let divTributeInfo = document.createElement('div');
divTributeInfo.setAttribute("id","tribute-info")
divFirstRow.append(divTributeInfo);



let pTributeInfo = document.createElement('p');
pTributeInfo.textContent = " was a German-born theoretical physicist. He developed the theory of relativity, one of the two pillars of modern physics. Einstein's work is also known for its influence on the philosophy of science. Einstein is best known in popular culture for his mass-energy equivalence formula. He received the 1921 Nobel Prize in Physics for his services to theoretical physics, and especially for his discovery of the law of the photoelectric effect, a pivotal step in the evolution of quantum theory."
divTributeInfo.append(pTributeInfo);

let strongTributeInfo = document.createElement('strong');
strongTributeInfo.textContent = "Albert Einstein";
pTributeInfo.prepend(strongTributeInfo);

let figure = document.createElement('figure');
divImgDiv.append(figure);

let img = document.createElement('img');
img.setAttribute("id","image");
img.setAttribute("src","http://jonivainio-kaila.fi/freecodecamp/tribute/assets/img/einstein-mobile.jpg");
img.setAttribute("alt","Profile picture of Albert Einstein.");
figure.append(img);

let figcaptionImgCaption = document.createElement('figcaption');
figcaptionImgCaption.setAttribute('id', 'img-caption')
figcaptionImgCaption.textContent = 'Profile picture of Albert Einstein'
figure.append(figcaptionImgCaption);

////////////////////////////////////////////////////////

let blockquoteQuate = document.createElement('blockquote')
blockquoteQuate.textContent = '"Anyone who has never made a mistake has never tried anything new"';
divQuote.append(blockquoteQuate);

////////////////////////////////////////////////////////

let h2Timeline = document.createElement('h2');
h2Timeline.textContent = "Timeline of Albert Einstein's life";
divTimeline.append(h2Timeline)

for (let el of sectionArr) {
    let section = document.createElement('section');
    divTimeline.append(section)

    let divMain = document.createElement('div');
    divMain.classList.add('fa', el.classes);
    section.append(divMain);

    let h3 = document.createElement('h3');
    h3.textContent = el.title;
    section.append(h3);
        
    let divYear = document.createElement('div');
    divYear.classList.add('year');
    divYear.textContent = el.sectionYear;
    h3.prepend(divYear);

    let pTimeline = document.createElement('p');
    pTimeline.textContent = el.text;
    section.append(pTimeline)
    }

////////////////////////////

let aDivLink = document.createElement('a');
aDivLink.setAttribute('id', 'tribute-link');
aDivLink.setAttribute('href', 'http://www.shmoop.com/albert-einstein/timeline.html');
aDivLink.setAttribute('target', '_blank');
aDivLink.textContent = 'Full timeline at Shmoop!';
divLink.append(aDivLink);

///////////////////////////

let footer = document.createElement('footer');
root.append(footer);

let divFooter = document.createElement('div');
divFooter.setAttribute('id', 'icons');
footer.append(divFooter);

let aFooter = document.createElement('a');
aFooter.setAttribute('href', 'https://www.linkedin.com/in/joni-vainio-kaila-924726143/');
aFooter.setAttribute('target', '_blank');
aFooter.classList.add('fa', 'fa-linkedin');
// aFooter.classList.add('fa-linkedin');
divFooter.append(aFooter);

let iFooter = document.createElement('i');
iFooter.classList.add("fa", "fa-free-code-camp");
// pFooter.append(iFooter);

let pFooter = document.createElement('p');
pFooter.setAttribute('id', 'copyright');
pFooter.innerHTML = `Tribute page project for <i class="fa fa-free-code-camp"></i> by Joni Vainio-Kaila`;

footer.append(pFooter);