import { FC } from "react";
import {
  iCellData,
  iData,
} from "../../../custom_typings/interfaces/table.interfaces";
import NestedCell from "./NestedCell";

export interface iExtraRowProps {
  data: iData[];
  setModalInfo: (info: iCellData | string) => void;
  numberOfColumns: number;
}

const ExtraRow: FC<iExtraRowProps> = ({
  data,
  setModalInfo,
  numberOfColumns,
}) => {
  const cellList = data.map((cellData: iData, i: number) => {
    return (
      <div key={i} className="flex flex-col items-center mr-3">
        <p className="extra-row-caption">{cellData.key}</p>
        <NestedCell setModalInfo={setModalInfo} cell={cellData.content} />
      </div>
    );
  });

  return (
    <tr className="extra-row">
      <td></td>
      <td colSpan={numberOfColumns}>
        <div className="flex flex-row my-2 justify-between">{cellList}</div>
      </td>
    </tr>
  );
};

export default ExtraRow;
