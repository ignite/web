/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, type UseQueryOptions, useInfiniteQuery, type UseInfiniteQueryOptions } from "@tanstack/react-query";
import { useClient } from "../useClient";

export default function useNewvuetestNewvuetest() {
  const client = useClient();
  const QueryParams = (options: any) => {
    const key = { type: "QueryParams" };
    return useQuery(
      [key],
      () => {
        return client.NewvuetestNewvuetest.query.queryParams().then((res) => res.data);
      },
      options,
    );
  };

  const QueryUsers = (id: string, options: any) => {
    const key = { type: "QueryUsers", id };
    return useQuery(
      [key],
      () => {
        const { id } = key;
        return client.NewvuetestNewvuetest.query.queryUsers(id).then((res) => res.data);
      },
      options,
    );
  };

  const QueryUsersAll = (query: any, options: any, perPage: number) => {
    const key = { type: "QueryUsersAll", query };
    return useInfiniteQuery(
      [key],
      ({ pageParam = 1 }: { pageParam?: number }) => {
        const { query } = key;

        query["pagination.limit"] = perPage;
        query["pagination.offset"] = (pageParam - 1) * perPage;
        query["pagination.count_total"] = true;
        return client.NewvuetestNewvuetest.query
          .queryUsersAll(query ?? undefined)
          .then((res) => ({ ...res.data, pageParam }));
      },
      {
        ...options,
        getNextPageParam: (lastPage, allPages) => {
          if ((lastPage.pagination?.total ?? 0) > (lastPage.pageParam ?? 0) * perPage) {
            return lastPage.pageParam + 1;
          } else {
            return undefined;
          }
        },
        getPreviousPageParam: (firstPage, allPages) => {
          if (firstPage.pageParam == 1) {
            return undefined;
          } else {
            return firstPage.pageParam - 1;
          }
        },
      },
    );
  };

  return { QueryParams, QueryUsers, QueryUsersAll };
}
