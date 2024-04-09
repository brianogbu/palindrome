document.getElementById('checkifpalindrome').onclick = function () {
	const input = document.getElementById('input').value
	let j = input
	let reversed = ''
	for (let i = j.length - 1; i >= 0; i--) {
		reversed += j[i]
	}

	checkIfPalindrome(j, reversed)
}

function checkIfPalindrome(sentence, reversed) {
	const newSentence = sentence.trim()

	if (newSentence === reversed && newSentence) {
		return (document.getElementById('ans').innerHTML = `TRUE`)
	} else {
		return (document.getElementById('ans').innerHTML = `FALSE`)
	}
}
