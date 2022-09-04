const $links = document.getElementById("links");
const $name = documente.querySelector("h1");

const data = {
	name: "Germán Cavani",
	nickname: "JeffUy",
	description: "...",
	avatar: "...",
	social: [
		{
			name: "linkedin",
			url: "https://linkedin.com/in/german-c-b0b371218/",
			username: "German Cavani",
		},
		{
			name: "instagram",
			url: "https://instagram.com/kwanggae",
			username: "kwanggae",
		},
	],
	links: [
		{
			name: "KwangGae App",
			url: "https://www.kwanggae.com/",
			color: "red",
			emoji: "📖",
		},
		{
			name: "Website",
			url: "https://www.gcavani.com/",
			color: "yellow",
			emoji: "💬",
		},
	],
	footer: "Made with Love on Uruguay",
};

const main = () => {
	let name = document.createTextNode(data?.name);
	let links = data?.links?.map((link) => {
		return `<div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
		<a class="text-sm font-bold text-${link.color}-600 text-center hover:${link.color}-800 cursor-pointer"
			href=${link.url} target="_blank">
			${link.name}
		</a>
		<span>${link.emoji}</span>
	</div>`;
	}).join('');

	let newItem = document.createElement("section");
	newItem.innerHTML = links;
	$links.appendChild(newItem);
	$name.appendChild(name);
};

main()
