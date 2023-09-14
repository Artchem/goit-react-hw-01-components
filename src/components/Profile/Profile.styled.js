import styled from 'styled-components';

export const Card = styled.div`
  width: 300px;
  margin-top: 10px;
  margin-bottom: 40px;
  padding-top: 30px;

  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;

export const Description = styled.div`
  margin-bottom: 40px;
  text-align: center;
`;

export const Avatar = styled.img`
  display: block;
  max-width: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;

  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;
export const Tag = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;
export const Location = styled.p`
  font-size: 16px;
`;

export const Stats = styled.ul`
  display: flex;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: calc(100% / 3);
  text-align: center;

  border-right: 1px solid gray;
  border-top: 1px solid gray;
  background-color: #efeff5;
`;
