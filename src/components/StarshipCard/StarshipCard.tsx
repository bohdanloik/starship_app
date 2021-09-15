import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import "./StarshipCard.css";

export type ItemType = {
  name: string;
  model: string;
  starship_class: string;
  hyperdrive_rating: string;
  passengers: string;
  manufacturer: string;
};

type ItemPropsType = {
  item: ItemType;
};

export const StarshipCard = (props: ItemPropsType) => {
  return (
    <div>
      <Card className="border border-danger border-2 ">
        <CardBody className="text-center">
          <CardTitle className="text-truncate fw-bold" tag="h5">{props.item.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted text-truncate ">
            {props.item.model}
          </CardSubtitle>
          <CardText className="text-truncate text-uppercase fw-bold">
            Starship Class: {props.item.starship_class} <br />
            Hyperdriive Rating: {props.item.hyperdrive_rating}
            <br />
            Pessengers: {props.item.passengers}
            <br />
            Manufacturer: {props.item.manufacturer}
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};
