export let summoners = {
  SummonerBarrier: {
    id: "SummonerBarrier",
    name: "Барьер",
    description: "Защищает вашего чемпиона от 100-450 урона в течение 2 секунд.",
    tooltip: "Временно поглощает {{ f1 }} урона, получаемого вашим чемпионом в течение 2 секунд.",
    cooldown: [120],
    reducedCooldown: [102],
    range: [1200],
    image: {
      full: "SummonerBarrier.png",
      sprite: "spell0.png",
      group: "spell",
      x: 0,
      y: 0,
      w: 48,
      h: 48,
    },
  },
  SummonerDot: {
    id: "SummonerDot",
    name: "Воспламенение",
    description: "Поджигает нанося 72-380 чистого урона в течение 5 секунд, делая врага видимым и Страшные раны (60%).",
    tooltip:
      'Наносит <span class="colorFEFCFF">{{ f1 }}</span> чистого урона вражескому чемпиону в течение 5 сек., делает его видимым и накладывает на него Страшные раны ({{ grievousamount*100 }}%) на это же время.<br /><br /><rules>(Страшные раны уменьшают силу лечения и регенерации на указанную величину в процентах. Если на чемпиона наложено несколько Страшных ран, действуют только самые эффективные. Невидимые чемпионы не раскрываются.)</rules>',
    cooldown: [100],
    reducedCooldown: [85],
    range: [600],
    image: {
      full: "SummonerDot.png",
      sprite: "spell0.png",
      group: "spell",
      x: 96,
      y: 0,
      w: 48,
      h: 48,
    },
  },
  SummonerExhaust: {
    id: "SummonerExhaust",
    name: "Изнурение",
    description: "Изнуряет выбранного чемпиона, на 2,5 сек. уменьшая его скорость передвижения на 60%, а наносимый им урон - на 40%.",
    tooltip: "Изнуряет выбранного чемпиона, на 3 сек. уменьшая его скорость передвижения на {{ f3 }}%, а наносимый им урон - на {{ f2 }}%.",
    cooldown: [100],
    reducedCooldown: [85],
    range: [650],
    image: {
      full: "SummonerExhaust.png",
      sprite: "spell0.png",
      group: "spell",
      x: 144,
      y: 0,
      w: 48,
      h: 48,
    },
  },
  SummonerFlash: {
    id: "SummonerFlash",
    name: "Скачок",
    description: "Телепортирует вашего чемпиона на небольшое расстояние",
    tooltip: "Телепортирует вашего чемпиона на небольшое расстояние в направлении курсора.",
    cooldown: [150],
    reducedCooldown: [127.5],
    range: [425],
    image: {
      full: "SummonerFlash.png",
      sprite: "spell0.png",
      group: "spell",
      x: 192,
      y: 0,
      w: 48,
      h: 48,
    },
  },
  SummonerHaste: {
    id: "SummonerHaste",
    name: "Призрак",
    description:
      "Изначальный бонус 50% ms уменьшается до 25% ms в течение 8 секунд. Продолжительность действия Призрака продлевается при получении убийства или содействия.",
    tooltip:
      "Увеличивает скорость передвижения чемпиона на {{ movespeedmod }} и позволяет ему проходить сквозь бойцов в течение {{ duration }} сек.<br /><br />При получении убийства или содействия продолжительность действия Призрака продлевается на {{ takedownextension }} сек.",
    cooldown: [90],
    reducedCooldown: [76.5],
    range: [200],
    image: {
      full: "SummonerHaste.png",
      sprite: "spell0.png",
      group: "spell",
      x: 240,
      y: 0,
      w: 48,
      h: 48,
    },
  },
  SummonerHeal: {
    id: "SummonerHeal",
    name: "Исцеление",
    description:
      "60-242hp и 20%ms на 1 секунду владельцу и самому раненому союзнику. Бойцам, недавно подвергавшимся Исцелению, восстанавливается в два раза меньше здоровья.",
    tooltip:
      'Восстанавливает {{ f1 }} здоровья вашему чемпиону и указанному союзному чемпиону и увеличивает их скорость передвижения на 30% на 1 сек. Бойцам, недавно подвергавшимся Исцелению, восстанавливается в два раза меньше здоровья.<br /><br /><span class="colorFFFF00">Если заклинание не может найти цель, оно использует в ее качестве самого израненного союзного чемпиона в пределах радиуса действия.</span>',
    cooldown: [130],
    reducedCooldown: [110.5],
    range: [850],
    image: {
      full: "SummonerHeal.png",
      sprite: "spell0.png",
      group: "spell",
      x: 288,
      y: 0,
      w: 48,
      h: 48,
    },
  },
  SummonerSmite: {
    id: "SummonerSmite",
    name: "Кара",
    description:
      "Наносит 600 чистого урона эпическому, большому монстру либо миньону. Может накапливаться до 2 зарядов (заряд дается раз в 45(38) сек.).",
    tooltip:
      'Наносит <span class="colorFEFCFF">{{ f1 }}</span> чистого урона выбранному монстру или миньону. При использовании против монстра дополнительно восстанавливает <span class="colorFFFFFF">{{ f6 }}</span> <span class="colorFF6666">(+{{ f7 }})</span> здоровья.<br /><br />Новый заряд Кары дается раз в {{ ammorechargetime }} сек., а всего может накапливаться до 2 зарядов.<br /><br /><rules>Нельзя применять к небольшим монстрам.</rules>',
    cooldown: [10],
    reducedCooldown: [8.5],
    range: [500],
    image: {
      full: "SummonerSmite.png",
      sprite: "spell0.png",
      group: "spell",
      x: 0,
      y: 48,
      w: 48,
      h: 48,
    },
  },
};
