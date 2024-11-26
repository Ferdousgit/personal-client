"use server";

import { axiosInstance } from "@/lib/axios-instance";
import { CV } from "@/type";

export const getCv = async () => {
  try {
    const { data } = await axiosInstance.get<CV>("/cv/get");
    return data;
  } catch (error) {
    console.log("Error getting cv: ", error);
  }
};
