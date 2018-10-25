import request from "../../lib/request";

function get({ subreddit, sorting = "hot", params = {} }) {
  return request({
    url: `/r/${subreddit}/${sorting}`,
    method: "GET",
    params: {
      raw_json: 1,
      ...params,
    },
  });
}

const SubredditService = {
  get,
};

export default SubredditService;
