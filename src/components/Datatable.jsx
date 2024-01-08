import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "./datatablSource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Datatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let tempData = [];
      try {
        const querySnapshot = await getDocs(collection(db, "users"));

        querySnapshot.forEach((doc) => {
          tempData.push({ id: doc.id, ...doc.data() });
        });
        setData(tempData);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  console.log(data);

  // handle delete function
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actions = [
    {
      field: "view",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-4">
            <Link to="/users/test">
              <button className="border-[#d1d5db] border-2 text-green px-3 py-1 rounded-md mr-3">
                View
              </button>
            </Link>
            <button
              className="border-[#d1d5db] border-2 text-[#dc2626] px-3 py-1 rounded-md cursor-pointer"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <div className=" w-[100%] p-5">
      <div className="flex items-center justify-between mb-2 w-[100%] text-[24px]  ">
        <h1 className="text-navItemColor dark:text-textColor">Add New User</h1>
        <Link
          to="/users/new"
          className="text-[16px] border-[#d1d5db] border-2 text-green px-3 py-1 rounded-md "
        >
          Add New
        </Link>
      </div>
      <div className="h-[400px] w-[100%]">
        <DataGrid
          rows={data}
          columns={userColumns.concat(actions)}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{
            border: 2,
            borderColor: "darkGreen",
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "lightGreen",
              color: "white",
            },
            color: "GrayText",
          }}
        />
      </div>
    </div>
  );
};

export default Datatable;
