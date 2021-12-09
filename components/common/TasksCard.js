import styled from "styled-components";

export const TasksCard = styled.div`
  margin-left: 30%;
  max-width: 640px;
  border-radius: 20px;
  padding: 2.5rem 2.5rem 3rem;
  border: ${(p) => p.theme.border};
  background: ${(p) => p.theme.backgroundPrimary};

  @media only screen and (min-width: 1200px) {
    min-width: 480px;
  }

  @media only screen and (max-width: 1198px) {
    margin-left: auto;
    margin-right: auto;
  }

  .taskItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(
      270deg,
      #2d2c35 1.17%,
      rgba(45, 44, 53, 0) 45.34%
    );
    margin-bottom: 1rem;
    border-radius: 50px;
    padding: 7px;

    @media only screen and (max-width: 480px) {
      flex-direction: column;
    }
  }
`;
