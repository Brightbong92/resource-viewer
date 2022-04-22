import React from 'react';
import styled from 'styled-components';
import Iframe from 'react-iframe';
import Sidebar from '@components/Sidebar/Sidebar';
import { useAppSelector } from '@Store/hooks';
import { selectResource } from '@Store/resource';

export const Main = styled.main`
  display: flex;
`;

export const Section = styled.section`
  flex-grow: 1;
  height: 100vh;
`;

const HomePage = () => {
  const { viewUrl } = useAppSelector(selectResource);
  return (
    <>
      <Main>
        <Sidebar />
        <Section>
          <div>
            https://image.ohou.se/i/bucketplace-v2-development/uploads%2Fadvices%2Fphotos%2F1448849450628_UzKYBJR.jpg?gif=1&w=720
            <span>X</span>
          </div>
          <Iframe
            // url="http://www.youtube.com/embed/xDMP3i36naA"
            url="https://image.ohou.se/i/bucketplace-v2-development/uploads%2Fadvices%2Fphotos%2F1448849450628_UzKYBJR.jpg?gif=1&w=720"
            // url={viewUrl}
            position="relative"
            width="100%"
            id="myId"
            className="myClassname"
            height="100%"
            styles={{ height: '25px' }}
          />
        </Section>
      </Main>
    </>
  );
};

export default HomePage;
