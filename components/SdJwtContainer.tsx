import React, { ReactNode } from "react";
import { Warning } from "./Warning";

export const SdJwtContainer = ({ children }: { children: ReactNode }) => {
  console.log("created dev branch");
  return (
    <main className="min-h-screen items-center p-24">
      <div className="flex justify-center items-center text-4xl m-6 mt-12">
        Debugger
      </div>
      <Warning />
      {children}
    </main>
  );
};
