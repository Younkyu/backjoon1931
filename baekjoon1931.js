let input = []
const makeInt = (arr) => arr.map(v => v * 1)

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function(line) {
    input.push(line.trim())
  })
  .on('close', function() {
    // 입력값 처리 및 출력

    // input의 첫번째 인자 제거
    input.shift()
    const arr = input.map(v => makeInt(v.split(' ')))
    // 끝나는 시간이 같을 경우 시작 시간도 체크
    const sortArr = arr.sort((a, b) => {
      if(a[1] !== b[1]){
        return a[1] - b[1]
      }else {
        return a[0] - b[0]
      }
    })

    let last = 0
    // 그리디 알고리즘
    const result = sortArr.reduce((p,v) => {
      if(v[0] >= last) {
        last = v[1]
        return p+1
      }
      return p
    }, 0)

    console.log(result)

  });
