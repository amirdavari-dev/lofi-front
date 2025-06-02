import { useState } from "react";
import TableOfContentIem from "./tableOfContentItem";

const TableOfContents = () => {
  const tableOfContent = [
    {
      name: "Why Social Media Content is a Game-Changer for Real Estate Agents",
      id: 1,
    },
    {
      name: "Laying the Foundation: Your Real Estate Social Media Content Strategy",
      id: 2,
    },
    {
      name: "Generating Irresistible Social Media Content Ideas for Real Estate Agents",
      id: 3,
    },
    {
      name: "Optimizing Your Content for Maximum Reach and Impact",
      id: 4,
    },
  ];
  const [tableItemKey, setTableItemKey] = useState<number>(1);  
  return (
    <div className="table-contents">
      {tableOfContent.map((tableItem, index) => {
        const active = tableItem.id === tableItemKey;
        return <TableOfContentIem key={index} {...tableItem} active={active} setTableItemKey={setTableItemKey} />;
      })}
    </div>
  );
};
export default TableOfContents;
