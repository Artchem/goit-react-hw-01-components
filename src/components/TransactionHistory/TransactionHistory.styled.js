import styled from 'styled-components';

export const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #eee;
  border-radius: 4px;
  table-layout: fixed;
  width: 500px;
  background-color: #fff;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const Thead = styled.thead`
  background-color: greenyellow;
`;

export const Th = styled.th`
  padding: 10px;
`;

export const Td = styled.td`
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #eee;
`;

export const Tr = styled.tr`
  &:nth-child(odd) {
    background-color: #eee;
  }
`;
