import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { EAction } from "../CardsList/CardsList";

type PaginationBlockPropsType = {
  next: string | null;
  prev: string | null;
  onClick: (value: EAction) => void;
};

export const PaginationBlock = (props: PaginationBlockPropsType) => {
  return (
    <Pagination size="lg" className="d-flex justify-content-center">
      <PaginationItem disabled={!props.prev}>
        <PaginationLink
          aria-label=" "
          previous
          href="#"
          onClick={() => {props.onClick(EAction.prev)}}
        />
      </PaginationItem>
      <PaginationItem disabled={!props.next}>
        <PaginationLink
          aria-label=" "
          next
          href="#"
          onClick={() => {props.onClick(EAction.next)}}
          
        />
      </PaginationItem>
    </Pagination>
  );
};
