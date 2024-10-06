const root = document.querySelector('#root');

const container = document.createElement('div');
container.classList.add("container");

const sizeBtn = document.createElement('button');
sizeBtn.classList.add('btn');
sizeBtn.textContent = 'Size'

const modeBtn = document.createElement('button')
modeBtn.classList.add('Btn')
modeBtn.textContent = 'Mode'
root.append(sizeBtn, modeBtn, container)

function getRgbNum() {
    return Math.floor(Math.random() * 255)
}

function getRandomColor() {
    return `rgb(${getRgbNum()}), ${getRgbNum()}, ${getRgbNum()})`
   
}
function addCells(num) {
    container.textContent = ''
    container.style.gridTemplateColumns = 'repeat(${num}, 1fr)'
    container.style.gridTemplateRows = 'repeat(${num}, 1fr)'

    for(let i = 0; i < num * num; i++) {
        const cell = document.createElement('div')

        cell.style.border = '1px solid'
        let opacity = 1;

        cell.addEventListener ('mouseenter', () => {
        if (modeFlag === 'rgb') {
            cell.style.backgroundColor = getRandomColor()
             cell.style.border = '1px solid #000000'
             cell.style.opacity = 1

        } else {
            if(opacity < 9) {
                opacity++
            
        } else {
            opacity = 1
        }

        
            opacity++
            cell.style.backgroundColor = '#000000'
            cell.style.border = '1px solid #fffff'
            cell.style.opacity = '0.' + opacity
        }
        
        })
        
        9
        container.append(cell)
    }
}

sizeBtn.addEventListener('click', () => {
  const size = prompt  ("Введите число")

  if(isNaN(size)) {
    alert('где числа?')
  }
  
  if(size > 100) {
    alert('Слишком много клеток')
  }

  addCells(+size)
    
})

modeBtn.addEventListener('click', () => {
    if(modeFlag === 'rgb') {
        modeFlag = 'opacity'
    } else {
        modeFlag = 'rgb'
    }
   
})

addCells(10)