import { useState, useEffect } from "react";

export default function HistoryCell({ event, isLast }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center relative mt-[-2px] transition-all w-[100%]">
      <div className={`${event.color} w-32 h-32 flex justify-center items-center rounded-full z-20`} onClick={
        () => {
          setIsOpen((is) => !is)
        }
      }>
        <p className="text-7xl">{event.emoji}</p>
      </div>
      <div className={`${isOpen ? "event-open" : "event-closed"} mt-[-7.5rem] w-28 h-28 max-w-[90%] rounded-full flex flex-col bg-blue-100 py-6 px-10 items-center z-10`}>
        <h2 className="text-2xl font-bold opacity-0">{event.eventName}</h2>
        <p className="text-neutral-500 opacity-0 overflow-hidden">{event.eventDescription}</p>
      </div>
      {isLast ? <></> : <div className="bg-gradient-to-b from-slate-400 to-slate-500 w-6 h-24" />}
    </div>
  );
}
