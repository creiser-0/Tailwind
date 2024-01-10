import {
  iData,
  iCellData,
} from "../../../custom_typings/interfaces/table.interfaces";
import { FC, useEffect, useRef, useState } from "react";
import Expand from "./Expand";
import ExtraRow from "./ExtraRow";
import ShowMore from "./ShowMore";

interface iBodyRowProps {
  rowData: iData;
  addExpand: boolean;
  setModalInfo: (info: iCellData | string) => void;
  setAddExpand: (val: boolean) => void;
  removeExpand: () => void;
  style: string;
  nestedKeys: string[];
}

const BodyRow: FC<iBodyRowProps> = ({
  rowData,
  addExpand,
  setModalInfo,
  nestedKeys,
  style,
}) => {
  const [canExpand, setCanExpand] = useState(true);

  const extraRowData = useRef<any[]>([]);

  const keys = Object.keys(rowData);

  const numberOfColumns = keys.length;

  useEffect(() => {
    nestedKeys.map((key) => {
      extraRowData.current = [
        ...extraRowData.current,
        { content: rowData[key], key: key },
      ];
    });
  }, []);

  const cellsList = keys.map((key) => (
    <td key={key}>
      {nestedKeys.includes(key) ? (
        <ShowMore setModalInfo={setModalInfo} data={rowData[key]} />
      ) : (
        String(rowData[key])
      )}
    </td>
  ));

  return (
    <>
      <tr className={style}>
        {addExpand ? (
          <Expand canExpand={canExpand} setCanExpand={setCanExpand} />
        ) : (
          <></>
        )}
        {cellsList}
      </tr>
      {!canExpand && (
        <ExtraRow
          setModalInfo={setModalInfo}
          data={extraRowData.current}
          numberOfColumns={numberOfColumns}
        />
      )}
    </>
  );
};

export default BodyRow;
