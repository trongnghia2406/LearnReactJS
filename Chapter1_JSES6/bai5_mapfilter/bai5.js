// map: ko biến đổi mảng ban đầu, trả về array mới
const myArray = ['apple', 'banana', 'orange'];
const myList = myArray.map((item) => `<p>${item}</p>`);
console.log(myList);

const list = myArray.map((item) => {
    return item * 2;
});
console.log(list);
// filter
const ages = [32, 15, 19, 12];
const adultAges = ages.filter((item) => {
    return item >= 18;
});
console.log(adultAges);