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
  

var units = {
    "Commander": "commander",
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
    "DH-447 Sniper": "dh447SniperLeader",
    "Proton Charge Saboteur": "protonChargeSaboteurLeader",
    "DLT-19x Sniper": "dlt19xSniper",
    "Sonic Charge Saboteur": "sonicChargeSaboteurLeader",
    "DLT-19x Sniper": "dlt19xSniperLeader",
    "Sonic Charge Saboteur": "sonicChargeSaboteur",
    "T-21 Special Forces Trooper": "isfT21",
    "Del Meeko": "delMeeko",
    "Gideon Hask": "gideonHask",
    "Beskad Duelist": "beskadDuelist",
    "Ursa Wren": "ursaWren",
    "Tristan Wren": "tristanWren",
    "BX-Series Droid Sniper": "bxCommandoDroidSniper",
    "BX-Series Droid Sniper": "bxCommandoDroidSniperLeader",
    "BX-Series Droid Saboteur": "bxCommandoDroidSaboteur",
    "BX-Series Droid Saboteur": "bxCommandoDroidSaboteurLeader",
    "DP-23 Phase I Trooper": "dp23PhaseITrooper",
    "RPS-6 Phase I Trooper": "rps6PhaseITrooper",
    "E-5s B1 Trooper": "e5sB1Trooper",
    "Radiation Cannon B1 Trooper": "radiationCannonB1Trooper",
    "RT-97C Stormtrooper": "rt97CStormtrooper",
    "T-21 Stormtrooper": "t21Stormtrooper",
    "SX-21 Trooper": "sx21Trooper",
    "DLT-20A Trooper": "dlt20ATrooper",
    "DC-15x ARC Trooper": "arcTrooperDC15x",
    "DC-15x ARC Trooper": "arcTrooperDC15xLeader",
    "Echo": "echo",
    "Echo": "echoLeader",
    "Fives": "fives",
    "Fives": "fivesLeader",
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
    console.debug("Found in TTS: " + name)
    return name;
  }else{
    console.debug("Not found in TTS - attempting to approximate: " + name)
    return getBestMatch(name, source);
  }
}


let a = getUnitNameInTts("B2 Super Battle Drois", units);
console.log(a);

a = getUnitNameInTts("Ax-108 'Ground Buzzer'", upgrades);
console.log(a);
