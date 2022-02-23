const loadDog = () => {
    fetch('https://api.thedogapi.com/v1/breeds')
        .then(res => res.json())
        .then(data => displayDog(data))
}

const displayDog = (dogList) => {
    // console.log(dogList);
    const main = document.getElementById('main');
    const first10Data = dogList.slice(0, 10);
    // console.log(first10Data);

    // console.log(div)
    for (const dog of first10Data) {
        console.log(dog.image.url)
        const div = document.createElement('div');
        div.classList.add('col-lg-4')
        div.innerHTML = `
        <h2>${dog.name}</h2>
        <p>${dog.temperament}</p>
        <h4>${dog.weight.imperial}</h4>
        <img src="${dog.image.url}" width="400px" height="250px" />
        
        `;
        main.appendChild(div);
    }
}