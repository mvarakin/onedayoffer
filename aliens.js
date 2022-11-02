
module.exports = function (data) {

  let strings = []
  let numbers = []

  data.forEach(({ time, value }) => {
    if (/^[01]+$/.test(value))
      for (let i = 0; i < value.length; i++)
        numbers[i + time] = value[i]
    else
      for (let i = 0; i < value.length; i++)
        strings[i + time] = value[i]
  })

  return strings.map((x, idx) => numbers[idx] == '1' ? x : null).join('')
}
