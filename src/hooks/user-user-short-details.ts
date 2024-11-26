"use client";

import { getShortBio } from "@/server-action/biography";
import { ShortBio } from "@/type";
import { useEffect, useState } from "react";

const useUserShortDetails = () => {
  const [user, setUser] = useState<ShortBio>();

  useEffect(() => {
    (async () => {
      const data = await getShortBio();
      setUser(data);
    })();
  }, []);

  return { user };
};

export default useUserShortDetails;
