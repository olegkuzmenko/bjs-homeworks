console.clear();

const weapons = [
  new Knife(),
  new Staff(),
  new Axe(),
  new StormStaff(),
  new LongBow(),
  new Bow(),
];

const getNames = () => weapons.map(weapon => weapon.name);

const getCountReliableWeapons = (durability) => weapons
  .filter(weapon => weapon.durability > durability)
  .length;

const hasReliableWeapons = (durability) => weapons
  .some(weapon => weapon.durability > durability);

const getReliableWeaponsNames = (durability) => weapons
  .filter(weapon => weapon.durability > durability)
  .map(weapon => weapon.name)

const getTotalDamage = () => weapons.reduce((acc, weapon) => {
    acc += weapon.attack;
    return acc;
  }, 0);

const getValuestCountToSumValues = (array, int) => {
  const result = [];
  const sum = array.reduce((acc, item) => {
    acc += item;
    result.push(acc)
    return acc;
  }, 0);
  return sum >= int ? result.findIndex(item => item >= int) + 1 : array.length;
};


