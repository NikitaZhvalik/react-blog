import { server } from "./fetch";

const deletePost = (id) => {
  fetch(server + id, {
    method: "DELETE",
  })
};

export default deletePost;
