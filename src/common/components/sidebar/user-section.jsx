import React from "react";
import { useUser } from "../../providers/user-provider/use-user";

export const UserSection = () => {
  const { user } = useUser();

  return (
    <div className="flex justify-around items-center border border-slate-800/50 rounded-xl p-6">
      <img src={user.avatar} className="rounded-full w-14 h-14" />

      <div className="flex flex-col items-start">
        <h3 className="text-2xl">{user.name}</h3>
        <p className="opacity-50 text-sm">{user.role}</p>
      </div>
    </div>
  );
};
