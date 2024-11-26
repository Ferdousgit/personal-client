"use server";

import { axiosInstance } from "@/lib/axios-instance";
import { Publication } from "@/type";

export const getAllPublications = async () => {
  try {
    const { data } = await axiosInstance.get<Publication[]>(
      "/publication/get-all"
    );
    return data;
  } catch (error) {
    console.log("error getting publications: ", error);
  }
};

export const getSinglePublication = async (id: string) => {
  try {
    const { data } = await axiosInstance.get<Publication>(
      `/publication/get-one/${id}`
    );
    return data;
  } catch (error) {
    console.log("error getting publication: ", error);
  }
};
