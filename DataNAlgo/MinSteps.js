/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

 let findPostion
 let minDistance = function(word1, word2) {
     // dp
     if (word1.length == 0) {
         return word2.length
     }
 
     if (word2.length == 0) {
         return word1.length
     }

     debugger;
     word1 = '#'+word1
     word2 = '#'+word2
     
     let board = []
     for(let i=0; i<word1.length; i++) {
         let row = []
         for(let j=0; j<word2.length; j++) {
             // board[0][0] = 0 
             // other positions, set minStep big number
             let minStep = (i==0 &&j==0) ? 0: word2.length + word1.length
             // if from top cell, we append the last element, step + 1
             if(i-1 >= 0){
                 minStep = Math.min(minStep, board[i-1][j] + 1)
             }
             // if from left cell, we delete the last element, step + 1
             if(j-1 >= 0){
                 minStep = Math.min(minStep, row[j-1] + 1)                 
             }
             // if from top left cell, we replace the last element if word1[i] != word2[j]
             if(i-1 >= 0 && j-1 >= 0){
                 minStep = Math.min(minStep, board[i-1][j-1] + (word1[i] != word2[j]))             
             }   
             row.push(minStep)
         }
         board.push(row)
     }
     return board[word1.length-1][word2.length-1]
 };

 console.log(minDistance('intention', 'execution'));