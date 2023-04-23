function KeystoneRune(name, description, effect) {
  this.name = name;
  this.type = "Keystone";
  this.description = description;
  this.effect = effect;
}

const effects = {
  apDmg: {
    value: function () {
      let apDmg = flatDmg + ap * apMultiplier;
      return apDmg;
    },
  },
  adDmg: "",
  trDgm: "",
};

const runes = {
  keystone: [
    {
      typeName: "keystone",
      electroCute: {
        name: "electrocute",
        icon: "",
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
    },
    {
      typeName: "keystone",
      electroCute: {
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
    },
  ],
};
