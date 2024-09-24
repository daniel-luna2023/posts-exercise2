"use client";

import { useEffect, useState } from "react";
import api from "@/utils/api";
import type { UserProps } from "@/types";
import { useParams } from "next/navigation";

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState<UserProps | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get(`get/user/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchUser();
  }, [id]);
  
  if (!user) {
    return <div>Loading..</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen px-5">
      <div className="w-full max-w-md">
        <h1 className="text-lg font-bold py-3">About you</h1>
        <div className="border border-slate-200 p-4 rounded-lg shadow">
          <div className="font-bold flex flex-col gap-1 mb-3 text-xs">
            <span className="font-normal text-slate-500 text-xs flex flex-col gap-1 mb-2 px-3">{user.name}</span>
          </div>
          <div className="font-bold flex flex-col gap-1 mb-3 text-xs">
            <span className="font-normal text-slate-500 text-xs flex flex-col gap-1 mb-2 px-3">{user.username}</span>
          </div>
          <div className="font-bold flex flex-col gap-1 mb-3 text-xs">
            <span className="font-normal text-slate-500 text-xs flex flex-col gap-1 mb-2 px-3">{user.email}</span>
          </div>
          <div className="font-bold flex flex-col gap-1 mb-3 text-xs">
            <span className="font-normal text-slate-500 text-xs flex flex-col gap-1 mb-2 px-3">
              {user.street}, {user.city}, {user.zipcode}
            </span>
          </div>       
        </div>
      </div>
    </div>
  );
}
