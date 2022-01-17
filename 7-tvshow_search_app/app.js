const form = document.querySelector('#searchForm');


const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchTerm = form.elements[0].value;
    // console.dir(form);
    const config = { params: {q: searchTerm} }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    // const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    // console.log(res.data[0].show.image.medium);
    makeImages(res.data);
    form.elements[0].value = '';
})