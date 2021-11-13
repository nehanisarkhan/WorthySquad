import React from "react";
import { ButtonGroup, Button, Nav } from "react-bootstrap";
import { EventConsumer } from "../Context";
const Category = ({ filterItem, list }) => {
  return (
    <>
      <EventConsumer>
        {(value) => (
          <Nav>
            <ButtonGroup className="mb-2">
              {value.list.map((curElem) => {
                return (
                  <Button
                    variant="secondary"
                    onClick={() => filterItem(curElem)}
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
