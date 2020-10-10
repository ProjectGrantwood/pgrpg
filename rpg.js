const Player = {
    name: "Bobwald Smithwurst",
    statStrings: statStrings = ["Knowledge", "Reasoning", "Strength", "Agility", "Awareness"],
}

Player.initStats = function () {
    let stats = partition(25, 5);
    for (let i = 0; i < stats.length; i++) {
        Player[Player.statStrings[i]] = stats[i];
    }
}

Player.showName = function () {
    document.getElementById("playername").innerHTML = `${Player.name}`;
}

Player.showStats = function () {
    let showStats = ``;
    for (let i = 0; i < 5; i++) {
        showStats += `<br>${statStrings[i]}: ${Player[Player.statStrings[i]]}`;
    }
    document.getElementById("stats").innerHTML = showStats;
}

Player.initStats();
Player.showName();
Player.showStats();