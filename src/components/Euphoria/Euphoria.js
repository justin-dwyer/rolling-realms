import React from "react";
import Die from "../Die/Die";
import "./Euphoria.scss";
import Resource from "../Resource/Resource";

const Euphoria = () => {
  const renderDie = (i, alignment) => {
    return <Die key={`euphoria-${alignment}-d6-${i}`} dieFace={i} />;
  };

  return (
    <>
      <p>
        Either mark 1 # OR (if a pair is rolled) you may mark both #s.
        Then bonus is based on the sum of that area.
      </p>
      <div className="game">
        {renderDie(1, "left")}
        {renderDie(2, "left")}
        <b />
        <b />
        {renderDie(1, "right")}
        {renderDie(2, "right")}
        {renderDie(3, "left")}
        {renderDie(4, "left")}
        <b />
        <b />
        {renderDie(3, "right")}
        {renderDie(4, "right")}
        {renderDie(5, "left")}
        {renderDie(6, "left")}
        <b />
        <b />
        {renderDie(5, "right")}
        {renderDie(6, "right")}
        <div>1-3: </div>
        <Resource name="coin" />
        <div>4-10: </div>
        <Resource name="star" />
        <div>11+: </div>
        <div>
          <Resource name="heart" />
          /
          <Resource name="pumpkin" />
        </div>
      </div>
    </>
  );
};

export default Euphoria;
