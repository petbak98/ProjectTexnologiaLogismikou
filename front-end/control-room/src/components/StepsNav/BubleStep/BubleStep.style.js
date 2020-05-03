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
    transform: translate(5em, 2.5em);
    /* transform: translateY(2.5em); */
    position: absolute;
    width: calc(-4.9em + 100%);
    border-top: 2px solid ${(props) => (props.active ? `#3F3C56` : '#737373')};
  }
  :last-child :after {
    content: '';
    top: 30%;
    transform: translateX(5em);
    position: absolute;
    width: calc(-5em + 100%);
    border-top: 0.1em solid transparent;
  }
`;
export const BubbleIcon = styled.div`
  height: 5em;
  width: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 2em;
    height: 2em;
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
