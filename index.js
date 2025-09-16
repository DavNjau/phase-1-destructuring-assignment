const farmAnimals = ['cow', 'horse', 'sheep', 'pig', 'chicken'];

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// strings
const [moo, neigh, baa, oink, cluck] = farmAnimals
console.log([moo, neigh, baa, oink, cluck])
const [bessie, , dolly, babe, little] = farmAnimals
console.log([bessie, , dolly, babe, little])
const [blackAndWhite, ,black, pink,] = farmAnimals
console.log([blackAndWhite, ,black, pink,])

// arrays
const [red, orange, yellow, green, blue, indigo, violet] = colors
console.log([red, orange, yellow, green, blue, indigo, violet])
const [r, o, y, g, b, , v] = colors
console.log([r, o, y, g, b, , v])
const indg = colors[5]
console.log(indg)



// objects
const {
  muppetName,
  color,
  song,
  job,
  partner
} = muppet;

const {
  nestedName,
  nestedColor,
  nestedJob,
  nestedPartner,
  album: {
    theMuppetMovie: {
      song1,
      song2,
      song3,
      song4
    }
  }
} = nestedMuppet;

console.log(muppetName, color, song, job, partner);
console.log(nestedName, nestedColor, nestedJob, nestedPartner);
console.log(song1, song2, song3, song4);
