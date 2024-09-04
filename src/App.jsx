import WidgetOne from "./Components/WidgetOne";
import WidgetTwo from "./Components/WidgetTwo";
function App() {
  return (
    <div className="flex gap-6 bg-[#25292E] p-4   w-full min-h-screen">
      <div className="text-white w-1/2 hidden lg:block rounded-xl bg-[#616161]">
        empty half
      </div>
      <div className="w-full h-full gap-8 grid grid-cols-1 lg:w-1/2 px-4">
        <WidgetOne />
        <WidgetTwo />
      </div>
    </div>
  );
}

export default App;
