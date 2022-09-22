import axios from "axios";
import { useCallback } from "react";

const Page = () => {
  const buttonHandler = useCallback(async () => {
    try {
      const res = await axios.get("/dynamic");
      alert(JSON.stringify(res.data, null, 2));
    } catch (err) {
      alert(err);
    }
  }, []);

  return (
    <div>
      <ul>
        <li>
          <a href="/dynamic">/dynamic</a> → default response
        </li>
        <li>
          <a href="/dynamic#pattern_404">/dynamic#pattern_404</a> → not found
          error
        </li>
        <li>
          <a href="/dynamic#pattern_500">/dynamic#pattern_500</a> → internal
          server error
        </li>
      </ul>
      <button onClick={buttonHandler}>call dynamic api</button>
    </div>
  );
};

export default Page;
