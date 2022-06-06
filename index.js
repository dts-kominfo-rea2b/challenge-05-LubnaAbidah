const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (namesArray, orderBy) => {
  let namesArr = orderBy(namesArray);
  let arr = [];
  let resultSort = [];
  let sort = 0;
  for (let i = 0; i < namesArr.length; i++)
  {
      arr[i] = namesArr[i];
      sort += 1;
      
      resultSort[i] = sort+". "+arr[i];
  }
  return resultSort;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (namesArr) => {
   return namesArr.sort()
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (namesArr) => {
  return namesArr.reverse()
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter)?.join("\n")
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
