const decrement = document.querySelector("[dec-Btn]");
const increment = document.querySelector("[inc-Btn]");
const display = document.querySelector("[content-display]");


function incrementval()
{
    let value = parseInt(display.innerText);
    value = value + 1;
    display.innerHTML = value;
}
function decrementval()
{
   let value = parseInt(display.innerHTML);
   value--;
   display.innerHTML = value;
}

increment.addEventListener('click', () => {
   incrementval();
});



decrement.addEventListener('click', () => {
    decrementval();
});