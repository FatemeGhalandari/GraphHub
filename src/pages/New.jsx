import { Button } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "../components/styles";
import { DriveFolderUploadIcon } from "../components/icons";
import SendIcon from "@mui/icons-material/Send";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    const uploadFile = () => {
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, Image: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const handleInput = async (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.Email,
        data.Password
      );
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      console.log("done");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-row w-[100%] dark:bg-[#222] dark:text-textColor">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        <div className={`${styles.parent} ${styles.boxShadow} m-5`}>
          <h1 className="text-textColor text-[20px] font-bold">{title}</h1>
        </div>
        <div className={`${styles.parent}  ${styles.boxShadow} m-5`}>
          <div className="flex-[1] mt-3">
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
          <div className="flex-[2] mt-3 ">
            <form
              noValidate
              autoComplete="off"
              className="flex flex-wrap flex-row justify-between gap-4"
              onSubmit={handleAdd}
            >
              {inputs.map((input) => (
                <div key={input.id} className="w-[40%] ">
                  <label className="flex items-center gap-2">
                    {input.label}
                  </label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    className="w-[70%] p-[5px] border-[2px] border-lightGreen border-solid dark:bg-transparent"
                    onChange={handleInput}
                  />
                </div>
              ))}
              <div className="mt-6 w-[150px]">
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<SendIcon />}
                  style={{ backgroundColor: "green", width: "150px" }}
                >
                  Send
                </Button>
              </div>
            </form>
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
