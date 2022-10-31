/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, type UseQueryOptions, useInfiniteQuery, type UseInfiniteQueryOptions } from "@tanstack/vue-query";
import { useClient } from "../useClient";

export default function useCosmosNftV1Beta1() {
  const client = useClient();
  const QueryBalance = (owner: string, class_id: string, options: any) => {
    const key = { type: "QueryBalance", owner, class_id };
    return useQuery(
      [key],
      () => {
        const { owner, class_id } = key;
        return client.CosmosNftV1Beta1.query.queryBalance(owner, class_id).then((res) => res.data);
      },
      options,
    );
  };

  const QueryOwner = (class_id: string, id: string, options: any) => {
    const key = { type: "QueryOwner", class_id, id };
    return useQuery(
      [key],
      () => {
        const { class_id, id } = key;
        return client.CosmosNftV1Beta1.query.queryOwner(class_id, id).then((res) => res.data);
      },
      options,
    );
  };

  const QuerySupply = (class_id: string, options: any) => {
    const key = { type: "QuerySupply", class_id };
    return useQuery(
      [key],
      () => {
        const { class_id } = key;
        return client.CosmosNftV1Beta1.query.querySupply(class_id).then((res) => res.data);
      },
      options,
    );
  };

  const QueryNFTs = (query: any, options: any, perPage: number) => {
    const key = { type: "QueryNFTs", query };
    return useInfiniteQuery(
      [key],
      ({ pageParam = 1 }: { pageParam?: number }) => {
        const { query } = key;

        query["pagination.limit"] = perPage;
        query["pagination.offset"] = (pageParam - 1) * perPage;
        query["pagination.count_total"] = true;
        return client.CosmosNftV1Beta1.query.queryNFTs(query ?? undefined).then((res) => ({ ...res.data, pageParam }));
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

  const QueryNFT = (class_id: string, id: string, options: any) => {
    const key = { type: "QueryNFT", class_id, id };
    return useQuery(
      [key],
      () => {
        const { class_id, id } = key;
        return client.CosmosNftV1Beta1.query.queryNFT(class_id, id).then((res) => res.data);
      },
      options,
    );
  };

  const QueryClass = (class_id: string, options: any) => {
    const key = { type: "QueryClass", class_id };
    return useQuery(
      [key],
      () => {
        const { class_id } = key;
        return client.CosmosNftV1Beta1.query.queryClass(class_id).then((res) => res.data);
      },
      options,
    );
  };

  const QueryClasses = (query: any, options: any, perPage: number) => {
    const key = { type: "QueryClasses", query };
    return useInfiniteQuery(
      [key],
      ({ pageParam = 1 }: { pageParam?: number }) => {
        const { query } = key;

        query["pagination.limit"] = perPage;
        query["pagination.offset"] = (pageParam - 1) * perPage;
        query["pagination.count_total"] = true;
        return client.CosmosNftV1Beta1.query
          .queryClasses(query ?? undefined)
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

  return { QueryBalance, QueryOwner, QuerySupply, QueryNFTs, QueryNFT, QueryClass, QueryClasses };
}
