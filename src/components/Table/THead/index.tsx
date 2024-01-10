import { iData } from "../../../custom_typings/interfaces/table.interfaces";
import { FC, useRef } from "react";
import HeaderTable from "./HeaderTable";
import "../index.css";

export interface iTHeadProps {
  data: iData[] | iData;
  addExpand: boolean;
  changeFilter: (header: string, sortOrder: number) => void;
  nestedKeys: string[];
}

const THead: FC<iTHeadProps> = ({ data, addExpand, changeFilter, nestedKeys }) => {
  const currentHeader = useRef("");

  function getKeys() {
    if (Array.isArray(data)) {
      return Object.keys(data ? data[0] : ["NONE"]);
    } else {
      return Object.keys(data ? data : ["NONE"]);
    }
  }

  const keys = getKeys();

  const headerList = keys.map((key) => {
    const hasFilter = (!nestedKeys.includes(key))

    return (
      <HeaderTable
        key={key}
        header={key}
        changeFilter={changeFilter}
        currentHeader={currentHeader}
        hasFilter={hasFilter}
      />
    );
  });

  return (
    <thead>
      <tr className="head-row">
        {addExpand ? <th> </th> : <></>}
        {headerList}
      </tr>
    </thead>
  );
};
export default THead;
