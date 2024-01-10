import { FC, useState } from "react";
import {
  iCellData,
  iData,
} from "../../../custom_typings/interfaces/table.interfaces";
import BodyRow from "./BodyRow";
import "../index.css";

export interface iTBodyProps {
  data: iData[] | iData;
  setModalInfo: (info: iCellData | string) => void;
  removeExpand: () => void;
  nestedKeys: string[];
}

const TBody: FC<iTBodyProps> = ({
  data,
  setModalInfo,
  removeExpand,
  nestedKeys,
}) => {
  const [addExpand, setAddExpand] = useState(true);

  function getRowList() {
    if (Array.isArray(data)) {
      return data.map((rowData, i) => (
        <BodyRow
          setModalInfo={setModalInfo}
          key={i}
          rowData={rowData}
          addExpand={addExpand}
          setAddExpand={setAddExpand}
          removeExpand={removeExpand}
          style={i % 2 == 0 ? "body-row" : "body-row bg-slate-200"}
          nestedKeys={nestedKeys}
        />
      ));
    } else {
      return (
        <BodyRow
          setModalInfo={setModalInfo}
          rowData={data}
          addExpand={addExpand}
          setAddExpand={setAddExpand}
          removeExpand={removeExpand}
          style="body-row"
          nestedKeys={nestedKeys}
        />
      );
    }
  }

  const rowList = getRowList();

  return <tbody className="tbody">{rowList}</tbody>;
};

export default TBody;
