import styled from 'styled-components/macro';

export const BubbleItem = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 620px) {
    font-size: 13px;
  }
  .step {
    display: flex;
    width: 100%;
  }

  &:after {
    content: '';
    transform: translate(4em, 2em);
    position: absolute;
    width: calc(-3.9em + 100%);
    border-top: 2px solid ${(props) => (props.active ? `#3F3C56` : '#737373')};
  }
  :last-child :after {
    content: '';
    top: 30%;
    transform: translateX(4em);
    position: absolute;
    width: calc(-4em + 100%);
    border-top: 0.1em solid transparent;
  }
`;
export const BubbleIcon = styled.div`
  height: 4em;
  width: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 1.7em;
    height: 1.7em;
    fill: ${(props) => (props.active ? 'white' : '#737373')};
  }
  border: 2px solid ${(props) => (props.active ? `#3F3C56` : '#737373')};
  border-radius: 50%;
  background-color: ${(props) => (props.active ? `#3F3C56` : 'inherit')};
`;
export const BubbleTitle = styled.div`
  margin-right: 0.5em;
  margin-top: 0.5em;
  font-size: 1em;
  color: ${(props) => (props.active ? `#3F3C56` : '#737373')};
  @media screen and (max-width: 620px) {
    display: none;
  }
`;
