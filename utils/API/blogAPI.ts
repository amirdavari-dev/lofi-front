import { httpService } from "../http-service";

export const getBlogs = async () => {
  try {
    const blogs = await httpService.get("/front/blogs");    
    if (blogs.status === 200) return blogs.data;
    else return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const getBlog = async ({blogId} : {blogId : number}) => {
  try {
    const blogs = await httpService.get(`/front/blogs/${blogId}`);
    if (blogs.status === 200) return blogs.data;
    else return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};
