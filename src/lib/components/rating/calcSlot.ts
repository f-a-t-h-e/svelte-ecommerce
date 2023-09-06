export default function calcSlot(num:number, length=5) {
    const arr = Array(length)
      .fill(0)
      .map((v, i) => {
        if (i + 1 < num/100) {
          return 100;
        } else if (i + 1 > Math.ceil(num/100)){
          return 0;
        }else {
          return Number((num - (i*100)).toFixed(3))
        }
      });
    return arr;
  }