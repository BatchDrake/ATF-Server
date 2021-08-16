import ConfirmationApi from "../../api/ConfirmationApi";
import useAsync from "../common/useAsync";

const api = new ConfirmationApi();

const mockData = {
  data: [
    {
      id: 136,
      party: {
        id: 124,
        type: {
          name: "Fiesta No Oficial",
          points: 1,
        },
        announcement: {
          id: 57623,
          date: "2022-07-23",
          location: {
            name: "A Coruña",
            id: "ChIJN1t_tDeuEmsRUsoyG83frY4",
          },
          announcer: {
            id: 124566,
            name: "Gojo",
            avatar: "/images/gojo.jpg",
            score: 7,
            victories: 0,
            location: {
              id: "ChIJN1t_tDeuEmsRUsoyG83frY4",
              name: "Madrid",
            },
          },
        },
      },
      photo: "http://example.com",
      attenders: [
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
        {
          id: 934123,
          name: "Nirro",
          email: "nirro@gmail.com",
          location: {
            id: "ChIJN1t_tDeuEmsRUsoyG83frY4",
            name: "A Coruña",
          },
          avatar: "/images/nirro.jpg",
          score: 23,
          victories: 0,
        },
      ],
    },
    {
      id: 162,
      party: {
        id: 12,
        type: {
          name: "Fiesta Oficial",
          points: 3,
        },
        announcement: {
          id: 57623,
          date: "2022-07-22",
          location: {
            name: "Santiago",
            id: "ChIJN1t_tDeuEmsRUsoyG83frY4",
          },
          announcer: {
            id: 7678,
            name: "Rober",
            avatar: "/images/rober.jpg",
            score: 13,
            victories: 1,
            location: {
              id: "ChIJN1t_tDeuEmsRUsoyG83frY4",
              name: "Santiago",
            },
          },
        },
      },
      photo: "http://example.com",
      attenders: [
        {
          id: 7678,
          name: "Rober",
          avatar: "/images/rober.jpg",
          score: 13,
          victories: 1,
          location: {
            id: "ChIJN1t_tDeuEmsRUsoyG83frY4",
            name: "Santiago",
          },
        },
        {
          id: 4444,
          name: "Víctor",
          email: "vic_thork@gmail.com",
          location: {
            id: "ChIJN1t_tDeuEmsRUsoyG83frY4",
            name: "Santiago",
          },
          avatar: "/images/victor.jpg",
          score: 17,
          victories: 1,
        },
      ],
    },
  ],
  metadata: {
    count: 2,
    total: 2,
    first: "http://example.com",
    previous: "http://example.com",
    next: "http://example.com",
    last: "http://example.com",
  },
};

const mock = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData), 1500);
  });
};

function listConfirmations() {
  return api.listConfirmation();
}

function useConfirmations() {
  return useAsync(mock);
}

export default useConfirmations;
