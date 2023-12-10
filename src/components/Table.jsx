import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Tables = () => {
  const rows = [
    {
      id: 174827,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Doe",
      date: "2023-12-10",
      amount: 50.0,
      method: "Credit Card",
      status: "Completed",
    },
    {
      id: 643722,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "2023-12-11",
      amount: 75.0,
      method: "PayPal",
      status: "Pending",
    },
    {
      id: 234873,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Bob Johnson",
      date: "2023-12-12",
      amount: 30.0,
      method: "Debit Card",
      status: "Completed",
    },
    {
      id: 460213,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Alice Williams",
      date: "2023-12-13",
      amount: 60.0,
      method: "Bank Transfer",
      status: "Completed",
    },
    {
      id: 128328,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Charlie Brown",
      date: "2023-12-14",
      amount: 25.0,
      method: "Cash",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tracking ID</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>
                <div className="flex flex-row items-center">
                  <img
                    src={row.img}
                    alt="row"
                    className=" h-[32px] w-[32px] rounded-[50%] object-cover mr-2"
                  />
                  {row.product}
                </div>
              </TableCell>
              <TableCell>{row.customer}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.method}</TableCell>
              <TableCell>
                <span
                  className={`p-2 rounded-md ${
                    row.status === "Completed"
                      ? "bg-[#d1fae5] text-darkGreen"
                      : "bg-[#fef9c3] text-[#eab308]"
                  }`}
                >
                  {row.status}
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
