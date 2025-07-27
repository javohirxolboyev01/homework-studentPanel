import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "..";

export const key = "blog";

export const useBlog = () => {
  const client = useQueryClient();

  const getBlog = () =>
    useQuery({
      queryKey: [key],
      queryFn: () => api.get("/blog").then((res) => res.data),
    });

  const createBlog = useMutation({
    mutationFn: (body: any) => api.post("/blog", body),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [key] });
    },
  });

  const deleteBlog = useMutation({
    mutationFn: (id: number) => api.delete(`/blog/${id}`),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [key] });
    },
  });

  const updateBlog = useMutation({
    mutationFn: ({ id, body }: { id: number; body: any }) =>
      api.put(`/blog/${id}`, body),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [key] });
    },
  });

  return { getBlog, createBlog, deleteBlog, updateBlog };
};
