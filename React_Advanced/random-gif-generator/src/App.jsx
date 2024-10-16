import Tag from "./components/Tag";
import Random from "./components/Random";
export default function App() {
  return (
   <div className="w-full h-screen flex flex-col bg-blue-200 relative items-center overflow-x-hidden">
    <h1 className="bg-white rounded-md mt-[30px] px-10 py-2 text-3xl w-11/12 text-center mt-[40px">RANDOM GIFS</h1>
    <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
      <Random/>
      <Tag/>

    </div>
   </div>
  );
}
