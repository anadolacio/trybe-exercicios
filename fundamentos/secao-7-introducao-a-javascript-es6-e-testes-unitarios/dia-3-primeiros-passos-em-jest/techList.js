function techList(array, firstName) {

    if (array.length === 0) {
        return 'Vazio!';
    }
    const sortedArray = array.sort();
    let newObject = [];

    for (let index = 0; index < sortedArray.length; index += 1) {
        newObject.push({
          tech: sortedArray[index],
          name: firstName,
        });
    }

    return newObject;
}





module.exports = techList;