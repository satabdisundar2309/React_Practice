import { useState } from "react";

function Additional(props) {
  const [decNum, setdecNum] = useState("");
  const [incNum, setincNum] = useState("");
  function setdecHandler(e) {
    e.preventDefault();
    setdecNum(e.target.value);
  }
  function decHandler() {
    props.setCount(props.count - decNum);
  }
  function setincHandler(e) {
    e.preventDefault();
    setincNum(e.target.value);
  }
  function incHandler() {
    props.setCount(props.count + parseInt(incNum));
  }

  return (
    <div>
      <div className="flex w-[281.61px]">
        <input
          onChange={setincHandler}
          value={incNum}
          type="number"
          placeholder="Increment by: "
          className="rounded-sm text-center p-2 px-6 font-medium w-[70%] outline-none border-none caret-[#636c72]"
        />
        <button
          onClick={incHandler}
          className="bg-red-500 rounded-sm text-center p-2 px-6 font-medium w-[30%]"
        >
          Update
        </button>
      </div>
      <div className="flex w-[281.61px] mt-[2rem]">
        <input
          id="dec"
          onChange={setdecHandler}
          value={decNum}
          type="number"
          placeholder="Decrement by: "
          className="rounded-sm text-center p-2 px-6 font-medium w-[70%] outline-none border-none caret-[#636c72]"
        />
        <button
          onClick={decHandler}
          className="bg-red-500 rounded-sm text-center p-2 px-6 font-medium w-[30%]"
        >
          Update
        </button>
      </div>
    </div>
  );
}
export default Additional;
