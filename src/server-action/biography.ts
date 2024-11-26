"use server";

import { axiosInstance } from "@/lib/axios-instance";
import { Biography, ShortBio } from "@/type";

export const getBioGraphy = async () => {
  try {
    const { data } = await axiosInstance.get<Biography>("/biography/get");
    return data;
  } catch (error) {
    console.log("get biography", error);
  }
};

export const getShortBio = async () => {
  try {
    const { data } = await axiosInstance.get<ShortBio>(
      "/biography/get-short-bio"
    );
    return data;
  } catch (error) {
    console.log("get short bio", error);
  }
};
