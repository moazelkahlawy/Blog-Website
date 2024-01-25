import publiceAxios from "../../../components/publicAxios";


export const getBlog = async (id) => {
  const response = await publiceAxios.get(`/blogs/${id}`);
  return response.data;
};
