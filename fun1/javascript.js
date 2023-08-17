const output = document.querySelector('.output');
  output.innerHTML = '';
  
  let i = 10;
  
  while (i >= 0) {
    console.log(`countdown is equal to ${i}`);
    const para = document.createElement('p');
    if (i === 10) {
      para.textContent = `Countdown ${i}`;
    } else if (i === 0) {
      para.textContent = `${i}  Blast Off!` ;
    } else {
      para.textContent = i;
    }
    //console.log(`para is equal to ${i}`);
    output.appendChild(para);
    i--;
}
  // const para = document.createElement('p');
  // para.textContent = ;


