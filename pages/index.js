import HistoryCell from "@/components/HistoryCell";
import TypingAnimation from "@/components/TypingAnimation";
import Head from "next/head";
import { titles } from "@/data/titles";
import { events } from "@/data/events";

export default function Home() {
  return (
    <>
      <Head>
        <title>Marcin Bartmiński</title>
      </Head>
      <main className="flex flex-col">
        <div className="flex flex-col w-screen h-dvh justify-center items-center text-start bg-gradient-to-b from-blue-200 to-blue-50 dark:from-blue-900 dark:to-blue-950">
          <div className="flex flex-col text-start">
            <h1 className="text-3xl sm:text-6xl font-bold text-blue-950 dark:text-blue-50">
              Marcin Bartmiński
            </h1>
            <h2 className="text-2xl sm:text-5xl text-blue-900 dark:text-blue-100 h-8 sm:h-14">
              <TypingAnimation texts={titles} />
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center p-8 bg-gradient-to-b from-blue-50 to-neutral-50 dark:from-blue-950 dark:to-neutral-900">
          {events.map((ev) => <HistoryCell event={ev} isLast={ev.id == events.at(-1).id} key={ev.id} />)}
        </div>
      </main>
      <div className="hidden bg-slate-400">
        <div className="bg-slate-500" />
      </div>
    </>
  );
}
