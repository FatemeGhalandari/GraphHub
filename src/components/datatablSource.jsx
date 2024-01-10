export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="flex items-center">
          <img
            src={params.row.Image}
            alt="avatar"
            className="w-[32px] h-[32px] rounded-[50%] mr-5 object-cover"
          />
          {params.row.FirstName + " " + params.row.LastName}
        </div>
      );
    },
  },
  {
    field: "Email",
    headerName: "Email",
    width: 130,
  },

  {
    field: "Phone",
    headerName: "Phone",
    width: 130,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div
          className={`p-2 rounded-md ${
            params.row.status === "active"
              ? "bg-[#d1fae5] text-darkGreen"
              : "bg-[#fef9c3] text-[#eab308]"
          }`}
        >
          {params.row.status}
        </div>
      );
    },
  },
];

export const productColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "product",
    headerName: "Product",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="flex items-center">
          <img
            src={params.row.Image}
            alt="avatar"
            className="w-[32px] h-[32px] rounded-[50%] mr-5 object-cover"
          />
        </div>
      );
    },
  },
  {
    field: "Price",
    headerName: "Price",
    width: 130,
  },
];
