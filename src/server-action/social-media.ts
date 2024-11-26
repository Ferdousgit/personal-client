"use server";

import { axiosInstance } from "@/lib/axios-instance";
import { SocialMediaLink } from "@/type";

export const getSocialMediaLinks = async () => {
  try {
    const { data } = await axiosInstance.get("/social/get");
    return data as SocialMediaLink[];
  } catch (error) {
    console.error("Error fetching social media links:", error);
    // throw new Error("Failed to fetch social media links.");
  }
};
