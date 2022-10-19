// En este desafío deberás crear un algoritmo que tome un array, agregarle información (además de la que ya contiene) y crear una copia de este array. 


let villanosDeBatman = ['Joker', 'Bane', "Ra's Al Ghul"];
villanosDeBatman = [...villanosDeBatman, 'Scarecrow']

let copiaVillanos = [...villanosDeBatman]

villanosDeBatman.map((element, index) => {
    console.log("villanosDeBatman", element);
    console.log("copiaVillanos", copiaVillanos[index])
})


// console.log(villanosDeBatman, copiaVillanos);
