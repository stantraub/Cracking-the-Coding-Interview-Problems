// Write an algorithm such that if an element in an MxN matrix is 0,
// its entire row and column are set to O.

function zeroMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
           if (matrix[i][j] === 0) matrix[i][j] = 'X';
            
        }
    }
    

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 'X') {
                // handle rows 
                for (let column = 0; column < matrix[i].length; column++) {
                    if (matrix[i][column] !== 'X') {
                        matrix[i][column] = 0;
                    }
                    
                }

                // handle columns
                for (let row = 0; row < matrix.length; row++) {
                    if (matrix[row][j] !== 'X') {
                        matrix[row][j] = 0;
                    }

                }

                matrix[i][j] = 0;
            }
            
        }
        
    }

    return matrix;
}

console.log(zeroMatrix([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]])); 