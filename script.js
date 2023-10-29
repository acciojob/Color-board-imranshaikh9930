const container = document.querySelector('.container');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


for (let i = 0; i < 800; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    
   
    square.style.backgroundColor = "black";
    
  
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = getRandomColor();
    });
	
    square.addEventListener('mouseout', () => {
        setTimeout(() => {
            square.style.backgroundColor = getRandomColor();
        }, 1000);

        setTimeout(() => {
          square.style.backgroundColor = "black";
      }, 1000);
      
    });
    
    container.appendChild(square);
}
