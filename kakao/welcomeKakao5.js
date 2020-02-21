function solution(land) {
    var answer = 0;

    for (var r = 1, rowLength = land.length; r < rowLength; r++) {
        for (var c = 0; c < 4; c++) {
            var max = 0;
            for (var i = 0; i < 4; i++) {
                if (c !== i && max < land[r - 1][i]) {
                    max = land[r - 1][i];
                }
            }

            land[r][c] += max;
            if (answer < land[r][c]) {
                answer = land[r][c];
            }
        }
    }

    return answer;
}