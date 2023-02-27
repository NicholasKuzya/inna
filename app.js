const wrapper = document.querySelector('.flex-wrapper') 
const myfunc = (id, url, title) => {
	return `<div class="card">
				<div class="card-header">
					<img src="${url}" alt="изображние поста">
				</div>
				<div class="card-body">
					id поста: ${id}
				</div>
				<div class="ard-footer">
					<h2>${title}</h2>
				</div>
			</div>`
}

fetch('https://jsonplaceholder.typicode.com/photos')
.then(response => response.json())
.then(data => {
	data.forEach(note => {
		wrapper.insertAdjacentHTML('beforeend', myfunc(note.id, note.url, note.title))
	});
})
.catch(err => console.error(err))
.finally(console.log('Завершенно'))