/**
 *
 * @param {string} textContent
 * @param {string} className
 * @returns {HTMLButtonElement}
 */

function generateButton(textContent, className) {
	const btn = document.createElement("button");
	btn.className = className;
	btn.textContent = textContent;
	return btn;
}

export default generateButton;
