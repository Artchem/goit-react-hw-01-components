import styled from 'styled-components';

export const Container = styled.div`
  /* display: flex; */
  margin-top: 30px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  /* text-align: center; */
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
  padding-top: 20px;
  padding-bottom: 20px;
  width: calc(100% / 5);
  text-align: center;
`;

export const Percentage = styled.span`
  font-size: 24px;
`;
