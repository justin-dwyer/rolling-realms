import React from 'react';
import "./BetweenTwoCastles.scss";

const BetweenTwoCastles = () => {

  const renderInput = () => {
    return (
      <div className="input">
        <input type="number" min="1" max="6"/>
      </div>
    );
  }

  return (
    <>
      <p>Fill squares from the bottom up; #s on top must be lower than those below. When you complete a column, gain a bonus.</p>
      <div className="betweenTwoCastlesC">
        <div className="castle castle1">
          <div className="no-border"></div>
          <div className="rewards no-border">
            <img src="/assets/Links/pumpkin.png" alt="pumpkin" className="reward"/>
            <img src="/assets/Links/pumpkin.png" alt="pumpkin" className="reward overlay"/>
          </div>
          <div className="no-border"></div>
          <div className="no-border"></div>
          {renderInput()}
          <div className="rewards no-border">
            <img src="/assets/Links/heart.png" alt="reward" className="reward"/>
            <img src="/assets/Links/heart.png" alt="reward" className="reward overlay"/>
          </div>
          <div className="rewards no-border">
            <img src="/assets/Links/pumpkin.png" alt="reward" className="reward"/>
          </div>
          {renderInput()}
          {renderInput()}
          {renderInput()}
          <div className="door">
            <img src="/assets/Links/wooden-door.png" alt="door"/>
          </div>
          {renderInput()}
        </div>

        <div className="castle castle2">
          <div className="rewards no-border">
            <img src="/assets/Links/coin.png" alt="reward" className="reward"/>
            <img src="/assets/Links/heart.png" alt="reward" className="reward overlay"/>
          </div>
          <div className="rewards no-border">
            <img src="/assets/Links/coin.png" alt="reward" className="reward"/>
            <img src="/assets/Links/coin.png" alt="reward" className="reward overlay"/>
          </div>
          {renderInput()}
          {renderInput()}
          {renderInput()}
          {renderInput()}
          {renderInput()}
          <div className="door">
            <img src="/assets/Links/doorway.png" alt="door"/>
          </div>
        </div>
      </div>
      <p className="margin20">Score 1 star per completed row (each castle has 3 rows).</p>
    </>
  );
}

export default BetweenTwoCastles;
