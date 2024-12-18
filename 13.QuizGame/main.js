const input = require("prompt-sync")();

const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Rome"],
        answer: 2,
    },
    {
        question: "What is the capital of China?",
        options: ["Beijing", "San Francisco", "Tokyo", "Cairo"],
        answer: 1,
    },
    {
        question: "What is the capital of Russia?",
        options: ["Delhi", "Saint Petersburg", "Moscow", "Astana"],
        answer: 3,
    },
    {
        question: "What is the color of the sky?",
        options: ["Red", "Green", "Yellow", "Blue"],
        answer: 4,
    },
    {
        question: "The name of the best game engine: ",
        options: ["Unreal Engine", "Unity", "Godot", "Crystal"],
        answer: 2,
    },
    {
        question: "Who is the founder of Javascript: ",
        options: ["Brendan Eich", "Guido Van Rossum", "Dennis Ritchie", "Tim Berners-Lee"],
        answer: 1,
    },
];


let score = 0;
console.log("Welcome to the Quiz Game");
for (let i = 0; i < questions.length; i++) {
    console.log(`\n----------Question ${i + 1}----------`);
    for (let j = 0; j < questions[i].options.length; j++) {
        console.log(`${j + 1}) ${questions[i].options[j]}`);
    }
    const userAnswer = parseInt(input(questions[i].question + " ").trim());

    if (userAnswer === questions[i].answer) {
        console.log("Correct!");
        score++;
    } else {
        console.log(`Wrong! The Correct answer was: ${questions[i].options[questions[i].answer - 1]}`);
    }
}


console.log(`\nYou completed the quiz! Your score: ${score}/${questions.length}`);
