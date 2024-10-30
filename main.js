function click1(event) {
	event.preventDefault()
	if (document.getElementById('good').value === '') {
		alert('Вы не выбрали товар')
		return
	}

	let good__price = parseInt(document.getElementById('good').value)

	let good__amount = parseInt(document.getElementById('amount').value)

	let res = document.getElementById('result')
	res.textContent = String('Стоимость равна ' + good__price * good__amount)
}

let b = document.getElementById('button')

b.addEventListener('click', click1)



