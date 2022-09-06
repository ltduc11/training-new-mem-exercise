import _ from "lodash";

/**
 * sort array by key
 * @array: array want to sort
 * @key: attribute key (type = number)
 * @orderBy: 'descending' or 'ascending'
 * same lodash.orderBy
 */

export const sortArrayByKey = (array, key, orderBy = "descending") => {
  let result = _.cloneDeep(array);
  let compareFunc;
  if (orderBy === "descending") {
    compareFunc = (a, b) => parseFloat(b[key]) - parseFloat(a[key]);
  } else if (orderBy === "ascending") {
    compareFunc = (a, b) => parseFloat(a[key]) - parseFloat(b[key]);
  }
  result.sort(compareFunc);
  // console.log("sort", result);
  return result;
};
