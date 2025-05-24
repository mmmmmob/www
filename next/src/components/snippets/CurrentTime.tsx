"use client";

import { useEffect, useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center">
      <p className="font-fkDisplay text-sm">
        {time.toLocaleTimeString("en-GB", { timeZone: "Asia/Bangkok" })}
      </p>
      <p className="font-fkDisplay mx-1 text-sm font-bold">
        •{" "}
        <a
          href={
            "https://maps.apple.com/place?q=Bangkok&auid=11435960156529778241&ll=13.753253,100.501641&lsp=7618&address=Bangkok,%20Bangkok,%20Thailand"
          }
          target={"_blank"}
          className="hover:text-slate-500 dark:hover:text-slate-100"
        >
          Bangkok, Thailand
        </a>
      </p>
    </div>
  );
};

export default CurrentTime;
