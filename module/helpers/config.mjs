export const SIFRP_SYSTEM = {};

/**
 * The set of Ability and Speciality Scores used within the system.
 * @type {Object}
 */

SIFRP_SYSTEM.scores = {
  agility: { 
    ability: 'SIFRP_SYSTEM.Ability.Agility',
    specialities: {
      acrobatics: 'SIFRP_SYSTEM.Speciality.Acrobatics',
      balance: 'SIFRP_SYSTEM.Speciality.Balance', 
      contortions: 'SIFRP_SYSTEM.Speciality.Contortions',
      dodge: 'SIFRP_SYSTEM.Speciality.Dodge',
      quickness: 'SIFRP_SYSTEM.Speciality.Quickness',
    },
  },
  animalHandling: {
    ability: 'SIFRP_SYSTEM.Ability.AnimalHandling',
    specialities: {
      charm: 'SIFRP_SYSTEM.Speciality.Charm_A', //Charm is also a speciality for Persuation
      drive: 'SIFRP_SYSTEM.Speciality.Drive',
      ride: 'SIFRP_SYSTEM.Speciality.Ride',
      train: 'SIFRP_SYSTEM.Speciality.Train',
    },
  },
  athletics: { 
    ability: 'SIFRP_SYSTEM.Ability.Athletics',
    specialities: {
      climb: 'SIFRP_SYSTEM.Speciality.Climb',
      jump: 'SIFRP_SYSTEM.Speciality.Jump',
      run: 'SIFRP_SYSTEM.Speciality.Run',
      strength: 'SIFRP_SYSTEM.Speciality.Strength',
      swim: 'SIFRP_SYSTEM.Speciality.Swim',
      throw: 'SIFRP_SYSTEM.Speciality.Throw',
    },
  },
  awareness: {
    ability: 'SIFRP_SYSTEM.Ability.Awareness',
    specialities: {
      empathy: 'SIFRP_SYSTEM.Speciality.Empathy',
      notice: 'SIFRP_SYSTEM.Speciality.Notice',
    },
  },
  cunning: {
    ability: 'SIFRP_SYSTEM.Ability.Cunning',
    specialities: {
      decipher: 'SIFRP_SYSTEM.Speciality.Decipher',
      logic: 'SIFRP_SYSTEM.Speciality.Logic',
      memory: 'SIFRP_SYSTEM.Speciality.Memory',
    },
  },
  deception: {
    ability: 'SIFRP_SYSTEM.Ability.Deception',
    specialities: {
      act: 'SIFRP_SYSTEM.Speciality.Act',
      bluff: 'SIFRP_SYSTEM.Speciality.Bluff',
      cheat: 'SIFRP_SYSTEM.Speciality.Cheat',
      disguise: 'SIFRP_SYSTEM.Speciality.Disguise',
    },
  },
  endurance: {
    ability: 'SIFRP_SYSTEM.Ability.Endurance',
    specialities: {
      resilience: 'SIFRP_SYSTEM.Speciality.Resilience',
      stamina: 'SIFRP_SYSTEM.Speciality.Stamina',
    },
  },
  fighting: {
    ability: 'SIFRP_SYSTEM.Ability.Fighting',
    specialities: {
      axes: 'SIFRP_SYSTEM.Speciality.Axes',
      bludgeons: 'SIFRP_SYSTEM.Speciality.Bludgeons',
      brawling: 'SIFRP_SYSTEM.Speciality.Brawling',
      fencing: 'SIFRP_SYSTEM.Speciality.Fencing',
      longBlades: 'SIFRP_SYSTEM.Speciality.LongBlades',
      polearms: 'SIFRP_SYSTEM.Speciality.Polearms',
      shields: 'SIFRP_SYSTEM.Speciality.Shields',
      shortBlades: 'SIFRP_SYSTEM.Speciality.ShortBlades',
      spears: 'SIFRP_SYSTEM.Speciality.Spears',
    },
  },
  healing: {
    ability: 'SIFRP_SYSTEM.Ability.Healing',
    specialities: {
      diagnose: 'SIFRP_SYSTEM.Speciality.Diagnose',
      treatailment: 'SIFRP_SYSTEM.Speciality.TreatAilment',
      treatinjury: 'SIFRP_SYSTEM.Speciality.TreatInjury',
    },
  },
  language: {
    ability: 'SIFRP_SYSTEM.Ability.Language',
    specialities: {

    },
  },
  knowledge: {
    ability: 'SIFRP_SYSTEM.Ability.Knowledge',
    specialities: {
      education: 'SIFRP_SYSTEM.Speciality.Education',
      research: 'SIFRP_SYSTEM.Speciality.Research',
      streetwise: 'SIFRP_SYSTEM.Speciality.Streetwise',
    },
  },
  marksmanship: {
    ability: 'SIFRP_SYSTEM.Ability.Marksmanship',
    specialities: {
      bows: 'SIFRP_SYSTEM.Speciality.Bows',
      crossbows: 'SIFRP_SYSTEM.Speciality.Crossbows',
      siege: 'SIFRP_SYSTEM.Speciality.Siege',
      thrown: 'SIFRP_SYSTEM.Speciality.Thrown',
    },
  },
  persuasion: {
    ability: 'SIFRP_SYSTEM.Ability.Persuasion',
    specialities: {
      bargain: 'SIFRP_SYSTEM.Speciality.Bargain',
      charm: 'SIFRP_SYSTEM.Speciality.Charm_P', //Charm is also a speciality for Animal Handling
      convince: 'SIFRP_SYSTEM.Speciality.Convince',
      incite: 'SIFRP_SYSTEM.Speciality.Incite',
      intimidate: 'SIFRP_SYSTEM.Speciality.Intimidate',
      seduce: 'SIFRP_SYSTEM.Speciality.Seduce',
      taunt: 'SIFRP_SYSTEM.Speciality.Taunt',
    },
  },
  status: {
    ability: 'SIFRP_SYSTEM.Ability.Status',
    specialities: {
      breeding: 'SIFRP_SYSTEM.Speciality.Breeding',
      reputation: 'SIFRP_SYSTEM.Speciality.Reputation',
      stewardship: 'SIFRP_SYSTEM.Speciality.Stewardship',
      tournaments: 'SIFRP_SYSTEM.Speciality.Tournaments',
    },
  },
  stealth: {
    ability: 'SIFRP_SYSTEM.Ability.Stealth',
    specialities: {
      blendIn: 'SIFRP_SYSTEM.Speciality.BlendIn',
      sneak: 'SIFRP_SYSTEM.Speciality.Sneak',
    },
  },
  survival: {
    ability: 'SIFRP_SYSTEM.Ability.Survival',
    specialities: {
      forage: 'SIFRP_SYSTEM.Speciality.Forage',
      hunt: 'SIFRP_SYSTEM.Speciality.Hunt',
      orientation: 'SIFRP_SYSTEM.Speciality.Orientation',
      track: 'SIFRP_SYSTEM.Speciality.Track',
    },
  },
  thievery: {
    ability: 'SIFRP_SYSTEM.Ability.Thievery',
    specialities: {
      picklock: 'SIFRP_SYSTEM.Speciality.PickLock',
      sleightOfHand: 'SIFRP_SYSTEM.Speciality.SleightOfHand',
      steal: 'SIFRP_SYSTEM.Speciality.Steal',
    },
  },
  warfare: {
    ability: 'SIFRP_SYSTEM.Ability.Warfare',
    specialities: {
      command: 'SIFRP_SYSTEM.Speciality.Command',
      strategy: 'SIFRP_SYSTEM.Speciality.Strategy',
      tactics: 'SIFRP_SYSTEM.Speciality.Tactics',
    },
  },
  will: {
    ability: 'SIFRP_SYSTEM.Ability.Will',
    specialities: {
      courage: 'SIFRP_SYSTEM.Speciality.Courage',
      coordinate: 'SIFRP_SYSTEM.Speciality.Coordinate',
      dedication: 'SIFRP_SYSTEM.Speciality.Dedication',
    },
  },
};