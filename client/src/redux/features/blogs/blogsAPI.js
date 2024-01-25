import publiceAxios from "../../../components/publicAxios";

export const getBlogs = async () => {
  const response = await publiceAxios.get("/blogs");
  return response.data;
};
