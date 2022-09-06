/**
 * sort array by key
 * @array: array want to sort
 * @key: attribute key (type = number)
 * @orderBy: 'descending' or 'ascending'
 */
export const sortArrayByKey = (array, key, orderBy = "descending") => {
  let compareFunc;
  if (orderBy === "descending") {
    compareFunc = (a, b) => parseFloat(b[key]) - parseFloat(a[key]);
  } else if (orderBy === "ascending") {
    compareFunc = (a, b) => parseFloat(a[key]) - parseFloat(b[key]);
  }
  const result = array.sort(compareFunc);
  // console.log("sort", result);
  return result;
};
