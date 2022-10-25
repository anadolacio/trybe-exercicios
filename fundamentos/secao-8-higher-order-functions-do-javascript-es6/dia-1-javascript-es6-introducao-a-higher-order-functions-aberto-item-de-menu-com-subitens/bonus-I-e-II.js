const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const dragonDamage = (dragon) => {
    const minDamage = 15;
    const maxDamage = Math.floor(Math.random() * dragon.strength);
    if (maxDamage > minDamage) {
        return maxDamage;
    }
    return minDamage;
  };

  const warriorDamage = (warrior) => {
    const minDamage = warrior.strength;
    const maxDamage =  minDamage * warrior.weaponDmg;
    const warriorFinalDamage =  Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);
    return warriorFinalDamage;
    
  };

  const mageDamage = (mage) => {
    const minDamage = mage.intelligence;
    const maxDamage =  mage.intelligence * 2;
    const mageFinalDamage =  Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);
    
    if ( mage.mana < 15) {
    mage.mana -= 0;
    return 'Não possui mana suficiente'
   } else {
    mage.mana -= 15;
   }

    return mage.mana;
    
  };
    
    const gameActions = {
      warriorTurn: (warriorDamage) => {
        warrior.damage = warriorDamage(warrior);
        dragon.healthPoints -= warriorDamage(warrior);
      },
      mageTurn: (mageDamage) => {
        mage.damage = mageDamage(mage);
        mage.mana -= mageDamage(mage);
        dragon.healthPoints -= mageDamage(mage);
      },
      dragonTurn: (dragonDamage) => {
        dragon.damage = dragonDamage(dragon);
        mage.healthPoints -= dragonDamage(dragon);
        warrior.healthPoints -= dragonDamage(dragon); 
      },
      turnResults: () => battleMembers,
    };
    
    // ;
    // gameActions.mageTurn(mageDamage);
    // gameActions.dragonTurn(dragonDamage);
    
    gameActions.warriorTurn(warriorDamage);
    gameActions.mageTurn(mageDamage);
    gameActions.dragonTurn(dragonDamage);
    console.log(gameActions.turnResults());
    



