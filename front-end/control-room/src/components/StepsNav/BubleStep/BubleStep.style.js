import styled from 'styled-components/macro';

export const BubbleItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 3rem;
  overflow: hidden;
  cursor: pointer;
  &:after {
    content: '';
    position: absolute;
    top: 30%;
    left: 3.5rem;
    width: 100%;
    border-top: 0.1rem solid ${(props) => (props.active ? `#3F3C56` : '#737373')};
  }
  :last-child::after {
    content: none;
  }
`;
export const BubbleIcon = styled.div`
  height: 3.5rem;
  width: 3.5rem;
  display: flex;
  padding: 0.3rem;
  justify-content: center;
  align-items: center;
  svg {
    width: 70%;
    height: 70%;
    fill: ${(props) => (props.active ? 'white' : '#737373')};
  }
  border: 2px solid ${(props) => (props.active ? `#3F3C56` : '#737373')};
  border-radius: 50%;
  background-color: ${(props) => (props.active ? `#3F3C56` : 'inherit')};
`;
export const BubbleTitle = styled.div`
  padding-top: 1rem;
  font-size: 1rem;
  color: ${(props) => (props.active ? `#3F3C56` : '#737373')};
`;
