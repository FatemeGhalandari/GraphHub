import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "./datatablSource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  // getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";

const Datatable = () => {
  const [data, setData] = useState([]);
  const [pdata, setpData] = useState([]);

  // realtime data
  const unsubscribed = async (collectionName, setDataFunc) => {
    await onSnapshot(collection(db, collectionName), (snapshot) => {
      let tempData = [];
      snapshot.docs.forEach(
        (doc) => {
          tempData.push({ id: doc.id, ...doc.data() });
        },
        (error) => {
          console.log(error);
        }
      );
      setDataFunc(tempData);
    });
  };

  // const getData = async () => {
  //   let tempData = [];
  //   try {
  //     const querySnapshot = await onSnapshot(collection(db, "users"), (doc));

  //     querySnapshot.forEach((doc) => {
  //       tempData.push({ id: doc.id, ...doc.data() });
  //     });
  //     setData(tempData);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // getData();
  useEffect(() => {
    unsubscribed("users", setData);
  }, []);
  useEffect(() => {
    unsubscribed("products", setpData);
  }, []);
  console.log("user", data);
  console.log("product", pdata);

  // handle delete function
  const handleDelete = async (id, collectionName) => {
    try {
      await deleteDoc(doc(db, collectionName, id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
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
              onClick={() => handleDelete((params.row.id),"users")}
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
      <div className="flex items-center justify-between mb-2 w-[100%] text-[24px]">
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
