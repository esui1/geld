import { useContext } from "react";
import { Themecontext } from "@/provider/themeprovider";
const Context = () => {
  const { toggleTheme } = useContext(Themecontext);
  return (
    <div>
      <button onClick={toggleTheme} toggle theme></button>
    </div>
  );
};
export default Context;
