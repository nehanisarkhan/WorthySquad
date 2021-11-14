import React from "react";
import { ButtonGroup, Button, Nav } from "react-bootstrap";
import { EventConsumer } from "../Context";
const Category = ({ list }) => {
  return (
    <>
      <EventConsumer>
        {(value) => (
          <Nav>
            <ButtonGroup className="mb-2">
              {list.map((curElem) => {
                return (
                  <Button
                    className="text-capitalize"
                    variant="secondary"
                    onClick={() => value.filterItem(curElem)}
                  >
                    {curElem}
                  </Button>
                );
              })}
            </ButtonGroup>
          </Nav>
        )}
      </EventConsumer>
    </>
  );
};

export default Category;
