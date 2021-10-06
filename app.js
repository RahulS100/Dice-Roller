//////////////////////dom objects and variable area//////////////////
const dice_img = document.getElementById('dice-img');
const roll_btn = document.getElementById('rol-btn');

/////////////conatainer/////////////////
let random_num

/////////////////////geting a random number between the 1 to 6//////////////////////
random_num = Math.floor(Math.random() * (7-1) + 1); ///get a random number after refresh the page
set_dice();
console.log(random_num);

/////////////////////dice image set according to random number////////////
roll_btn.addEventListener('click', ()=> {
    random_num = Math.floor(Math.random() * (7-1) + 1);
    set_dice();
});


//////////////////function for setting up dice
function set_dice() {
if(random_num === 1)
    dice_img.setAttribute('src', "./Dice/dice_one.png");
else if(random_num === 2)
    dice_img.setAttribute('src', "./Dice/dice_two.png");
else if(random_num === 3)
    dice_img.setAttribute('src', "./Dice/dice_three.png");
else if(random_num === 4)
    dice_img.setAttribute('src', "./Dice/dice_four.png");
else if(random_num === 5)
    dice_img.setAttribute('src', "./Dice/dice_five.png");
else
    dice_img.setAttribute('src', "./Dice/dice_six.png");
}