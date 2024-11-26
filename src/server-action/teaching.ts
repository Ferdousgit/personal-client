"use server";

import { axiosInstance } from "@/lib/axios-instance";
import { TeachingExperience } from "@/type";

export const getAllTeachingExtensions = async () => {
  try {
    const { data } = await axiosInstance.get<TeachingExperience[]>(
      "/teaching/get-all"
    );

    return data;
  } catch (error) {
    console.log("error getting teaching experiences: ", error);
  }
};

export const getTeachingExperience = async (id: string) => {
  try {
    const { data } = await axiosInstance.get<TeachingExperience>(
      `/teaching/get-one/${id}`
    );

    return data;
  } catch (error) {
    console.log("error getting teaching experience: ", error);
  }
};
