import styled from "styled-components";

export const TasksCard = styled.div`
  max-width: 640px;
  border-radius: 20px;
  padding: 2.5rem 2.5rem 3rem;
  border: ${(p) => p.theme.border};
  background: ${(p) => p.theme.backgroundPrimary};

  @media only screen and (min-width: 1024px) {
    min-width: 480px;
    margin-left: auto;
  }

  @media only screen and (max-width: 1200px) {
    margin: 0 auto;
  }

  .taskItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding: 7px;

    @media only screen and (max-width: 480px) {
      align-items: left;
      flex-direction: column;
    }
  }
`;
