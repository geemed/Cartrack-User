import axios from "axios";

import * as types from "./user.type";

const action = (result, type) => ({
  type,
  result,
  name: "user"
});

export const getUsers = async() => {
  const result = await axios("https://jsonplaceholder.typicode.com/users");
  return action(result.data, types.GET_USERS);
}

export const filterData = (data, value) => {
  const res = data.filter((d) => {
    const v = recurringFilter(d, value);
    
    return v.flat(Infinity).some(s => s);
  });

  return action(res, types.GET_USERS_SEARCH);
};

const recurringFilter = (obj, value) => {
  const res = Object.keys(obj)
    .map((r) => {
      if (r === "id") return false;
      if (typeof obj[r] === 'object')
        return recurringFilter(obj[r], value);

      return obj[r].toString().indexOf(value.toString()) > -1;
    });

  return res;
};