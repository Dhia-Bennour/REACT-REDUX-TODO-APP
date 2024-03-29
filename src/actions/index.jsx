export const ADD_POST = "ADD_POST";
export const REMOVE_POST = "REMOVE_POST";
export const UPDATE_POST = "UPDATE_POST";

let nextId = 0;

export function addPost(title) {
  return {
    type: ADD_POST,
    id: nextId++,
    title
  };
}

export function removePost(id) {
  return {
    type: REMOVE_POST,
    id
  };
}

export function updatePost(id, title) {
  return {
    type: UPDATE_POST,
    id,
    title
  };
}
