import {
  iCellData,
  iData,
} from "../../custom_typings/interfaces/table.interfaces";
import { FC, useState } from "react";
import TBody from "./TBody";
import THead from "./THead";

export interface iTableProps {
  data: iData[] | undefined | iData;
  setModalInfo: (info: iCellData | string) => void;
}

const Table: FC<iTableProps> = ({ data, setModalInfo }) => {
  const [addExpand, setAddExpand] = useState(true);

  function removeExpand() {
    setAddExpand(false);
  }

  const [filterArray, setFilterArray] = useState<[string, number]>([
    "noFilter",
    3,
  ]);

  function changeFilter(header: string, sortOrder: number) {
    setFilterArray([header, sortOrder]);
  }

  function filter(data: iData[], header: string, filterOrder: number) {
    const dataCopy = [...data];
    if (filterOrder === 1) {
      switch (typeof dataCopy[0][header]) {
        case "string":
          return dataCopy.sort(
            (a, b) =>
              a[header][0].toLowerCase().charCodeAt() -
              b[header][0].toLowerCase().charCodeAt()
          );
        case "number":
          return dataCopy.sort((a, b) => a[header] - b[header]);
      }
    } else if (filterOrder === 2) {
      switch (typeof dataCopy[0][header]) {
        case "string":
          return dataCopy.sort(
            (a, b) =>
              b[header][0].toLowerCase().charCodeAt() -
              a[header][0].toLowerCase().charCodeAt()
          );
        case "number":
          return dataCopy.sort((a, b) => b[header] - a[header]);
      }
    }
    return dataCopy;
  }

  if (data) {
    const [sortedData, nestedKeys] = (() => {
      if (Array.isArray(data)) {
        const nestedKeys = Object.keys(data[0]).filter((key) => (Array.isArray(data[0][key]) || typeof data[0][key] === "object"));
        return [filter(data, ...filterArray), nestedKeys];
      } else return [data, Object.keys(data)];
    })();
    return (
      <div className="flex justify-center mt-4 w-4/5">
        {data && (
          <table className="table">
            <THead
              data={sortedData}
              addExpand={addExpand}
              changeFilter={changeFilter}
              nestedKeys={nestedKeys}
            />
            <TBody
              setModalInfo={setModalInfo}
              data={sortedData}
              removeExpand={removeExpand}
              nestedKeys={nestedKeys}
            />
          </table>
        )}
      </div>
    );
  } else {
    return <></>;
  }
};

export default Table;
