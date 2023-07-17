const vetor1 = [1, 3, 5, 7, 9];
const vetor2 = [2, 4, 6, 8, 0];
const vetor3 = [1, 2, 3, 4, 5];
const vetor4 = [6, 7, 8, 9, 0];

const matriz = [vetor1, vetor2, vetor3, vetor4];

console.log(vetor1[0]);
console.log(matriz[0][3]);

const matriz3d = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];

console.log(matriz3d[1][0][0]);
console.log(matriz3d[1][1][1]);

const matrix3x3 = [
    [1, 8, 4],
    [6, 5, 9],
    [2, 3, 7]
];

for(let x = 0; x < matrix3x3.length; x++){
    for(let y = 0; y < matrix3x3.length; y++){
        console.log(matrix3x3[x][y]);
    }
}