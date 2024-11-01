import React from 'react';
import styled from 'styled-components';

const Cards = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <p><span>HOVER ME</span></p>
        <p><span>HOVER ME</span></p>
        <p><span>HOVER ME</span></p>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 210px;
    height: 254px;
    border-radius: 4px;
    background: #212121;
    display: flex;
    flex-direction: row;
    gap: 5px;
    padding: .4em;
  }

  .card p {
    height: 100%;
    flex: 1;
    overflow: hidden;
    cursor: pointer;
    border-radius: 2px;
    transition: all .5s;
    border: 1px solid #ff5a91;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card p:hover {
    flex: 4;
  }

  .card p span {
    min-width: 14em;
    padding: .5em;
    text-align: center;
    // transform: rotate(-90deg);
    transition: all .5s;
    text-transform: uppercase;
    color: #ff568e;
    letter-spacing: .1em;
  }

  .card p:hover span {
    transform: rotate(0);
  }`;

export default Cards;
