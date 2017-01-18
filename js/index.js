;(function(window, undefined)
{
	let $search = document.querySelector("#search")
	let letters = []

	$search.addEventListener("keydown", function(e)
	{
		e.preventDefault()

		let char = String.fromCharCode(e.keyCode).toLowerCase()

		let r = $search.getBoundingClientRect()
		let s = window.getComputedStyle($search)

		let x = r.left + parseInt(s.paddingLeft, 10)
		let y = r.top + parseInt(s.paddingTop, 10)

		let span = document.createElement("span")

		span.innerHTML = char
		span.className = "letter"
		span.style.left = x + "px"
		span.style.top = y + "px"

		document.body.appendChild(span)

		letters.push([span,x,y])
	})

	window.setInterval(function()
	{
		for(let i = 0, l = letters.length; i < l; i++)
		{
			let l = letters[i]

			l[1] += Math.sin(l[2]*.1)*10+5
			l[2] += 5

			l[0].style.left  = l[1] + "px"
			l[0].style.top = l[2] + "px"

			if (l[2] > window.innerHeight)
			{
				l[0].remove()
				letters.splice(i,1)
				return
			}
		}
	}, 1000/30)

	$search.focus()
}(this))