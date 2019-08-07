function theBeatlesPlay (musicians, instruments) {
  var emptyArr = [] 
    for (let i=0; i < musicians.length; i++) {
      emptyArr.push(musicians[i] + " " + "plays " + instruments[i]);
    }
  return emptyArr
}

function johnLennonFacts(facts) {
  var lennonArr = []
  var i = 0;
  while (i < facts.length) {
    lennonArr.push(facts[i] + "!!!")
    i++;
  } 
  return lennonArr
}

function iLoveTheBeatles(number) { 
  var loveArr = [];
  
  do  {
    loveArr.push("I love the Beatles!");
    number++;
<<<<<<< HEAD
    } while (number < 15);
=======
    } (while number < 15);
>>>>>>> 78f275847e390f9f15b9bfbdb48d17b727f78ca6
  return loveArr
}