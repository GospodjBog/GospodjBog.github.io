export const runes = {
  electroCute: {
    typeName: "keystone",
    name: "Electrocute",
    icon: "electrocute.png",
    activity: "3 отдельных атаки или умения в течении 3 секунд",
    cooldown: [20],
    effect: {
      damage: {
        type: "adaptive",
        flatDamage: [40, 194],
        apMultiplier: [0.25],
        adMultiplier: [0.4],
      },
    },
  },
  aery: {
    typeName: "keystone",
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
  phaseRush: { typeName: "keystone", name: "Phase rush", icon: "phase-rush.png" },

  conqueror: { typeName: "keystone", name: "Conqueror", icon: "conqueror.png" },

  fleetFootWork: { typeName: "keystone", name: "Fleet footwork", icon: "fleet-footwork.png" },

  graspOfTheUndying: { typeName: "keystone", name: "Grasp of the undying", icon: "grasp-of-the-undying.png" },

  aftershock: { typeName: "keystone", name: "Aftershock", icon: "aftershock.png" },

  fontOfLife: { typeName: "keystone", name: "Font of life", icon: "font-of-life.png" },

  krakenSlayer: { typeName: "keystone", name: "Kraken slayer", icon: "kraken-slayer.png" },

  lethalTempo: { typeName: "keystone", name: "Lethal tempo", icon: "lethal-tempo.png" },

  brutal: { typeName: "domination", name: "Brutal", icon: "brutal.png" },

  gatheringStorm: { typeName: "domination", name: "Gathering storm", icon: "gathering-storm.png" },

  hunterVampirism: { typeName: "domination", name: "Hunter - Vampirism", icon: "hunter-vampirism.png" },

  triumph: { typeName: "domination", name: "Triumph", icon: "triumph.png" },

  suddenImpact: { typeName: "domination", name: "Sudden impact", icon: "sudden-impact.png" },

  weakness: { typeName: "domination", name: "Weakness", icon: "weakness.png" },

  scorch: { typeName: "domination", name: "Scorch", icon: "scorch.png" },

  giantSlayer: { typeName: "domination", name: "Giant slayer", icon: "giant-slayer.png" },

  adaptiveCarapace: { typeName: "resolve", name: "Adaptive Carapace", icon: "adaptive-carapace.png" },

  conditioning: { typeName: "resolve", name: "Conditioning", icon: "conditioning.png" },

  hunterTitan: { typeName: "resolve", name: "Hunter - Titan", icon: "hunter-titan.png" },

  secondWind: { typeName: "resolve", name: "Second wind", icon: "second-wind.png" },

  loyalty: { typeName: "resolve", name: "Loyalty", icon: "loyalty.png" },

  bonePlating: { typeName: "resolve", name: "Bone Plating", icon: "bone-plating.png" },

  ultimateShield: { typeName: "resolve", name: "Ultimate shield", icon: "ultimate-shield.png" },

  nullifyingOrb: { typeName: "resolve", name: "Nullifying orb", icon: "nullifying-orb.png" },

  pathfinder: { typeName: "inspiration", name: "Pathfinder", icon: "pathfinder.png" },

  mastermind: { typeName: "inspiration", name: "Mastermind", icon: "mastermind.png" },

  hunterGenius: { typeName: "inspiration", name: "Hunter - genius", icon: "hunter-genius.png" },

  sweetTooth: { typeName: "inspiration", name: "Sweet tooth", icon: "sweet-tooth.png" },

  packHunter: { typeName: "inspiration", name: "Pack hunter", icon: "pack-hunter.png" },

  manaflowBand: { typeName: "inspiration", name: "Manaflow band", icon: "manaflow-band.png" },

  nimbusCloak: { typeName: "inspiration", name: "Nimbus cloak", icon: "nimbus-cloak.png" },

  demolish: { typeName: "inspiration", name: "Demolish", icon: "demolish.png" },
};
