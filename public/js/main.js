const movieTitleForm = document.querySelector('form')
const search = document.querySelector('#title')
const outputTitle = document.querySelector('#output-title')
const outputInfo = document.querySelector('#output-info')
const outputDirector = document.querySelector('#output-director')
const outputPlot = document.querySelector('#output-plot')
const outputCast = document.querySelector('#output-cast')
const outputImage = document.querySelector('#output-image')

movieTitleForm.addEventListener('submit', (e) => {
	e.preventDefault()

	const title = search.value
	
	fetch('/rating?title=' + title).then((response) => {
		response.json().then((data) => {
			if (data.error) {
				outputInfo.textContent = data.error
			} else {
				outputTitle.textContent = data.title

				info = 'Rated ' + data.rated + ' | ' + data.genre + ' | IMDB Rating ' + data.imdbRating + '/10'
				outputInfo.textContent = info

				outputDirector.textContent = 'Director: ' + data.director
				outputPlot.textContent = data.plot
				outputImage.src = data.image
			}
		})
	})
})
	