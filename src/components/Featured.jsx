import styles from "./styles";
import { MoreVertIcon } from "./Icons";
const Featured = () => {
  return (
    <div className={`${styles.boxShadow} flex flex-[1] p-2 flex-col`}>
      <div className="flex justify-between items-center text-navItemColor">
        <h2 className="text-[18px] font-semibold">Total revenue</h2>
        <MoreVertIcon />
      </div>
      <div></div>
    </div>
  );
};

export default Featured;
