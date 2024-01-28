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
            className="mr-5 h-[32px] w-[32px] rounded-[50%] object-cover"
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
          className={`rounded-md p-2 ${
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
    field: "Title",
    headerName: "Title",
    width: 230,renderCell: (params) => {
      return (
        <div className="flex items-center">
          <img
            src={params.row.img}
            alt="avatar"
            className="mr-5 h-[32px] w-[32px] rounded-[50%] object-cover"
          />
          {params.row.Title}
        </div>
      );
    },
  },
  {
    field: "Price",
    headerName: "Price",
    width: 200,
  },
  {
    field: "Category",
    headerName: "Category",
    width: 200,
  },
  {
    field: "Brand",
    headerName: "Brand",
    width: 200,
  },
];

export const orderColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "product",
    headerName: "Product",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="flex items-center">
          <img
            src={params.row.img}
            alt="avatar"
            className="mr-5 h-[32px] w-[32px] rounded-[50%] object-cover"
          />
          {params.row.product}
        </div>
      );
    },
  },
  {
    field: "customer",
    headerName: "Customer",
    width: 170,
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 100,
  },
  {
    field: "method",
    headerName: "Payment Method",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    renderCell: (params) => {
      return (
        <div
          className={`rounded-md p-2 ${
            params.row.status === "Completed"
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

export const earningColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Name",
    width: 120,
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 90,
  },
  {
    field: "pStatus",
    headerName: "Payment Status",
    width: 130,
  },
  {
    field: "method",
    headerName: "Payment Method",
    width: 150,
  },

  {
    field: "tType",
    headerName: "Transaction Type",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    renderCell: (params) => {
      return (
        <div
          className={`rounded-md p-2 ${
            params.row.status === "Completed"
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
