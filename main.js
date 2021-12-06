let nextHeroButton = document.querySelector('.abilities__button');
let currentActiveHero = 1;
let isButtonPressed = false;

let agentNum1 = document.getElementById("agentNum1");
let agentNum2 = document.getElementById("agentNum2");
let agentNum3 = document.getElementById("agentNum3");
let agentNum4 = document.getElementById("agentNum4");

let basicAbilityName = document.getElementById("basicAbilityName");
let basicAbilityDesc = document.getElementById("basicAbilityDesc");
let basicAbilityPic = document.getElementById("basicAbilityPic");

let signatureAbilityName = document.getElementById("signatureAbilityName");
let signatureAbilityDesc = document.getElementById("signatureAbilityDesc");
let signatureAbilityPic = document.getElementById("signatureAbilityPic");

let passiveAbilityName = document.getElementById("passiveAbilityName");
let passiveAbilityDesc = document.getElementById("passiveAbilityDesc");
let passiveAbilityPic = document.getElementById("passiveAbilityPic");

let ultimateAbilityName = document.getElementById("ultimateAbilityName");
let ultimateAbilityDesc = document.getElementById("ultimateAbilityDesc");
let ultimateAbilityPic = document.getElementById("ultimateAbilityPic");

let agents = {
    phoenix: {
        basicAbilityName: 'Curveball',
        basicAbilityDesc: 'Flare orb detonate and blinde any player who sees the orb.',
        basicAbilityPicWay: 'images/abilities/phoenix/basic.png',

        signatureAbilityName: 'Hot Hands',
        signatureAbilityDesc: 'Fireball that explodes creating a lingering fire zone that damages enemies.',
        signatureAbilityPicWay: 'images/abilities/phoenix/signature.png',

        passiveAbilityName: 'Blaze',
        passiveAbilityDesc: 'Wall of fire that damages players passing through it.',
        passiveAbilityPicWay: 'images/abilities/phoenix/passive.png',

        ultimateAbilityName: 'Run It Back',
        ultimateAbilityDesc: 'Dying or allowing the timer to expire will bring Phoenix back with full health.',
        ultimateAbilityPicWay: 'images/abilities/phoenix/ultimate.png'
    },
    jett: {
        basicAbilityName: 'Updraft',
        basicAbilityDesc: 'Propel Jett high into the air.',
        basicAbilityPicWay: 'images/abilities/jett/basic.png',

        signatureAbilityName: 'Tailwind',
        signatureAbilityDesc: 'Propel Jett in the direction she is moving.',
        signatureAbilityPicWay: 'images/abilities/jett/signature.png',

        passiveAbilityName: 'Cloudburst',
        passiveAbilityDesc: 'Projectile that expands into a brief vision-blocking cloud.',
        passiveAbilityPicWay: 'images/abilities/jett/passive.png',

        ultimateAbilityName: 'Blade Storm',
        ultimateAbilityDesc: 'A set of highly accurate knives that recharge on killing an opponent.',
        ultimateAbilityPicWay: 'images/abilities/jett/ultimate.png'
    },
    sova: {
        basicAbilityName: 'Shock Bolt',
        basicAbilityDesc: 'Sends the explosive forward, detonating upon collision and damaging players nearby',
        basicAbilityPicWay: 'images/abilities/sova/basic.png',

        signatureAbilityName: 'Recon Bolt',
        signatureAbilityDesc: 'Reveals the location of nearby enemies caught in the line of sight of the bolt.',
        signatureAbilityPicWay: 'images/abilities/sova/signature.png',

        passiveAbilityName: 'Owl Drone',
        passiveAbilityDesc: 'Takes control of movement of the drone, who shoots reveling dart',
        passiveAbilityPicWay: 'images/abilities/sova/passive.png',

        ultimateAbilityName: 'Hunter\'s Fury',
        ultimateAbilityDesc: 'Bow with three long-range wall-piercing energy blasts.',
        ultimateAbilityPicWay: 'images/abilities/sova/ultimate.png'
    },
    sage: {
        basicAbilityName: 'Slow Orb',
        basicAbilityDesc: 'Orb that breaks into a slowing field upon impact with the ground.',
        basicAbilityPicWay: 'images/abilities/sage/basic.png',

        signatureAbilityName: 'Healing Orb',
        signatureAbilityDesc: 'Heal an ally or yourself to full health over a few seconds.',
        signatureAbilityPicWay: 'images/abilities/sage/signature.png',

        passiveAbilityName: 'Barrier Orb',
        passiveAbilityDesc: 'Places a solid wall. ',
        passiveAbilityPicWay: 'images/abilities/sage/passive.png',

        ultimateAbilityName: 'Resurrection',
        ultimateAbilityDesc: 'Target a friendly corpse. After a short delay, revive them with full health.',
        ultimateAbilityPicWay: 'images/abilities/sage/ultimate.png'
    }
}

nextHeroButton.addEventListener('click', () => {

    if( isButtonPressed !== true ) {
        isButtonPressed = true;
        document.querySelectorAll('.ability').forEach( e => e.style.visibility = 'visible' );
        document.querySelector('.callToAction').style.display = 'none';
    }

    switch (currentActiveHero) {
        case 1:
            addRemoveClass( agentNum1, agentNum4 );
            updateAbilityName( agents.phoenix.basicAbilityName,
                agents.phoenix.signatureAbilityName,
                agents.phoenix.passiveAbilityName,
                agents.phoenix.ultimateAbilityName );

            updateAbilityDesc( agents.phoenix.basicAbilityDesc,
                agents.phoenix.signatureAbilityDesc,
                agents.phoenix.passiveAbilityDesc,
                agents.phoenix.ultimateAbilityDesc );
                
            updateAbilityPic( agents.phoenix.basicAbilityPicWay,
                agents.phoenix.signatureAbilityPicWay,
                agents.phoenix.passiveAbilityPicWay,
                agents.phoenix.ultimateAbilityPicWay );
            currentActiveHero++;
            break;

        case 2:
            addRemoveClass( agentNum2, agentNum1 );
            updateAbilityName( agents.jett.basicAbilityName,
                agents.jett.signatureAbilityName,
                agents.jett.passiveAbilityName,
                agents.jett.ultimateAbilityName );

            updateAbilityDesc( agents.jett.basicAbilityDesc,
                agents.jett.signatureAbilityDesc,
                agents.jett.passiveAbilityDesc,
                agents.jett.ultimateAbilityDesc );
                
            updateAbilityPic( agents.jett.basicAbilityPicWay,
                agents.jett.signatureAbilityPicWay,
                agents.jett.passiveAbilityPicWay,
                agents.jett.ultimateAbilityPicWay );
            currentActiveHero++;
            break;

        case 3:
            addRemoveClass( agentNum3, agentNum2 );
            updateAbilityName( agents.sova.basicAbilityName,
                agents.sova.signatureAbilityName,
                agents.sova.passiveAbilityName,
                agents.sova.ultimateAbilityName );

            updateAbilityDesc( agents.sova.basicAbilityDesc,
                agents.sova.signatureAbilityDesc,
                agents.sova.passiveAbilityDesc,
                agents.sova.ultimateAbilityDesc );
                
            updateAbilityPic( agents.sova.basicAbilityPicWay,
                agents.sova.signatureAbilityPicWay,
                agents.sova.passiveAbilityPicWay,
                agents.sova.ultimateAbilityPicWay );
            currentActiveHero++;
            break;

        case 4:
            addRemoveClass( agentNum4, agentNum3 );
            updateAbilityName( agents.sage.basicAbilityName,
                agents.sage.signatureAbilityName,
                agents.sage.passiveAbilityName,
                agents.sage.ultimateAbilityName );

            updateAbilityDesc( agents.sage.basicAbilityDesc,
                agents.sage.signatureAbilityDesc,
                agents.sage.passiveAbilityDesc,
                agents.sage.ultimateAbilityDesc );
                
            updateAbilityPic( agents.sage.basicAbilityPicWay,
                agents.sage.signatureAbilityPicWay,
                agents.sage.passiveAbilityPicWay,
                agents.sage.ultimateAbilityPicWay );
            currentActiveHero = 1;
            break;  
   }
})

function addRemoveClass( a, b ) {
    a.classList.add('active');
    b.classList.remove('active');
}

function updateAbilityName( basic, signature, passive, ultimate ) {
    basicAbilityName.innerText = basic;
    signatureAbilityName.innerText = signature;
    passiveAbilityName.innerText = passive;
    ultimateAbilityName.innerText = ultimate;
}

function updateAbilityDesc( basic, signature, passive, ultimate ) {
    basicAbilityDesc.innerText = basic;
    signatureAbilityDesc.innerText = signature;
    passiveAbilityDesc.innerText = passive;
    ultimateAbilityDesc.innerText = ultimate;
}

function updateAbilityPic( basic, signature, passive, ultimate ) {
    basicAbilityPic.setAttribute( 'src', basic );
    signatureAbilityPic.setAttribute( 'src', signature );
    passiveAbilityPic.setAttribute( 'src', passive );
    ultimateAbilityPic.setAttribute( 'src', ultimate );
}
