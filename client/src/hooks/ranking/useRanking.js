import RankingApi from "../../api/RankingApi";
import useAsync from "../common/useAsync";

const api = new RankingApi();

const mockData = {
  data: [
    {
      position: 1,
      variation: "RISES",
      holder: {
        id: 934123,
        name: "Andrew",
        avatar: "/images/andrew.jpg",
        score: 31,
        victories: 3,
      },
    },
    {
      position: 2,
      variation: "FALLS",
      holder: {
        id: 934123,
        name: "Nirro",
        avatar: "/images/nirro.jpg",
        score: 24,
        victories: 1,
      },
    },
  ],
  metadata: {
    count: 1,
    total: 1,
    first: "http://example.com",
    previous: "http://example.com",
    next: "http://example.com",
    last: "http://example.com",
    start: 1,
    finish: 1,
  },
};

const mock = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData), 1500);
  });
};

function listRankingCall() {
  return api.listRanking();
}

function useRanking() {
  return useAsync(mock);
}

export default useRanking;
