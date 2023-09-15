import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  border-radius: 4px;
`;

export const Title = styled.h2`
  padding-top: 25px;
  padding-bottom: 25px;
  text-align: center;
`;
export const Statlist = styled.ul`
  display: flex;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
  width: calc(100% / 5);
  text-align: center;
  background-color: ${getRandomHexColor};
`;

export const Percentage = styled.span`
  font-size: 24px;
`;
