//Atalho para querySelectors
//Shortcut to querySelectors
const qs = e => document.querySelector(e);
const qsa = a => document.querySelectorAll(a);
//Put as pizzas on the page
//Colocar as pizzas na página
pizzaJson.map((item, index)=> {
    // create a variable that has clones of an element (all the content within it):
    // criar uma variável que tenha clones de um elemento (todo o conteúdo dentro dele):
    let pizzaItem = qs('.models .pizza-item').cloneNode(true);
    //Set the keys for each pizza in their respective items:
    //Setar as keys de cada pizza em seus respectivos itens:
    pizzaItem.setAttribute('data-key', index);
    //Put the pizza information:
    //Colocar as informações das pizzas:
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    //Pizza click event:
    //Evento de click na pizza:
    pizzaItem.querySelector('a').addEventListener('click', (e)=> {
        //Disable the default event (refresh the page):
        //Desativar o evento padrão (atualizar a página):
        e.preventDefault();
        //First it will look for which element has ".pizza-item", then it will save the attribute of the clicked pizza:
        //Primeiro vai procurar qual elemento tem ".pizza-item", depois vai salvar o atributo da pizza clicada:
        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        //Set the pizza information in the modal:
        //Definir as informações da pizza no modal:
        qs('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        qs('.pizzaInfo .pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        qs('.pizzaBig img').src = pizzaJson[key].img;
        qs('.pizzaInfo--actualPrice' ).innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`
        qsa('.pizzaInfo--size').forEach((size, sizeIndex)=> {

            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];

        })
        //When clicking on a pizza, open the pizza mold with opacity animation:
        //Ao  clicar numa pizza, abrir moldal com animação de opacidade:
        qs('.pizzaWindowArea').style.opacity = 0;
        qs('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
            qs('.pizzaWindowArea').style.opacity = 1;
        }, 200)
    });
    //Get the content in .pizza-area, and add the variable pizzaItem:
    //Pegar o conteúdo em .pizza-area, e adicionar a variável pizzaItem:
    qs('.pizza-area').append(pizzaItem);
});

