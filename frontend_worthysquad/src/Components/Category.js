import React from "react";
import { ButtonGroup, Button, Nav } from "react-bootstrap";
import { EventConsumer } from "../Context";
const Category = ({ list }) => {
  return (
    <>
      <div
        style={{
          display: "grid",
          placeContent: "center",
        }}
      >
        <EventConsumer>
          {(value) => (
            <Nav>
              <ButtonGroup className="mb-2">
                {list.map((curElem) => {
                  return (
                    <Button
                      key={curElem.id}
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
      </div>
    </>
  );
};

export default Category;
