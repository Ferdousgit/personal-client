"use server";

import { axiosInstance } from "@/lib/axios-instance";
import { Blog, CategorizedBlogs } from "@/type";

export const getAllBlogs = async () => {
  try {
    const { data } = await axiosInstance.get<CategorizedBlogs>(
      "/blog/get-all-based-on-year"
    );
    return data;
  } catch (error) {
    console.log("Error getting blogs: ", error);
  }
};

export const getSingleBlog = async (id: string) => {
  try {
    const { data } = await axiosInstance.get<Blog>(`/blog/get-one/${id}`);
    return data;
  } catch (error) {
    console.log("Error getting single blog: ", error);
  }
};
