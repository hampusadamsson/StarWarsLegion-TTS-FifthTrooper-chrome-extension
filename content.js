var units = {
    "Commander": "commander",
    "C-3PO": "c3po",
    "Idens ID10 Seeker Droid": "idensID10",
    "Operative": "operative",
    "Corps": "corps",
    "Special Forces": "specialForces",
    "Support": "support",
    "Heavy": "heavy",
    "Luke Skywalker": "lukeSkywalker",
    "Leia Organa": "leiaOrgana",
    "Han Solo": "hanSolo",
    "Jyn Erso": "jynErso",
    "Cassian Andor": "cassianAndor",
    "Rebel Officer": "rebelOfficer",
    "Lando Calrissian": "landoCalrissian",
    "Chewbacca": "chewbacca",
    "Sabine Wren": "sabineWren",
    "Luke Skywalker": "lukeSkywalkerJediKnight",
    "R2-D2": "r2d2",
    "K-2SO": "k2so",
    "Rebel Troopers": "rebelTrooper",
    "Fleet Troopers": "fleetTroopers",
    "Rebel Veterans": "rebelVeterans",
    "Mark II Medium Blaster Trooper": "markIIMediumBlasterTrooper",
    "Rebel Commandos": "rebelCommandos",
    "Rebel Commandos Strike Team": "rebelCommandosStrikeTeam",
    "Wookiee Warriors": "wookieeWarriors",
    "Rebel Pathfinders": "rebelPathfinders",
    "Mandalorian Resistance": "mandalorianResistance",
    "Clan Wren": "clanWren",
    "AT-RT": "atrt",
    "1.4 FD Laser Cannon Team": "fdLaserCannonTeam",
    "Tauntaun Riders": "tauntaunRiders",
    "T-47 Airspeeder": "airSpeeder",
    "X-34 Landspeeder": "x34Landspeeder",
    "Darth Vader": "darthVader",
    "General Veers": "generalVeers",
    "Emperor Palpatine": "emperorPalpatine",
    "Director Orson Krennic": "directorOrsonKrennic",
    "Iden Versio": "idenVersio",
    "Imperial Officer": "imperialOfficer",
    "Agent Kallus": "agentKallus",
    "Boba Fett": "bobaFett",
    "Bossk": "bossk",
    "Darth Vader": "darthVaderTheEmperorsApprentice",
    "Stormtroopers": "stormtrooper",
    "Snowtroopers": "snowtrooper",
    "Shoretroopers": "shoretroopers",
    "DF-90 Mortar Trooper": "df90MortarTrooper",
    "Scout Troopers": "scoutTroopers",
    "Scout Troopers Strike Team": "scoutTroopersStrikeTeam",
    "Imperial Royal Guards": "imperialRoyalGuards",
    "Imperial Death Troopers": "imperialDeathTroopers",
    "Imperial Special Forces": "isf",
    "Inferno Squad": "infernoSquad",
    "74-Z Speeder Bikes": "speederBike",
    "E-Web Heavy Blaster Team": "eWebHeavyBlasterTeam",
    "Dewback Rider": "dewbackRider",
    "AT-ST": "atst",
    "TX-225 GAVw Occupier": "tx225",
    "General Grievous": "generalGrievous",
    "Count Dooku": "countDooku",
    "T-Series Tactical Droid": "tSeriesTacticalDroid",
    "Cad Bane": "cadBane",
    "Maul": "maul",
    "B1 Battle Droids": "b1BattleDroids",
    "B2 Super Battle Droids": "b2SuperBattleDroids",
    "BX Commando Droids": "bxCommandoDroids",
    "BX Commando Droids Strike Team": "bxCommandoDroidsStrikeTeam",
    "DRK-1 Sith Probe Droids": "drk1SithProbeDroids",
    "Droidekas": "droidekas",
    "STAP Riders": "STAP",
    "AAT Trade Federation Battle Tank": "aatTank",
    "Obi-Wan Kenobi": "obiWanKenobi",
    "Clone Captain Rex": "cloneCaptainRex",
    "Anakin Skywalker": "anakinSkywalker",
    "Clone Commander": "cloneCommander",
    "R2-D2": "republicR2d2",
    "Padme Amidala": "padme",
    "Phase I Clone Troopers": "phaseICloneTroopers",
    "Phase II Clone Troopers": "phaseIICloneTroopers",
    "ARC Troopers": "arcTroopers",
    "ARC Troopers Strike Team": "arcTroopersStrikeTeam",
    "BARC Speeder": "barcSpeeder",
    "Republic AT-RT": "republicATRT",
    "TX-130 Saber-Class Fighter Tank": "saberTank"
};
  
var upgrades = {
    "Force Push": "forcePush",
    "Force Reflexes": "forceReflexes",
    "Saber Throw": "saberThrow",
    "Jedi Mind Trick": "jediMindTrick",
    "Battle Meditation": "battleMeditation",
    "Force Choke": "forceChoke",
    "Anger": "anger",
    "Fear": "fear",
    "Force Guidance": "forceGuidance",
    "Hope": "hope",
    "Force Barrier": "forceBarrier",
    "Targeting Scopes": "targetingScopes",
    "Grappling Hooks": "grapplingHooks",
    "Environmental Gear": "environmentalGear",
    "Emergency Stims": "emergencyStims",
    "Recon Intel": "reconIntel",
    "Personal Combat Shield": "personalCombatShield",
    "Electro Grappling Line": "electroGrapplingLine",
    "Electrobinoculars": "electrobinoculars",
    "JT-12 Jetpacks": "jt12Jetpacks",
    "Ascension Cables": "ascensionCables",
    "Portable Scanner": "portableScanner",
    "Concussion Grenades": "concussionGrenades",
    "Impact Grenades": "impactGrenades",
    "Fragmentation Grenades": "fragmentationGrenades",
    "Smoke Grenades": "smokeGrenades",
    "EMP Droid Poppers": "empDroidPoppers",
    "Comms Jammer": "commsJammer",
    "Long-Range Comlink": "longRangeComlink",
    "HQ Uplink": "hqUplink",
    "Comms Relay": "commsRelay",
    "Linked Targeting Array": "linkedTargetingArray",
    "Integrated Comms Antenna": "integratedCommsAntenna",
    "Command Control Array": "commandControlArray",
    "Barrage Generator": "barrageGenerator",
    "Overcharged Generator": "overchargedGenerator",
    "AT-RT Rotary Blaster": "rotaryBlaster",
    "AT-RT Laser Cannon": "laserCannon",
    "AT-RT Flamethrower": "flamethrower",
    "Ax-108 \"Ground Buzzer\"": "ax108GroundBuzzer",
    "Mo/Dk Power Harpoon": "powerHarpoon",
    "AT-ST Mortar Launcher": "atstMortarLauncher",
    "88 Twin Light Blaster Cannon": "twinLightBlasterCannon",
    "DW-3 Concussion Grenade Launcher": "dw3ConcussionGrenadeLauncher",
    "M-45 Ion Blaster": "m45IonBlaster",
    "Mark II Medium Blaster": "markIIMediumBlaster",
    "RT-97C Rifle Pintle": "rt97CRiflePintle",
    "DLT-19 Rifle Pintle": "dlt19RiflePintle",
    "A-300 Rifle Gunner": "a300RifleGunner",
    "RPS-6 Rocket Gunner": "rps6RocketGunner",
    "BARC RPS-6 Gunner": "barcRPS6Gunner",
    "BARC Twin Laser Gunner": "barcTwinLaserGunner",
    "BARC Ion Gunner": "barcIonGunner",
    "Z-6 Trooper": "z6Trooper",
    "HH-12 Stormtrooper": "hh12Stormtrooper",
    "MPL-57 Ion Trooper": "mpl57IonTrooper",
    "DLT-19 Stormtrooper": "dlt19Stormtrooper",
    "T-7 Ion Snowtrooper": "t7IonSnowtrooper",
    "Flametrooper": "flametrooper",
    "Scatter Gun Trooper": "scatterGunTrooper",
    "MPL-57 Barrage Trooper": "mpl57BarrageTrooper",
    "Electrostaff Guard": "electrostaffGuard",
    "DH-447 Sniper": "dh447Sniper",
    "Proton Charge Saboteur": "protonChargeSaboteur",
    "Bowcaster Wookiee": "bowcasterWookiee",
    // "DH-447 Sniper": "dh447SniperLeader",
    "DH-447 Sniper": "dh447Sniper",
    // "Proton Charge Saboteur": "protonChargeSaboteurLeader",
    "Proton Charge Saboteur": "protonChargeSaboteur",
    "DLT-19x Sniper": "dlt19xSniper",
    // "Sonic Charge Saboteur": "sonicChargeSaboteurLeader",
    "Sonic Charge Saboteur": "sonicChargeSaboteur",
    // "DLT-19x Sniper": "dlt19xSniperLeader",
    "DLT-19x Sniper": "dlt19xSniper",
    "Sonic Charge Saboteur": "sonicChargeSaboteur",
    "T-21 Special Forces Trooper": "isfT21",
    "Del Meeko": "delMeeko",
    "Gideon Hask": "gideonHask",
    "Beskad Duelist": "beskadDuelist",
    "Ursa Wren": "ursaWren",
    "Tristan Wren": "tristanWren",
    "BX-Series Droid Sniper": "bxCommandoDroidSniper",
    // "BX-Series Droid Sniper": "bxCommandoDroidSniperLeader",
    "BX-Series Droid Saboteur": "bxCommandoDroidSaboteur",
    // "BX-Series Droid Saboteur": "bxCommandoDroidSaboteurLeader",
    "DP-23 Phase I Trooper": "dp23PhaseITrooper",
    "RPS-6 Phase I Trooper": "rps6PhaseITrooper",
    "E-5s B1 Trooper": "e5sB1Trooper",
    "Radiation Cannon B1 Trooper": "radiationCannonB1Trooper",
    "RT-97C Stormtrooper": "rt97CStormtrooper",
    "T-21 Stormtrooper": "t21Stormtrooper",
    "SX-21 Trooper": "sx21Trooper",
    "DLT-20A Trooper": "dlt20ATrooper",
    "DC-15x ARC Trooper": "arcTrooperDC15x",
    // "DC-15x ARC Trooper": "arcTrooperDC15xLeader",
    "Echo": "echo",
    // "Echo": "echoLeader",
    "Fives": "fives",
    // "Fives": "fivesLeader",
    "Clone Commander": "cloneCommander",
    "Clone Comms Technician": "cloneCommsTechnician",
    "Clone Engineer": "cloneEngineer",
    "Clone Medic": "cloneMedic",
    "Pao": "pao",
    "Bistan": "bistan",
    "DT-F16": "dtf16",
    "DLT-19D Trooper": "dlt19DTrooper",
    "CM-0/93 Trooper": "cm093Trooper",
    "T-21B Trooper": "t21BTrooper",
    "Z-6 Phase I Trooper": "z6PhaseITrooper",
    "E-60R B1 Trooper": "e60RB1Trooper",
    "E-5C B1 Trooper": "e5CB1Trooper",
    "Rebel Trooper": "rebelTrooper",
    "Fleet Trooper": "fleetTrooper",
    "Stormtrooper": "stormtrooper",
    "Snowtrooper": "snowtrooper",
    "Rebel Officer": "rebelOfficer",
    "Imperial Officer": "imperialOfficer",
    "2-1B Medical Droid": "medicalDroid21B",
    "R4 Astromech Droid": "r4AstromechDroid",
    "R5 Astromech Droid": "r5AstromechDroid",
    "FX-9 Medical Droid": "fx9MedicalDroid",
    "Imperial Comms Technician": "imperialCommsTechnician",
    "Rebel Comms Technician": "rebelCommsTechnician",
    "Rebel Veteran": "rebelVeteran",
    "Shoretrooper": "shoretrooper",
    "B2 Super Battle Droid": "b2SuperBattleDroid",
    "Phase II Clone Trooper": "phaseIICloneTrooper",
    "Phase I Clone Trooper": "phaseICloneTrooper",
    "B1 Battle Droid": "b1BattleDroid",
    "T-Series Tactical Droid": "tSeriesTacticalDroid",
    "EV-Series Medical Droid": "evSeriesMedicalDroid",
    "PK-Series Worker Droid": "pkSeriesWorkerDroid",
    "Viper Recon Droid": "viperReconDroid",
    "Phase I Clone Specialist": "phaseICloneSpecialist",
    "Phase I Clone Captain": "phaseICloneCaptain",
    "OOM-Series Battle Droid": "oomSeriesBattleDroid",
    "B1 Security Droid": "b1SecurityDroid",
    "Stormtrooper Captain": "stormtrooperCaptain",
    "Stormtrooper Specialist": "stormtrooperSpecialist",
    "Rebel Trooper Specialist": "rebelTrooperSpecialist",
    "Rebel Trooper Captain": "rebelTrooperCaptain",
    "Wedge Antilles": "wedgeAntilles",
    "General Weiss": "generalWeiss",
    "First Sergeant Arbmab": "firstSergeantArbmab",
    "Ryder Azadi": "ryderAzadi",
    "Imperial Hammers Elite Armor Pilot": "imperialHammersEliteArmorPilot",
    "Outer Rim Speeder Jockey": "outerRimSpeederJockey",
    "Aayla Secura": "aaylaSecura",
    "Commanding Presence": "commandingPresence",
    "Esteemed Leader": "esteemedLeader",
    "Improvised Orders": "improvisedOrders",
    "Strict Orders": "strictOrders",
    "Aggressive Tactics": "aggressiveTactics",
    "Inspiring Presence": "inspiringPresence",
    "Vigilance": "vigilance",
    "Duck and Cover": "duckAndCover",
    "Hunter": "hunter",
    "Tenacity": "tenacity",
    "Endurance": "endurance",
    "Overwatch": "overwatch",
    "Offensive Push": "offensivePush",
    "Situational Awareness": "situationalAwareness",
    "Offensive Stance": "offensiveStance",
    "Seize The Initiative": "seizeTheInitiative",
    "A-300": "a300",
    "A-180": "a180",
    "Jyns SE-14 Blaster": "jynsSE14",
    "A-280-CFE Sniper Config": "a280CFESniperConfig",
    "Idens DLT-20A Rifle": "idensDLT20ARifle",
    "Idens TL-50 Repeater": "idensTL50Repeater",
    "E-11D": "e11D",
    "The Darksaber": "theDarksaber",
    "DT-57 \"Annihilator\"": "dt57Annihilator",
    "Vibroswords": "vibroswords",
    "Deflector Shields": "deflectorShields",
    "Electro Gauntlets": "electroGauntlets",
    "Looted E-5 Blaster": "lootedE5Blaster",
    "Jetpack Rockets": "jetpackRockets",
    "Not A Story The Jedi Would Tell": "anakinFlaw",
    "RT-97C Blaster Rifle": "rt97cBlasterRifle",
    "CR-24 Flame Rifle": "cr24FlameRifle",
    "T-21 Blaster Rifle": "t21BlasterRifle",
    "J-19 Bo-rifle Blaster/Staff": "j19BoRifleBlasterStaff",
    "Developing Sympathies": "agentKallusFlaw",
    "Ive Altered The Deal": "landoFlaw",
    "C-3PO": "c3po",
    "Idens ID10 Seeker Droid": "idensID10"
};


function levenshtein(a, b) {
    if(a.length === 0) return b.length;
    if(b.length === 0) return a.length;
  
    var matrix = [];
  
    // increment along the first column of each row
    var i;
    for(i = 0; i <= b.length; i++){
      matrix[i] = [i];
    }
  
    // increment each column in the first row
    var j;
    for(j = 0; j <= a.length; j++){
      matrix[0][j] = j;
    }
  
    // Fill in the rest of the matrix
    for(i = 1; i <= b.length; i++){
      for(j = 1; j <= a.length; j++){
        if(b.charAt(i-1) == a.charAt(j-1)){
          matrix[i][j] = matrix[i-1][j-1];
        } else {
          matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                  Math.min(matrix[i][j-1] + 1, // insertion
                                            matrix[i-1][j] + 1)); // deletion
        }
      }
    }
    return matrix[b.length][a.length];
}
  
  
function similar_text (first, second) {
    if (first === null || second === null || typeof first === 'undefined' || typeof second === 'undefined') {
        return 0;
    }
  
    first += '';
    second += '';
  
    var pos1 = 0,
        pos2 = 0,
        max = 0,
        firstLength = first.length,
        secondLength = second.length,
        p, q, l, sum;
  
    max = 0;
  
    for (p = 0; p < firstLength; p++) {
        for (q = 0; q < secondLength; q++) {
            for (l = 0;
            (p + l < firstLength) && (q + l < secondLength) && (first.charAt(p + l) === second.charAt(q + l)); l++);
            if (l > max) {
                max = l;
                pos1 = p;
                pos2 = q;
            }
        }
    }
  
    sum = max;
  
    if (sum) {
        if (pos1 && pos2) {
            sum += similar_text(first.substr(0, pos2), second.substr(0, pos2));
        }
  
        if ((pos1 + max < firstLength) && (pos2 + max < secondLength)) {
            sum += similar_text(first.substr(pos1 + max, firstLength - pos1 - max), second.substr(pos2 + max, secondLength - pos2 - max));
        }
    }
    return sum;
}

function getBestMatch(name, source){
    let fit = -1000;
    let best = "";
    name = name.toLowerCase();
    Object.keys(source).forEach(k => {
        let kl = k.toLowerCase();
        let dist = similar_text(name, kl) - levenshtein(name, kl);
        if(dist>fit){
        best = k;
        fit = dist;
        }
    });
    return best;
}

function getUnitNameInTts(name, source){
if(name in source){
    console.log("Found in TTS: " + name)
    return name;
}else{
    console.log("Not found in TTS - attempting to approximate: " + name)
    const approx = getBestMatch(name, source);
    console.log("Approximating: " + approx);
    console.log(source[approx]);
    return approx;
}
}


// var t = "hero\
// 500/500\
// Count Dooku (233)\
// - Force Choke (5)\
// - Fear (3)\
// - Force Push (10)\
// - Aggressive Tactics (15)\
// Maul (185)\
// - Force Push (10) - Force Choke (5) - Tenacity (4) - Endurance (6)\
// B1 Battle Droids (36)\
// B1 Battle Droids (46) - HQ Uplink (10)\
// Commands:•Fear, Surprise, Intimidation•••At Last••The Phantom Menace•••You Disappoint Me••Double the Fall•Duel of the Fates••••Standing Orders";

// t = "hero\n\
// 500/800\n\
// Jyn Erso (104)\n\
//  - Duck and Cover (4)\n\
//  - A-180 Configuration (0)\n\
// Rebel Troopers (66)\n\
//  - DLT-20A Trooper (26)\n\
// Rebel Troopers (42)\n\
//  - Recon Intel (2)\n\
// Rebel Veterans (76)\n\
//  - CM-O 93 Trooper (26)\n\
//  - Recon Intel (2)\n\
// Mark II Medium Blaster Trooper (38)\n\
// Rebel Pathfinders (84)\n\
//  - Pao (22)\n\
//  - Duck and Cover (4)\n\
//  - A-300 Configuration (0)\n\
// Rebel Pathfinders (90)\n\
//  - Bistan (28)\n\
//  - Duck and Cover (4)\n\
//  - A-300 Configuration (0)\n\
//  \n\
// Commands:\n\
// •Sabotaged Communications\n\
// ••Push\n\
// ••Trust Goes Both Ways\n\
// •Ambush\n\
// •••Assault\n\
// •••Covering Fire\n\
// ••••Standing Orders\n";

function manuallyFixErrorsInApproximation(s){
    s = s.replace("A-300 Configuration", "a300");
    s = s.replace("A-180 Configuration", "a180");
    return s;
}

function parseFifthTrooper(t) {
    class Deck {
        units;
        commands;
    }
    
    class Unit {
        name;
        abilities;
    }
    
    const text = t.split("Commands:");
    var unitsRaw = text[0];
    const commandsRaw = text[1];

    // Unit cards
    unitsRaw = unitsRaw.split(/\d+\/\d+\n/)[1]; //Remove prefix name + deck points
    var unitsSeparated = unitsRaw.split(/(?<=\)).*\n(?=\w)/);
    // console.log(unitsSeparated);

    // Per unit (name + upgrades)
    unitsSeparated = unitsSeparated.map(u => {
        let unitAndAbilities = u.split(/ \(\d+\)\n*/);
        unitAndAbilities = unitAndAbilities.slice(0, unitAndAbilities.length-1);

        const unitName = unitAndAbilities[0];
        var abilities = unitAndAbilities.slice(1, unitAndAbilities.length); //Separate units from upgrades
        abilities = abilities.map(v => v.substring(3, v.length)); //Remove prefix '-'

        // console.log("---")
        // console.log(unitName);
        // console.log(abilities);
        
        var u = new Unit();
        u.name = unitName;
        u.abilities = abilities;
        return(u)
    });

    // Command cards
    var commands = commandsRaw.split(/\n\•+/);
    commands = commands.slice(1,commands.length);
    commands[commands.length-1] = commands[commands.length-1].replace("\n", ""); //trailing \n
    // console.log(commands);

    var deck = new Deck();
    deck.commands = commands;
    deck.units = unitsSeparated;
    return deck;
}

// var deck = parseFifthTrooper(t);
// console.log(deck);


//create TTS export file
function exportToTts(deck) {
    var sb = "";
    sb += "function onload()\\n";
    sb += "listData = {}\\n";
    sb += "listData.pts = 0\\n";
    sb += "listData.armyFaction = 'separatist'\\n";

    //Add command cards
    sb += "listData.commandCards = {";
    deck.commands.forEach(c => {
        sb += "'" + c + "', ";
        i++;
    });
    sb += "}\\n";

    // console.log(deck.commands);

    sb += "listData.contingencies = {}\\n";


    // listData.commandCards = {'Voracious Ambition', 'Merciless Munitions', 'Deploy the Garrison', 'Reptilian Rampage', 'Lying in Wait', 'Annihilation Looms', 'Standing Orders'}


    sb += "listData.units = {}\\n";

    //Add unit cards
    var i = 1;
    deck.units.forEach(c => {
        let foundName = getUnitNameInTts(c.name, units);
        sb += "listData.units[" + i + "] = {}\\n";
        sb += "listData.units[" + i + "].unitName = '" + foundName + "'\\n";
        sb += "listData.units[" + i + "].varName = '" + units[foundName] + "'\\n";
        sb += "listData.units[" + i + "].upgrades = {}\\n";

        // Units upgrades
        var j = 1;
        c.abilities.forEach(a => {
            a = manuallyFixErrorsInApproximation(a);
            const foundName = getUnitNameInTts(a, upgrades);
            sb += "listData.units[" + i + "].upgrades[" + j + "] = {name = '" + foundName + "', varName = '" + upgrades[foundName] + "'}\\n";
            j++;
        });
        
        i++;
    });

    sb += "listData.battlefieldDeck = {}\\n";
    sb += "listData.battlefieldDeck.objective = {}\\n";
    sb += "listData.battlefieldDeck.deployment = {}\\n";
    sb += "listData.battlefieldDeck.conditions = {}\\n";
    sb += "listData.battlefieldDeck.deployment[1] = 'Battle Lines'\\n";
    sb += "listData.battlefieldDeck.deployment[2] = 'The Long March'\\n";
    sb += "listData.battlefieldDeck.deployment[3] = 'Disarray'\\n";
    sb += "listData.battlefieldDeck.deployment[4] = 'Major Offensive'\\n";
    sb += "listData.battlefieldDeck.objective[1] = 'Key Positions'\\n";
    sb += "listData.battlefieldDeck.objective[2] = 'Breakthrough'\\n";
    sb += "listData.battlefieldDeck.objective[3] = 'Intercept the Transmissions'\\n";
    sb += "listData.battlefieldDeck.objective[4] = 'Recover the Supplies'\\n";
    sb += "listData.battlefieldDeck.conditions[1] = 'Clear Conditions'\\n";
    sb += "listData.battlefieldDeck.conditions[2] = 'Limited Visibility'\\n";
    sb += "listData.battlefieldDeck.conditions[3] = 'Rapid Reinforcements'\\n";
    sb += "listData.battlefieldDeck.conditions[4] = 'Hostile Environment'\\n";
    sb += "self.createButton({click_function = 'dud', function_owner = self, label = '[' .. listData.pts .. ' pts]', position = {0, 0.4, -0.55}, rotation = {0, 180, 0}, scale = {0.5, 0.5, 0.5}, width = 2000, height = 400, font_size = 300, color = {0.7573, 0.7573, 0.7573, 0.01}, font_color = {0.303, 0.1814, 0.0849, 100}})\\n";
    sb += "end\\n";
    sb += "function dud() end\\n";

    return sb;
}

document.querySelectorAll('textarea').forEach(function(node) {
    console.log("Start...");
    if (node.className === "MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMultiline MuiOutlinedInput-inputMultiline MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" && node.getAttribute("aria-invalid") == "false" ) {
        const t = node.innerHTML;
        const parsedData = parseFifthTrooper(t);
        // console.log(parsedData);
        const exp = exportToTts(parsedData);
        var s = "{ \"SaveName\": \"\", \"GameMode\": \"\", \"Date\": \"\", \"VersionNumber\": \"\", \"GameType\": \"\", \"GameComplexity\": \"\", \"Tags\": [], \"Gravity\": 0.5, \"PlayArea\": 0.5, \"Table\": \"\", \"Sky\": \"\", \"Note\": \"\", \"Rules\": \"\", \"TabStates\": {}, \"LuaScript\": \"\", \"LuaScriptState\": \"\", \"XmlUI\": \"\", \"ObjectStates\": [ { \"GUID\": \"5e2960\", \"Name\": \"Custom_Model\", \"Transform\": { \"posX\": -30.665741, \"posY\": 0.9088104, \"posZ\": -24.15387, \"rotX\": -0.00160418, \"rotY\": 359.982452, \"rotZ\": -4.94571736E-07, \"scaleX\": 1.0, \"scaleY\": 1.0, \"scaleZ\": 1.0 }, \"Nickname\": \"(RENAME ME!) Army Data Disk [499 Points]\", \"Description\": \"For quick loading of army lists:\\n\\nRight Click me and Save Object.\\n\\nGo to Menu > Objects > Saved Objects > select this Data Disk to load.\\n\\nInsert Data Disk into Army Loader Mount and Click Load Army to instantly load your army list!\", \"GMNotes\": \"\", \"ColorDiffuse\": { \"r\": 1.0, \"g\": 1.0, \"b\": 1.0 }, \"LayoutGroupSortIndex\": 0, \"Locked\": false, \"Grid\": true, \"Snap\": true, \"IgnoreFoW\": false, \"MeasureMovement\": false, \"DragSelectable\": true, \"Autoraise\": true, \"Sticky\": true, \"Tooltip\": true, \"GridProjection\": false, \"HideWhenFaceDown\": false, \"Hands\": false, \"CustomMesh\": { \"MeshURL\": \"http:\/\/cloud-3.steamusercontent.com\/ugc\/785234780862652963\/3D489626E9A3E45C9CDEC20A5626EE3732B4173C\/\", \"DiffuseURL\": \"http:\/\/cloud-3.steamusercontent.com\/ugc\/785234780862653186\/7A58CBD9F613D90F6C2B7BC0B82E64614DB2A65C\/\", \"NormalURL\": \"\", \"ColliderURL\": \"\", \"Convex\": true, \"MaterialIndex\": 3, \"TypeIndex\": 0, \"CastShadows\": true }, \"LuaScript\": \"REPLACEME\", \"LuaScriptState\": \"\", \"XmlUI\": \"\" } ] }";
        const res = s.replace("REPLACEME", exp)
        console.log(parsedData);
        chrome.runtime.sendMessage({
            content: res
        });
    };
});

// const parsedData = parseFifthTrooper(t);
// const exp = exportToTts(parsedData);
