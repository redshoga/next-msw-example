import axios from "axios";
import { useCallback } from "react";

const Page = () => {
  const buttonHandler = useCallback(async () => {
    const res = await axios.get("/example");
    alert(JSON.stringify(res.data, null, 2));
  }, []);

  return (
    <div>
      <button onClick={buttonHandler}>call example api</button>
    </div>
  );
};

export default Page;
