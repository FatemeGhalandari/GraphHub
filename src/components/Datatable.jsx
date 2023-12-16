import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "./datatablSource";
const Datatable = () => {
  const actions = [
    {
      field: "view",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="flex items-center gap-4">
            <button className="border-[#d1d5db] border-2 text-green px-3 py-1 rounded-md mr-3">
              View
            </button>
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
