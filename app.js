const loader = document.querySelector(".loader");
const logo = document.querySelector(".logo");
const logoGif = document.querySelector(".logo-gif");
const logoAmin = "position:relative;"  + " " + "height: 800px;" + " " + "opacity: 0;" + " " + "left: 0px;";
const logoPos = "opacity:1;" + " " + "position:relative;" + " " + "left: 0px;";

const timeOut = setTimeout(removeGif, 3800);

function removeGif() {
	logoGif.remove();
	logo.setAttribute(
		"style", `${logoPos}`
	);
}

const remLogo = setTimeout(removeLogo, 4500);

function addLogo() {
	logo.setAttribute(
		"style", `${logoPos}`
	);
}

function removeLogo() {
	logo.setAttribute(
		"style", `${logoAmin}`
	);
}
