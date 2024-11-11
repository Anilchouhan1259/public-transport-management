import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const bussesApi = createApi({
  reducerPath: "busses",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints(builder) {
    return {
      searchBusses: builder.query({
        query: (data) => {
          return {
            url: "/getbusses",
            method: "POST",
            body: data,
          };
        },
      }),
      fetchBusDetail: builder.query({
        query: (id) => {
          // console.log(id + "hi");
          return {
            url: `/shedule/${id}`,
            params: {},
            method: "GET",
          };
        },
      }),
    };
  },
});
export const { useLazySearchBussesQuery, useFetchBusDetailQuery } = bussesApi;
export { bussesApi };
