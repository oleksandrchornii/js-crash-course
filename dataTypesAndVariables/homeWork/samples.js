// const figureType = 'squere';

function calculateFigureArea(figureType, a, b) {
    switch (figureType) {
        case 'squere': return  a * a;
          
        case 'circle': return Math.PI * (a * a);
      
        case 'rectangle': return a * b;
  
        default: {
            console.error('Wrong figure');
        }
    }
}

console.log(calculateFigureArea('rectangle', 2, 4));






