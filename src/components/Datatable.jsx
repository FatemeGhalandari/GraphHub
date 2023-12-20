import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "./datatablSource";
import { Link } from "react-router-dom";

const Datatable = () => {
  const actions = [
    {
      field: "view",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="flex items-center gap-4">
            <Link to="/users/test">
              <button className="border-[#d1d5db] border-2 text-green px-3 py-1 rounded-md mr-3">
                View
              </button>
            </Link>
            <button className="border-[#d1d5db] border-2 text-[#dc2626] px-3 py-1 rounded-md">
              Delete
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <div className=" w-[100%] p-5">
      <div className="flex items-center justify-between mb-2 w-[100%] text-[24px]  text-navItemColor">
        <h1>Add New User</h1>
        <Link
          to="/users/new"
          className="text-[16px] border-[#d1d5db] border-2 text-green px-3 py-1 rounded-md "
        >
          Add New
        </Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actions)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
