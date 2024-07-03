import { ExampleSheet } from "./ExampleSheet";
import ViewsCard from "./ViewsCard";

const Dashboard = () => {
  return (
    <div className="h-screen p-2 flex flex-col">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 flex-grow-0">
        <ViewsCard views={300} />
        <ViewsCard views={300} />
        <ViewsCard views={300} />
        <ViewsCard views={300} />
      </div>
      <div className="flex-grow flex justify-center items-center">
        <ExampleSheet />
      </div>
    </div>
  );
};

export default Dashboard;
