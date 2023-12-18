import { Button, TextField } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "../components/styles";
import { DriveFolderUploadIcon } from "../components/icons";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import PropTypes from "prop-types";
import { useState } from "react";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="flex flex-row w-[100%]">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        <div className={`${styles.parent} ${styles.boxShadow} m-5`}>
          <h1 className="text-textColor text-[20px] font-bold">{title}</h1>
        </div>
        <div className={`${styles.parent}  ${styles.boxShadow}`}>
          <div className="flex-[1] m-2">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
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
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
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
                  height: "40px",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                {inputs.map((input) => (
                  <TextField
                    key={input.id}
                    required
                    id={input.id}
                    label={input.label}
                    placeholder={input.placeholder}
                    variant="filled"
                  />
                ))}
              </div>
              <div className="p-4 mt-3">
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
New.propTypes = {
  inputs: PropTypes.any.isRequired, // Update 'any' with the actual type you expect
  title: PropTypes.any.isRequired, // Update 'any' with the actual type you expect
};
export default New;
