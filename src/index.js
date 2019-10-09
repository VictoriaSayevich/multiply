module.exports = function multiply(first, second) {
  const A = StringToNumber(first.slice('')), B = StringToNumber(second.slice(''));
  let arr = [], buf_size = B.length;
  for (let j = B.length-1, k = 0; j >=0; j--, k++) {
    arr[k] = new Array();
    for (let i = A.length-1; i >= 0; i--) {
      arr[k][i] = A[i] * B[j];
    }
    for (let l = 0; l < k; l++) {
      arr[k].push(0);
    }
    for (let l = buf_size-1; l > 0; l--) {
      arr[k].unshift(0);
    }
    buf_size--;
  }

  let sum = 0, ost = 0;
  const size_i = arr.length, size_j = arr[0].length;
  let arr_sum = new Array (size_j);
  let str_multiply = [], res = "";

  for (let j = size_j-1; j >= 0; j--) {
    for (let i = size_i-1; i >= 0; i--) {
      sum += arr[i][j];
    }
    if (j) {
      if (sum%10+ost > 9) arr_sum[j] = {ostatok: Math.floor((sum+ost)/10), number: (sum%10+ost)%10};
      else arr_sum[j] = {ostatok: Math.floor(sum/10), number: sum%10+ost};
    }
    else arr_sum[j] = {ostatok: Math.floor((sum+ost)/10), number: (sum+ost)};
    ost = arr_sum[j].ostatok;
    sum = 0;
    str_multiply.unshift(arr_sum[j].number.toString());
  }
  return str_multiply.join('');
}

function StringToNumber (arr_str) {
  let arr_num = [];
  for (let i = 0; i < arr_str.length; i++) {
    arr_num.push(+arr_str[i]);
  }
  return arr_num;
}