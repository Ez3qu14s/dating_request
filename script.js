const title = document.querySelector(".title");
const request = document.querySelector(".request");
const img = document.querySelector("img");
const loadingDiv = document.querySelector(".loading");

const scheduleButton = document.querySelector(".schedule-button");
const accept = scheduleButton.querySelector(".accept");
const denied = scheduleButton.querySelector(".denied");

const loading = true;
const hearts = document.querySelectorAll(".heart");

const widthPage = window.innerWidth;
const heightPage = window.innerHeight;

const handleMouseover = (event) => {
	let touch;
	if (event.type === "touch") {
		touch = event.touches[0];
	}

	const maxWidth = widthPage - denied.offsetWidth;
	const maxHeight = heightPage - denied.offsetHeight;

	const randomWidthPosition = Math.min(
		Math.max(0, Math.floor(Math.random() * widthPage) - 20),
		maxWidth,
	);
	const randomHeightPosition = Math.min(
		Math.max(0, Math.floor(Math.random() * heightPage) - 20),
		maxHeight,
	);

	denied.style.position = "absolute";
	denied.style.left = `${randomWidthPosition}px`;
	denied.style.top = `${randomHeightPosition}px`;
};

accept.addEventListener("click", (event) => {
	img.setAttribute(
		"src",
		"https://tenor.com/pt-BR/view/milk-and-mocha-gif-9884906742697754096.gif",
	);
	title.innerHTML = "Namorados!!!";
	request.innerHTML =
		"A partir de agora irei cuidar de você, e prometo amar e te fazer feliz <3.";

	scheduleButton.style.display = "none";
});

denied.addEventListener("mouseover", handleMouseover);

denied.addEventListener("touchstart", handleMouseover);

// const animationHearts = () => {
// 	let step = 0;
// 	let heart = 0;
// 	setInterval(() => {
// 		step++;
// 		hearts[heart].style.opacity = 1;
// 		console.log(heart);

// 		if (heart == hearts.length - 1) {
// 			heart = 0;
// 			hearts[0].style.opacity = 0;
// 			hearts[1].style.opacity = 0;
// 			hearts[2].style.opacity = 0;
// 		}

// 		heart++;
// 	}, 1000);
// };

// animationHearts();
