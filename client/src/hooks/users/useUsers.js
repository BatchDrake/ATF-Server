import UserApi from "../../api/UserApi";
import useAsync from "../common/useAsync";

const api = new UserApi();

const mockData = {
  data: [
    {
      id: 124566,
      name: "Gojo",
      email: "gojo@actinid.org",
      location: {
        id: "ChIJN1t_tDeuEmsRUsoyG83frY4",
        name: "Madrid",
      },
      avatar: "/images/gojo.jpg",
      score: 7,
      victories: 0,
    },
    {
      id: 43422,
      name: "Andrew",
      email: "andrewscutehell@gmail.com",
      location: {
        id: "ChIJN1t_tDeuEmsRUsoyG83frY4",
        name: "A Coruña",
      },
      avatar: "/images/andrew.jpg",
      score: 9,
      victories: 1,
    },
    {
      id: 934123,
      name: "Cris",
      email: "cris@gmail.com",
      location: {
        id: "ChIJN1t_tDeuEmsRUsoyG83frY4",
        name: "Madrid",
      },
      avatar: "/images/cris.jpg",
      score: 12,
      victories: 3,
    },
  ],
  metadata: {
    count: 3,
    total: 3,
    first: "http://example.com",
    previous: "http://example.com",
    next: "http://example.com",
    last: "http://example.com",
    start: 1,
    finish: 3,
  },
};

const mock = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData), 1500);
  });
};

function listUserCall() {
  return api.listUsers();
}

function useUsers() {
  return useAsync(mock);
}

export default useUsers;
