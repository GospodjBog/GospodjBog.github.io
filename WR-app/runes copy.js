export const runes = {
  keystone: {
    electroCute: {
      name: "Electrocute",
      icon: "electrocute.png",
      activity: "3 отдельных атаки или умения в течении 3 секунд",
      cooldown: [20],
      effect: {
        damage: {
          type: "adaptive",
          flatDamage: [40, 194],
          apMultiplier: [25],
          adMultiplier: [40],
        },
      },
    },
    aery: {
      name: "Aery",
      icon: "aery.png",
      activity: "3 отдельных атаки или умения в течении 3 секунд",
      cooldown: [20],
      effect: {
        damage: {
          flatDamage: [40, 194],
          apMultiplier: [25],
          adMultiplier: [40],
        },
      },
    },
    phaseRush: {
      name: "Phase rush",
      icon: "phase-rush.png",
    },

    conqueror: {
      name: "Conqueror",
      icon: "conqueror.png",
    },

    fleetFootWork: {
      name: "Fleet footwork",
      icon: "fleet-footwork.png",
    },

    graspOfTheUndying: {
      name: "Grasp of the undying",
      icon: "grasp-of-the-undying.png",
    },

    aftershock: {
      name: "Aftershock",
      icon: "aftershock.png",
    },

    electroCute: {
      name: "Font of life",
      icon: "font-of-life.png",
    },

    krakenSlayer: {
      name: "Kraken slayer",
      icon: "kraken-slayer.png",
    },

    lethalTempo: {
      name: "Lethal tempo",
      icon: "lethal-tempo.png",
    },
  },

  domination: {
    brutal: {
      name: "Brutal",
      icon: "brutal.png",
    },

    gatheringStorm: {
      name: "Gathering storm",
      icon: "gathering-storm.png",
    },

    hunterVampirism: {
      name: "Hunter - Vampirism",
      icon: "hunter-vampirism.png",
    },

    triumph: {
      name: "Triumph",
      icon: "triumph.png",
    },

    suddenImpact: {
      name: "Sudden impact",
      icon: "sudden-impact.png",
    },

    weakness: {
      name: "Weakness",
      icon: "weakness.png",
    },

    scorch: {
      name: "Scorch",
      icon: "scorch.png",
    },

    giantSlayer: {
      name: "Giant slayer",
      icon: "giant-slayer.png",
    },
  },

  resolve: {
    adaptiveCarapace: {
      name: "Adaptive Carapace",
      icon: "adaptive-carapace.png",
    },

    conditioning: {
      name: "Conditioning",
      icon: "conditioning.png",
    },

    hunterTitan: {
      name: "Hunter - Titan",
      icon: "hunter-titan.png",
    },

    secondWind: {
      name: "Second wind",
      icon: "second-wind.png",
    },

    loyalty: {
      name: "Loyalty",
      icon: "loyalty.png",
    },

    bonePlating: {
      name: "Bone Plating",
      icon: "bone-plating.png",
    },

    ultimateShield: {
      name: "Ultimate shield",
      icon: "ultimate-shield.png",
    },

    nullifyingOrb: {
      name: "Nullifying orb",
      icon: "nullifying-orb.png",
    },
  },

  inspiration: {
    pathfinder: {
      name: "Pathfinder",
      icon: "pathfinder.png",
    },

    mastermind: {
      name: "Mastermind",
      icon: "mastermind.png",
    },

    hunterGenius: {
      name: "Hunter - genius",
      icon: "hunter-genius.png",
    },

    sweetTooth: {
      name: "Sweet tooth",
      icon: "sweet-tooth.png",
    },

    packHunter: {
      name: "Pack hunter",
      icon: "pack-hunter.png",
    },

    manaflowBand: {
      name: "Manaflow band",
      icon: "manaflow-band.png",
    },

    nimbusCloak: {
      name: "Nimbus cloak",
      icon: "nimbus-cloak.png",
    },

    demolish: {
      name: "Demolish",
      icon: "demolish.png",
    },
  },
};

// const effects = {
//     apDmg: {
//       value: function () {
//         let apDmg = flatDmg + ap * apMultiplier;
//         return apDmg;
//       },
//     },
//     adDmg: "",
//     trDgm: "",
//   };
