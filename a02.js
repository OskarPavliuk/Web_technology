let array = ["hund", "katze", "maus", "elefant", "schlange", "stachelschwein", "affe", "giraffe"];

function addArrayElement(element) {
  let arrayCopy = [...array];
  let exists_already = false;
  for (let i = 0; i < arrayCopy.length; i++){
    if (arrayCopy[i] == element){
       exists_already = true;
       break;
    }
  }
  if (exists_already == false){
    arrayCopy.push(element);
  }
  return arrayCopy;
}


function getArrayElements(number, startIndex) {
  let result = [];
  for (let i = 0; i < number; i++){
    result.push(array[startIndex + i]);
  } 
  return result;
}



function deleteArrayElements(number, startIndex, everyIth) {
  let arrayCopy = [...array]; 
  let removedItems = [];
  
  for (let k = 0; k < number; k++) {
    let indexToRemove = startIndex + k * everyIth;

    if (indexToRemove >= arrayCopy.length) {
      if (k === 0) indexToRemove = startIndex; 
      else break;
    }

    removedItems.push(arrayCopy[indexToRemove]);
    arrayCopy[indexToRemove] = undefined;
  }

  return {
    newResult: arrayCopy,
    removedItems: removedItems
  };
}
