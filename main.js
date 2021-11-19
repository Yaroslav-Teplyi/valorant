let nextHeroButton = document.querySelector('.abilities__button');
let currentActiveHero = 1;

let agentNum1 = document.getElementById("agentNum1");
let agentNum2 = document.getElementById("agentNum2");
let agentNum3 = document.getElementById("agentNum3");
let agentNum4 = document.getElementById("agentNum4");

nextHeroButton.addEventListener('click', () => {

   switch (currentActiveHero) {
    case 1:
        addRemoveClass( agentNum1, agentNum4 );
        currentActiveHero++;
        break;

    case 2:
        addRemoveClass( agentNum2, agentNum1 );
        currentActiveHero++;
        break;

    case 3:
        addRemoveClass( agentNum3, agentNum2 );
        currentActiveHero++;
        break;

    case 4:
        addRemoveClass( agentNum4, agentNum3 );
        currentActiveHero = 1;
        break;  
   }
})

function addRemoveClass( a, b ) {
    a.classList.add('active');
    b.classList.remove('active');
}