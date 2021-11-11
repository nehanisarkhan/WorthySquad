import React from "react";
import { ButtonGroup, Button, Nav } from "react-bootstrap";

const Category = ({ filterItem, list }) => {
  return (
    <>
      <Nav>
        <ButtonGroup className="mb-2">
          {list.map((curElem) => {
            return (
              <Button variant="secondary" onClick={() => filterItem(curElem)}>
                {curElem}
              </Button>
            );
          })}
        </ButtonGroup>
      </Nav>
    </>
  );
};

export default Category;
