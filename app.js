const correctAnswers = ['A', 'B', 'B', 'A', 'B', 'B', 'A', 'B'];

const form = document.querySelector('.quiz-form');
const intro = document.querySelector('.intro');
const span = document.querySelector('span');
const result = document.querySelector('.result');
// console.log(form);

form.addEventListener('submit', e => {
	let score = 0;
	e.preventDefault();
	const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value,
						 form.q7.value, form.q8.value];

	userAnswers.forEach((answer, index) => {
		if (answer == correctAnswers[index])
			score += 12.5;
	});

	score = Math.ceil(score);
	scrollTo(0, 0);
	// console.log(score);
	result.classList.remove('d-none');


	// Simple animation for score
	let curr = 0;
	const timer = setInterval(() => {
		span.textContent = `${curr}%`;
		if (curr == score)
			clearInterval(timer);
		curr++;
	}, 5);
});

