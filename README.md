Yandex OneDayOffer 01.11.2022

Задание 1

Сигналы из космоса (30 баллов)

Занимаясь поиском внеземных цивилизаций, Рик и Морти нашли два странных источника сигналов из глубин космоса. Первый источник транслирует строки из букв латинского алфавита, второй - последовательности из нулей единиц. Рику и Морти удалось понять, что если сопоставить сигналы двух источников по времени их появления, то можно расшифровать послание инопланетян. Помогите ученым изобрести прибор для расшифровки.

Формат ввода
На вход подается массив сообщений сигналов в виде объектов следующей структуры:

{
  time: number;
  value: string;
}

Поле time содержит прошедшее количество наносекунд с момента начала наблюдения до получения первого символа сообщения value. Декодирование каждого символа сообщения занимает 1 наносекунду, поэтому второй символ сообщения приходит в момент времени time+1, третий - в момент времени time+2, и т. д.

В массиве хранятся сообщения обоих типов сигналов, так что тип сигнала нужно определять по значению value.

Расшифрованный текст состоит из символов сообщений сигналов первого типа (символы латинского алфавита) в порядке их приема, таких, что в момент их приема был параллельно принят символ 1 из сообщений сигналов второго типа. Гарантируется, что сообщения сигналов одного типа не пересекаются во времени.

Пример входных данных:

[
  {
    time: 0,
    value: 'yandex'
  },
  {
    time: 8,
    value: 'adventure', 
  },
  {
    time: 3,
    value: '010',
  },
  {
    time: 9,
    value: '01111',
  }
]
Формат вывода
Вывод содержит одну строку - расшифрованное сообщение.

Приведенному выше примеру входных данных соответствует ответ: event

Это легко увидеть, разложив символы сообщений на временной шкале:

yandex__adventure

___010___01111_


Задание 2


Игра в города (40 баллов)

Рик и Морти играли в города. Герои запомнили названия всех городов, но забыли в каком порядке они следовали. Нужна ваша помощь!

Напишите программу, которая восстановит порядок следования городов в игре.

Формат ввода
На вход подаётся массив cities. Например:

const cities = [
    'Геленджик',
    'Домодедово',
    'Казань',
    'Люберцы',
    'Нижний Новгород',
    'Орёл',
    'Санкт-Петербург',
];

Формат вывода
Ожидаемый результат:

[
    'Санкт-Петербург',
    'Геленджик',
    'Казань',
    'Нижний Новгород',
    'Домодедово',
    'Орёл',
    'Люберцы',
]
Примечание
- На вход всегда передаётся корректный массив городов, которые можно упорядочить единственным верным образом.
- Название последующего города начинается на ту букву, которой оканчивается название предыдущего города.
- Исключения составляют названия, оканчивающиеся на твёрдый и мягкий знаки. В таких случаях берётся предпоследняя буква.


Задание 3

Пробки на дороге (60 баллов) [cloned]

Рик и Морти создали фирму по грузоперевозкам на Земле. Для работы водителями грузовиков они наняли Рики и Морти из других вселенных. Однако грузовикам сильно ограничили скорость и запретили им делать обгоны для безопасности людей, поскольку Рики и Морти из других вселенных не знаю земных правил. Из-за этих ограничений люди стали жаловаться, что грузовики начали собирать много пробок.

Сколько пробок из грузовиков посчитает Наблюдатель на N-ом километре дороги, если известно на каком километре дороге находится каждый грузовик (position) и его скорость в км/час (speed).

Дополнительно:

Если один грузовик догонят другой, то он начинают двигаться со скоростью впереди идущего. Когда один грузовик догнал другой, то расстоянием между ними можно пренебречь и считать что они находятся на одном и том же километре. Если один грузовик догнал другой на 0 километре дороги, то можно считать что они образовали одну пробку. Пробка - это один грузовик, или группа грузовиков которые, которые двигаются с одинаковой скоростью без промежутков.

Пример:

Входные данные: {"target":100,"trucks":[{"position":0,"speed":4},{"position":2,"speed":2},{"position":4,"speed":1}]} Ответ: 1

Объяснение: Грузовики, стартующие на позиции 0 (скорость 4) и 2 (скорость 2), становятся пробкой, встретившись друг с другом на позиции 4. Пробка движется со скоростью 2. Затем эта пробка (скорость 2) и грузовик, стартующий с позиции 4 (скорость 1), становятся пробкой, встречаясь друг с другом на позиции 6. Пробка движется со скоростью 1, пока не достигнет цели.

Формат ввода
На вход подается объект следующей структуры:

{
  target: number,
  trucks: Array<{position: number, speed: number}>
}
Где:

target - километр на котором стоит Наблюдатель trucks: Array<{position: number, speed: number}> - массив объектов с позицией грузовика и его скоростью

Формат вывода
Необходимо вернуть number - число пробок которые насчитает наблюдатель


Ограничения в каждой задаче: время выполнения 1 секунда, память 64МБ
