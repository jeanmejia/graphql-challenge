import { Input } from "antd";
import * as React from "react";

const { Search } = Input;
const SearchBar = () => {
  return <Search placeholder="input search text" enterButton />;
};

export default SearchBar;
