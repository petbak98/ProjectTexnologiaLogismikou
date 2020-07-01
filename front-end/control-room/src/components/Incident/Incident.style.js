import styled, { css } from 'styled-components/macro';

import theme from '../../config/theme';

export const TabsContainer = styled.div`
  width: 100%;
`;

export const Li = styled.li`
  position: relative;
  p {
    font-size: 13px;
    margin-top: 5px;
  }
  font-weight: 600;
  border-radius: 4px;
  text-align: center;
  border: 2px solid ${theme.palette.primary.main};
  margin-right: 5px;
  ${({ active }) =>
    active
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0.5;
        `};

  cursor: pointer;
  padding: 2rem 1rem;
  .tab-icon {
    fill: ${theme.palette.primary.main};
    height: 25px;
    width: 25px;
  }
  flex: 1;
  @media screen and (max-width: 550px) {
    margin-right: 0;
    margin-bottom: 1rem;
    :last-child {
      margin-bottom: 0;
    }
  }
`;

export const IncidentNavigation = styled.ul`
  list-style: none;
  margin-top: 1rem;
  display: flex;
  justify-content:space-between;
  width:100%;
  @media screen and (max-width: 550px) {
    max-width: 550px;
    flex-direction:column;
    margin: 40px auto;
  }
  }
`;

export const HeaderContainer = styled.section`
  display: flex;
  align-items: center;
`;

export const Container = styled.main`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.palette.primary.dark};
  margin: 40px 40px;
  position: relative;
  padding: 3rem 2rem;
  border-top: 5px solid ${theme.palette.primary.main};
  box-shadow: ${theme.shadows[5]};
  padding-top: 5 0px;
  border-radius: ${theme.shape.borderRadius};
  .avatar-absolute {
  }
  @media screen and (min-width: 600px) {
    max-width: 550px;
    margin: 40px auto;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  flex-direction: column;
  h4 {
    font-weight: 600;
    span {
      margin-left: 5px;
      font-weight: 800;
    }
  }
`;

export const AvatarContainer = styled.div`
  position: absolute;
  top: 0;
  right: 50%;
  transform: translate(50%, -50%);
`;

export const CodeContainer = styled.div`
  display: flex;
  align-items: center;
  h4 {
    margin-left: 5px;
  }
`;

export const CreatorContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StatusContainer = styled.div`
  align-items: center;
  display: flex;
  margin-top: 3px;
`;

export const Label = styled.div`
  span {
    margin-right: 5px;
  }
  font-size: 11px;
`;

export const Seperator = styled.div`
  height: ${(props) => (props.big ? '20px' : '10px')};
  background: ${theme.palette.primary.main};
  width: 2px;
  margin: 0 10px;
`;
