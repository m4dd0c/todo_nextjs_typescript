import InputBar from "@/components/InputBar";
import List from "@/components/List";

export default function Home() {
  return (
    <main className="flex justify-center items-start md:items-center h-screen p-2 md:p-0">
      <div className="lg:w-3/4 w-full">
        <div className="text-center w-fit mx-auto">
          <h1 className="font-extrabold  text-3xl md:text-5xl">Task Manager</h1>
          <p className="opacity-50 text-start">
            create, read, complete and delete
          </p>
          <p className="opacity-50 text-start">one step to productivity</p>
        </div>
        <InputBar />
        <List />
      </div>
    </main>
  );
}
