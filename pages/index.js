import HistoryCell from "@/components/HistoryCell";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col w-screen h-screen justify-center items-center text-start bg-gradient-to-b from-blue-200 to-blue-50 dark:from-blue-900 dark:to-blue-950">
        <div className="flex flex-col text-start">
          <h1 className="text-5xl font-bold text-blue-950 dark:text-blue-50">
            Marcin Bartmiński
          </h1>
          <h2 className="text-4xl text-blue-900 dark:text-blue-100">
            An iOS Developer
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-center p-8 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-900">
        <HistoryCell />
        <HistoryCell />
        <HistoryCell />
      </div>
    </main>
  );
}
