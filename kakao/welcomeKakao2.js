/**
 * 길이가 n인 배열에 1부터 n까지 숫자가 중복 없이 한 번씩 들어 있는지를 확인하려고 합니다.
 * 1부터 n까지 숫자가 중복 없이 한 번씩 들어 있는 경우 true를, 아닌 경우 false를 반환하도록 함수 solution을 완성해주세요.
 * @param arr
 * @returns {boolean}
 */
function solution(arr) {
    var expected = 0;
    var result = 0;
    var endNum = arr.length;
    expected = endNum % 2 === 0 ? (endNum + 1) * (endNum / 2) : (endNum + 1) * Math.floor(endNum / 2) + Math.round(endNum / 2);
    for (var i = 0; i < endNum; i++) {
        result += arr[i];
    }

    return expected === result;
}