import React, { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import { PaginationBlock } from "../PaginationBlock/PaginationBlock";
import { ItemType, StarshipCard } from "../StarshipCard/StarshipCard";
import "./CardsList.css";


type StarshipResponseType = {
  count: number,
  next: string | null,
  previous: string | null,
  results: ItemType[],
}

export enum EAction {
  next = "next",
  prev = "prev",
}

export const CardsList = () => {
  const [data, setData] = useState<StarshipResponseType | null>(null);
  const [page, setPage] = useState<string | null | undefined>(null);

  useEffect(() => {
    fetch(page ? page : 'https://swapi.dev/api/starships/')
      .then((res: Response) => res.json())
      .then((res: StarshipResponseType) => setData(res));
  }, [page]);

  const onPaginationClickHandler = (value: EAction) => {
    switch (value) {
      case EAction.prev:
        setPage(data?.previous);
        break;
      case EAction.next:
        setPage(data?.next);
        break;
    }
  };
  if(!data) {
    return (
      <div className="d-flex justify-content-center vh-100">
        <Spinner color="danger" children="" className="m-auto"/>
      </div>
    )
  }
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center cards-gaps pt-3 pb-3">
          {data.results.map((item, index) => {
            return <StarshipCard item={item} key={index} />;
          })}
      </div>
          <PaginationBlock
            next={data.next}
            prev={data.previous}
            onClick={onPaginationClickHandler}
          />
    </div>
  );
};
