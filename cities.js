module.exports = function (cities) {

  const getLastLetter = (item) => {
    if (item.slice(item.length - 1) === 'ъ' || item.slice(item.length - 1) === 'ь' || item.slice(item.length - 1) === 'ы') {
      return item.slice(item.length - 2, item.length - 1)
    } else {
      return item.slice(item.length - 1)
    }
  }

// первый способ

  let newCities = [cities[0]];

  while (newCities.length < cities.length) {

    const prevCity = cities.find(x => getLastLetter(x) == newCities[0][0].toLowerCase())
    if (prevCity)
      newCities = [prevCity, ...newCities]
    
    const nextCity = cities.find(x => getLastLetter(newCities[newCities.length - 1]) == x[0].toLowerCase())
    if (nextCity)
      newCities = [...newCities, nextCity]
    
    if (!prevCity && !nextCity) break;
    
  }
  
  return newCities

// второй способ
// избегаем использование .find(...) 
//
// строим два массива вида ключ:значение, где 
// для массива first - ключ - это первая буква города
// для массива last - ключ - это последняя буква города
// значение - индекс города во входном массиве cities  

  newCities = [cities[0]];

  const first = {}
  const last = {}

  cities.forEach((x, idx) => {
    if (idx > 0) {
      first[x[0].toLowerCase()] = idx
      last[getLastLetter(x)] = idx
    }
  })
  
  while (newCities.length < cities.length) {

    const prevCity = cities[last[newCities[0][0].toLowerCase()]]
    if (prevCity) {
      newCities = [prevCity, ...newCities]
    }
    const nextCity = cities[first[getLastLetter(newCities[newCities.length - 1])]]
    if (nextCity) {
      newCities = [...newCities, nextCity]
    }

    if (!prevCity && !nextCity) break;

  }

  return newCities
}
