const main = document.getElementById('main');
const searchButton = () => {
    console.log('clicked..')
    const input = document.getElementById('input-value');
    const inputValue = parseInt(input.value);
    const error = document.getElementById('error');
    if (isNaN(inputValue) || inputValue == '') {
        // isNaN check number of string or others
        // alert('Please enter a number')
        error.innerText = 'give a number';
        input.value = '';

        main.innerHTML = '';
    } else if (inputValue <= 0) {
        error.innerText = 'Please a positive number';
        input.value = '';
        // remove previous value if i enter wrong value
        main.innerHTML = '';
    } else {
        main.innerHTML = '';
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
            .then(res => res.json())
            .then(data => cardsDisplay(data.cards))

        // clear input field
        input.value = '';
        // after right input hide error message
        error.innerHTML = '';

    }
}

const cardsDisplay = cards => {
    // console.log(cards);

    for (const card of cards) {
        console.log(card)
        const div = document.createElement('div');
        div.classList.add('col-lg-4');
        div.classList.add('mb-5')
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${card.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${card.suit}</h5>
                <p class="card-text">${card.code}</p>
                <button onclick="cardDetail()" class="btn btn-primary">Details</button>
            </div>
        </div>
        `;
        main.appendChild(div);

    }
}

// card detail
// const cardDetail=(code)=>{
//     fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
//     .then(res=>res.json())
//     .then(data=>)
// }
