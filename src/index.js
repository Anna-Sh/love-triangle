/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {


    // убираем разницу между порядковым номером и индексом в массиве
    let fixedPrefences = preferences.map( (element) => (element - 1) );


    let triangles = 0;
    //добавляем сюда Spichonees которые уже состоят в треугольнике
    let spichoneesInTrianles = new Set();

    for (let i=0; i < fixedPrefences.length; i++) {

        let lover1 = i, //первый участник треугольника
            lover1Loves = fixedPrefences[lover1]; // кого любит первый участник

        if (spichoneesInTrianles.has(lover1)) //исключаем Spichonees которые уже в треугольнике
            continue;

        //проверки на зацикленность на самого себя и на тех, кто никого не любит (0)
        if (lover1Loves === -1 || lover1Loves === lover1)
            continue;

        //второй участник и кого он любит
        let lover2 = lover1Loves,
            lover2Loves = fixedPrefences[lover2];

        if (lover2Loves === -1 || lover2Loves === lover2)
            continue;

        //третий участник и кого он любит
        let lover3 = lover2Loves,
            lover3Loves = fixedPrefences[lover3];

        if (lover3Loves === -1 || lover3Loves === lover3)
            continue;

        //если треугольник замкнулся, увеличиваем кол-во треугольников и добавляем участников в множество
        if (lover3Loves === lover1) {
            triangles++;
            spichoneesInTrianles.add(lover1)
                                .add(lover2)
                                .add(lover3)
        }
    }

    return triangles


};

