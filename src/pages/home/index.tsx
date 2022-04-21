import React from 'react';
import styled from 'styled-components';
import Sidebar from '@components/Sidebar/Sidebar';

export const Main = styled.main`
  display: flex;
`;

export const Section = styled.section`
  flex-grow: 1;
  height: 100vh;
`;

const HomePage = () => {
  return (
    <>
      <Main>
        <Sidebar />
        <Section>Section</Section>
        <aside>Sidebar Right</aside>
      </Main>
    </>
  );
};

export default HomePage;
