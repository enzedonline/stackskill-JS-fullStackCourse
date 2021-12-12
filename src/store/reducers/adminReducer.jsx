const defaultState = {
  users: [],
  posts: [],
  post: {},
};

export const admin = (state = defaultState, action) => {
  switch (action.type) {
    case "GOT_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "GOT_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    case "GOT_POST":
      return {
        ...state,
        post: action.payload,
      };
    case "POST_CREATED":
      return {
        ...state,
      };
    case "POST_UPDATED":
      return {
        ...state,
      };
    default:
      return state;
  }
};
