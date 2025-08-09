import { FC } from "react";
import useSortableData from "../hooks/useSortableData";
import Badge from "./Badge";
import Icon from "./Icon";
import TableAvatar from "./TableAvatar";

export interface User {
  id: number;
  users: number;
  role: string;
  type: "DEFAULT" | "CUSTOM" | "SYSTEM-CUSTOM";
  date: string; // YYYY-MM-DD
  status: "Active" | "Inactive";
}

const SortButton = ({ direction, id, onClick, sortBy }) => {
  const arrows = { ascending: "↓", descending: "↑" };
  const arrow = sortBy === id ? arrows[direction] : "↕︎";

  return (
    <button id={id} onClick={onClick}>
      {arrow}
    </button>
  );
};

type Props = {
  tableData: Array<User>;
};

const Table: FC<Props> = ({ tableData }) => {
  const config = { direction: "ascending", key: "invoice" };
  const { requestSort, sortConfig } = useSortableData({
    items: tableData,
    config,
  });

  const handleSortBy = (name: string) => {
    console.log(name);
  };
  return (
    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800 xl:col-span-8">
      <div className="rounded-lg">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto dark:text-slate-300">
            {/* Table header */}
            <thead className="rounded-sm ">
              <tr className=" bg-gray-50 text-gray-500 text-xs text-left font-medium ">
                <th
                  className="px-6 py-3"
                  onClick={() => handleSortBy("invoice")}
                >
                  <div className="text-left w-full flex items-center gap-x-3">
                    <input type="checkbox" className="pl-2" />
                    Name
                    <SortButton
                      direction={sortConfig?.direction}
                      id="description"
                      onClick={() => requestSort("description")}
                      sortBy={sortConfig?.key}
                    />
                  </div>
                </th>
                <th className="">
                  <div>Type</div>
                </th>
                <th>
                  <div className="">Date created</div>
                </th>
                <th className="">
                  <div className="">Status</div>
                </th>
                <th className="">
                  <div className="">Role users</div>
                </th>
                <th className="">
                  <div className="">Action</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="divide-y divide-slate-100 text-sm  dark:divide-slate-700">
              {tableData.map(({ role, date, status, users, type }, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-3">
                    <div className="text-left flex items-center gap-x-3">
                      <input type="checkbox" className="pl-2 w-5 h-5" />
                      {role}
                    </div>
                  </td>
                  <td className="whitespace-nowrap text-sm font-normal text-gray-500">
                    {type}
                  </td>
                  <td className="'whitespace-nowrap">
                    <div className="text-left text-sm font-normal text-gray-500">
                      {new Date(date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  </td>
                  <td className="'whitespace-nowrap">
                    <Badge
                      type={status === "Active" ? "success" : "warn"}
                      icon={status === "Active" ? "CheckMark" : undefined}
                      className={`text-left ${
                        status === "Active" ? "text-green-700" : "text-gray-700"
                      }`}
                      value={status}
                    />
                  </td>
                  <td className="'whitespace-nowrap">
                    <div className="text-left">
                      <TableAvatar count={users} />
                    </div>
                  </td>
                  <td className="'whitespace-nowrap">
                    <div className="text-center">
                      <Icon name="Download" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
