
let lista = []
let c = 1
let f = 1
function adcionarTarefa() {
    // PEGA OS VALORES DO INPUT
    let inputTarefas = document.getElementById('inputTarefas').value
    let addTarefas = document.getElementById('addTarefas')

    console.log('' in lista)


    
    // se o valor estiver vazio ele nao passa
    if(inputTarefas === '') {

        //LIMPA VALOR E ADCIONA O PLACE NO INPUT
        document.getElementById('inputTarefas').value = ''
        document.getElementById('inputTarefas').placeholder = 'Adcione um valor valido'
    }
    // se o valor estiver listado ele nao passa
    else if(lista.includes(inputTarefas)) {

        //LIMPA VALOR E ADCIONA O PLACE NO INPUT
        document.getElementById('inputTarefas').value = ''
        document.getElementById('inputTarefas').placeholder =  'Ja na lista'
    }
    // se estiver correto ele passa
    else {
        // adciona o valor na lista
        lista.push(inputTarefas)
        
        addTarefas.innerHTML += 
        `   
            <li id="${inputTarefas}">
                <img onclick="confirmar('${inputTarefas}')" src="/img/confirm.png" alt="">
                <p>${inputTarefas}</p>
                <img onclick="deletar('${inputTarefas}')" src="img/delete.png" alt="">
            </li>
        `
        // adciona tarefas
        document.getElementById('inputTarefas').value = ''
        console.log(lista)
    }

}

// function confirmar(inputTarefas) {
//     let elemento = document.getElementById(inputTarefas);
//     if (elemento) {
//         elemento.remove();
//     }
//     lista.push(inputTarefas)
//     console.log(listas)
// }

function confirmar(inputTarefas) {
    let elemento = document.getElementById(inputTarefas);
    if (elemento) {
        elemento.remove();
        const indice = lista.indexOf(inputTarefas); 
        console.log(indice, lista.indexOf(inputTarefas))// Encontrar o índice do item no array
        if (indice !== -1) { // Se o item foi encontrado no array
            lista.splice(indice, 1); // Remover o item do array
        }
    }
    // pega o h1 de completa
    document.querySelector('.c').innerText = c
    // adciona + 1 nas completas
    c += 1
    console.log(lista); // Usar o nome correto do array para o console.log
}

function deletar(inputTarefas) {
    let elemento = document.getElementById(inputTarefas);
    if (elemento) {
        elemento.remove();
        const indice = lista.indexOf(inputTarefas); 
        console.log(indice, lista.indexOf(inputTarefas))// Encontrar o índice do item no array
        if (indice !== -1) { // Se o item foi encontrado no array
            lista.splice(indice, 1); // Remover o item do array
        }
    }
    // adciona + 1 nas canceladas
    document.querySelector('.f').innerText = f
    // adciona + 1 nas canceladas
    f += 1
    console.log(f);
    console.log(lista); // Usar o nome correto do array para o console.log
}



