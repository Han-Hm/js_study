/**
 * 직사각형을 만드는 데 필요한 4개의 점 중 3개의 좌표가 주어질 때, 나머지 한 점의 좌표를 구하려고 합니다. 
 * 점 3개의 좌표가 들어있는 배열 v가 매개변수로 주어질 때, 직사각형을 만드는 데 필요한 나머지 한 점의 좌표를 return 하도록 solution 함수를 완성해주세요. 
 * 단, 직사각형의 각 변은 x축, y축에 평행하며, 반드시 직사각형을 만들 수 있는 경우만 입력으로 주어집니다.
 * @param v
 * @returns {*[]}
 */
function solution(v) {
    var x = [];
    var y = [];

    var fn = function (arr, n) {
        var index = arr.indexOf(n);
        if (index > -1) {
            arr.splice(index, 1);
        } else {
            arr.push(n);
        }
    };
    v.forEach(function (coord) {
        fn(x, coord[0]);
        fn(y, coord[1]);
    });

    var answer = [x[0], y[0]];

    return answer;
}
