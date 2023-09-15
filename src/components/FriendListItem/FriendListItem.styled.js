import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  gap: 25px;
  width: 300px;

  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 15px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  background-color: #fff;

  border-radius: 4px;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const Name = styled.p`
  font-size: 26px;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ $status }) => ($status ? 'green' : 'red')};
`;
