const Player = {
    name: 'Bobwald Smithwurst',
    experience: 0,
    level: 1,
    stats: {
        Knowledge: 0,
        Reasoning: 0,
        Strength: 0,
        Agility: 0,
        Awareness: 0
    }
}

const playerStatStrings = ['Knowledge', 'Reasoning', 'Strength', 'Agility', 'Awareness'];

Player.initStats = function () {
    let stats = partition(20, 5, 6);
    for (let i = 0; i < 5; i++) {
        Player[playerStatStrings[i]] = stats[i];
    }
}

Player.showName = function () {
    document.getElementById('playername').innerHTML = `<header>${Player.name}</header>`;
    document.getElementById('playerinfo').innerHTML = `Level: ${Player.level}<br>Experience: ${Player.experience}`
}

Player.showStats = function () {
    let showStats = ``;
    for (let i = 0; i < 5; i++) {
        showStats += `${playerStatStrings[i]}: ${Player[playerStatStrings[i]]}<br>`;
    }
    document.getElementById('stats').innerHTML = `<header>${Player.name}'s Stats:</header><br>${showStats}`;
}

Player.initStats();
Player.showName();
Player.showStats();