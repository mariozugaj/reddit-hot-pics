import request from "../lib/request";

function get(subreddit, params) {
  return request({
    url: `/r/${subreddit}/hot.json`,
    method: "GET",
    params,
  });
}

const SubredditService = {
  get,
};

export default SubredditService;
