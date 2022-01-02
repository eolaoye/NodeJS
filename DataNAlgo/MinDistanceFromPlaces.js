const Blocks = [
    {
      'Gym': false,
      'School': true,
      'Store': false,
    },
    {
      'Gym': true,
      'School': false,
      'Store': true,
    },
    {
      'Gym': true,
      'School': true,
      'Store': false,
    },
    {
      'Gym': false,
      'School': true,
      'Store': false,
    },
    {
      'Gym': false,
      'School': true,
      'Store': true,
    },
  ]
  
const Reqs = ['Gym', 'School', 'Store']
  
//   Graph = [[0,1,0], [1,0,0],[1,1,0],[0,1,0], [0,1,1]]
  
//   Index 0:
//   Res = [[null, 0, null], 
  
//   Index 1:
//   Res = [[1, 0, null], [0, 1, null]]       
  
//   Index 2:
//   Res = [[1, 0, null], [0, 1, null], [0, 0, null]]    
  
//   Index 3:
//   Res = [[1, 0, null], [0, 1, null], [0, 0, null], [1, 0, null]]       
  
  
//   Index 4:
//   Res = [[1, 0, null], [0, 1, null], [0, 0, null], [1, 0, null], [2, 0, 0]]  
//   MinMaxValue = 2     
//   MinMaxIndex = 4 
  
  
//   Index 3:
//   Res = [[1, 0, null], [0, 1, null], [0, 0, null], [1, 0, 1], [2, 0, 0]]  
//   MinMaxValue = 1
//   MinMaxIndex = 3
  
  
//   Index 2:
//   Res = [[1, 0, null], [0, 1, null], [0, 0, 2], [1, 0, 1], [2, 0, 0]]  
//   MinMaxValue = 1
//   MinMaxIndex = 3
  
  
//   Index 1:
//   Res = [[1, 0, null], [0, 1, 3], [0, 0, 2], [1, 0, 1], [2, 0, 0]]  
//   MinMaxValue = 1
//   MinMaxIndex = 3
  
  
//   Index 0:
//   Res = [[1, 0, 4], [0, 1, 3], [0, 0, 2], [1, 0, 1], [2, 0, 0]]  
//   MinMaxValue = 1
//   MinMaxIndex = 3
  

function minMaxIndex(blocks, reqs) {
	const res = [];
	let dist = [];
	for (let j = 0; j < reqs.length; j++) {
        dist.push(blocks[0][reqs[j]] ? 0 : null);
	}
	res.push(dist);

	for(let i = 1; i < blocks.length; i++) {
		const newDist = [];
		for (let j = 0; j < reqs.length; j++) {
			const prev = res[i-1][j];
			const newE = blocks[i][reqs[j]];
			if (newE) newDist.push(0);
			else if (prev == null) newDist.push(null);
			else newDist.push(prev+1);
		}

		if (newDist === [0,0,0]) return i;
		res.push(newDist);
        console.log(res);
	}
	
	let minMaxValue = null;
	let minMaxIndex = null;
	for(let i = res.length - 1; i >=0; i--) {
		const thisDist = res[i];
		let thisMaxValue = null;
        for (let j = 0; j < res[i].length; j++) {
			
			if (i == res.length - 1) { //last element
				if ( res[i][j] == null) return null; //one of the req elements is missing
			}
			
			//if current value is null then check the value ahead for its distance
			if (res[i][j] == null) res[i][j] = res[i+1][j] + 1;
			thisMaxValue = thisMaxValue == null ? res[i][j] : (thisMaxValue > res[i][j] ? thisMaxValue : res[i][j]);
        }
        console.log(res);

		if (minMaxValue == null || minMaxValue > thisMaxValue)  {
            minMaxValue = thisMaxValue;
            if (minMaxValue == 0) return i;
            minMaxIndex = i;
        }
        console.log('minMaxValue: ', minMaxValue);
		
	}
	return minMaxIndex;
}     

console.log(minMaxIndex(Blocks, Reqs));