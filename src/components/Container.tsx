import { FC } from 'react';
import styled from 'styled-components';

const Conatiner: FC = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Conatiner;

const Wrapper = styled.div`
  width: 90%;
  min-width: 325px;
  margin: 0 auto;
`;
