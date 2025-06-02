import { Dispatch, SetStateAction, useEffect } from "react";

type TableItem = {
  name: string;
  id: number;
  active: boolean;
  setTableItemKey: Dispatch<SetStateAction<number>>;
};
const TableOfContentIem = ({
  setTableItemKey,
  id,
  name,
  active,
}: TableItem) => {
  useEffect(() => {
    console.log(active);
  }, [active]);
  return (
    <button
      onClick={() => setTableItemKey(id)}
      className={`table-content-item ${
        active
          ? "blog-table-content-item-active"
          : "blog-table-content-item-off"
      }`}
    >
      {name}
      <span className={`${active ? "content-item-shape" : ""}`}></span>
    </button>
  );
};
export default TableOfContentIem;
