import { Button, TextField } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "../components/styles";
import { DriveFolderUploadIcon } from "../components/icons";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";

const New = () => {
  return (
    <div className="flex flex-row w-[100%]">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        <div className={`${styles.parent} ${styles.boxShadow} m-5`}>
          <h1 className="text-textColor text-[20px] font-bold">Add New User</h1>
        </div>
        <div className={`${styles.parent}  ${styles.boxShadow} m-5`}>
          <div className="flex-[1]">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt="newImage"
              className="w-[100px] h-[100px] rounded-[50%] m-auto object-cover"
            />
            <div className="flex flex-row justify-center items-center mt-2">
              <label
                htmlFor="file"
                className="cursor-pointer flex flex-row justify-center items-center"
              >
                <h2 className="m-1 font-semibold text-[15px] text-[#BBBBBB]">
                  Upload Photo
                </h2>
                <DriveFolderUploadIcon className="text-[#BBBBBB]" />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
          </div>
          <div className="flex-[2] ">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": {
                  m: 2,
                  width: "40%",
                  justifyContent: "space-between",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  required
                  id="Username"
                  label="Username"
                  placeholder="john_smith"
                  variant="filled"
                />
                <TextField
                  required
                  id="Full Name"
                  label="Full Name"
                  placeholder="John Smith"
                  variant="filled"
                />
                <TextField
                  required
                  id="Phone"
                  label="Phone"
                  placeholder="+1 234 567 890"
                  variant="filled"
                />
                <TextField
                  required
                  id="Email"
                  label="Email"
                  placeholder="johnsmith@gmail.com"
                  variant="filled"
                />
                <TextField
                  required
                  id="filled-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="filled"
                />
                <TextField
                  id="Address"
                  label="Address"
                  placeholder="New York, Central road"
                  variant="filled"
                />
                <TextField
                  id="Country"
                  label="Country"
                  placeholder="USA"
                  variant="filled"
                />
              </div>
              <div className="p-4">
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  style={{ backgroundColor: "green", width: "150px" }}
                >
                  Send
                </Button>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
