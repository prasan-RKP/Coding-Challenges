// Q.1)
/*
function getAppSettings(detailed) {
  if (detailed) {
    return {
      env: "Linux",
      language: "Python",
      userAgent: "Chromium",
    };
  }

  return "Linux";
}

const info = getSystemInfo(false);
console.log(info["Env"].trim());
*/

// info is String not an object so that it gives 'undefined' and calling .trim() like 'undefined'.trim() it throws an error.

// Q.2) Game platform  concept
// Means 0deg -> initialSpeed + 0, 30deg-> initialSpeed - 30, -45deg -> initialSpeed - 45

/*

function calculateFinalSpeed(initialSpeed, inclinations) {
  let res = initialSpeed;

  for (const deg of inclinations) {
    if (deg > 0) {
      res -= deg;
    } else if (deg < 0) {
      res += Math.abs(deg);
    }

    // 🔥 CRITICAL FIX
    if (res <= 0) { 60<=0
      return 0;
    }
  }

  return res;
}

console.log(calculateFinalSpeed(60, [0, 30, 0, -45, 0]));

*/

// The mangintide of the angle of incliantions will always be < 90deg. The speed chnage occurs only once for each piece of land. The function should immediately return 0 as the final speed if an incline reduces the speed to 0 or below which makes the character lose 1 life.




// Q.3) 

class Song {
  name;
  nextSong;
  
  constructor(name) {
    this.name = name;
  }
  
  /**
   * @return {boolean} true if the playlist is repeating, false if not.
   */
  isInRepeatingPlaylist() {
    // Your code goes here
  }
}

let first = new Song("Hello");
let second = new Song("Eye of the tiger");

first.nextSong = second;
second.nextSong = first;

console.log(first.isInRepeatingPlaylist());
