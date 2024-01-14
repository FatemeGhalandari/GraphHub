import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const Tables = () => {
  const [data, setData] = useState([]);
  const unsubscribed = async () => {
    await onSnapshot(collection(db, "orders"), (snapshot) => {
      let tempData = [];
      snapshot.docs.forEach(
        (doc) => {
          tempData.push({ id: doc.id, ...doc.data() });
        },
        (error) => {
          console.log(error);
        }
      );
      setData(tempData);
    });
  };
  useEffect(() => {
    unsubscribed();
  }, []);
  return (
    <TableContainer component={Paper} className="dark:bg-[#222] ">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className=" dark:text-textColor">Tracking ID</TableCell>
            <TableCell className=" dark:text-textColor">Product</TableCell>
            <TableCell className=" dark:text-textColor">Customer</TableCell>
            <TableCell className=" dark:text-textColor">Date</TableCell>
            <TableCell className=" dark:text-textColor">Amount</TableCell>
            <TableCell className=" dark:text-textColor">
              Payment Method
            </TableCell>
            <TableCell className=" dark:text-textColor">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((order) => (
            <TableRow key={order.id}>
              <TableCell className=" dark:text-textColor">{order.id}</TableCell>
              <TableCell className=" dark:text-textColor">
                <div className="flex flex-row items-center">
                  <img
                    src={order.img}
                    alt="row"
                    className=" h-[32px] w-[32px] rounded-[50%] object-cover mr-2 "
                  />
                  {order.product}
                </div>
              </TableCell>
              <TableCell className=" dark:text-textColor">
                {order.customer}
              </TableCell>
              <TableCell className="dark:text-textColor">
                {order.date && order.date.seconds
                  ? // Format the date here based on your requirements
                    new Date(order.date.seconds * 1000).toLocaleDateString()
                  : // Handle the case where date is not present or not in the expected format
                    "N/A"}
              </TableCell>
              <TableCell className=" dark:text-textColor">
                {order.amount}
              </TableCell>
              <TableCell className=" dark:text-textColor">
                {order.method}
              </TableCell>
              <TableCell>
                <span
                  className={`p-2 rounded-md ${
                    order.status === "Completed"
                      ? "bg-[#d1fae5] text-darkGreen"
                      : "bg-[#fef9c3] text-[#eab308]"
                  }`}
                >
                  {order.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
