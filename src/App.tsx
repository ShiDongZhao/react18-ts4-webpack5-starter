import { useState } from "react";
import "@/App.css";
import lessStyles from "./app.less";
import scssStyles from "./app.scss";
import stylStyles from "./app.styl";
import memberList from "./test.json";
import Class from "./components/Class";

function App() {
  const [count, setCounts] = useState("");
  const onChange = (e: any) => {
    setCounts(e.target.value);
  };
  console.log("memberList", memberList);

  return (
    <div>
      <h2>webpack5-react-ts</h2>
      <div className={lessStyles["lessBox"]}>
        <div className={lessStyles["box"]}>lessBox</div>
      </div>
      <div className={scssStyles["scssBox"]}>
        <div className={scssStyles["box"]}>scssBox</div>
      </div>
      <div className={stylStyles["stylBox"]}>
        <div className={stylStyles["box"]}>stylBox</div>
      </div>
      <Class />
      <div>
        <p>受控组件</p>
        <input type="text" value={count} onChange={onChange} />
        <br />
        <p>非受控组件</p>
        <input type="text" />
      </div>
    </div>
  );
}

export default App;
