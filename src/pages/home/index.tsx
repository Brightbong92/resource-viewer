import React, { useCallback } from 'react';
import Iframe from 'react-iframe';
import { TypedIcon } from 'typed-design-system';

import { useAppSelector, useAppDispatch } from '@Store/hooks';
import { selectResource, setViewUrl } from '@Store/resource';

import Sidebar from '@components/Sidebar/Sidebar';
import { S } from './home.styles';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { viewUrl, headerViewUrl } = useAppSelector(selectResource);
  const onClickClose = useCallback(() => dispatch(setViewUrl('')), [dispatch]);

  return (
    <>
      <S.Main>
        <Sidebar />
        <S.Section>
          {viewUrl && (
            <S.UrlHeader>
              {headerViewUrl}
              <S.CloseIconWrap onClick={onClickClose}>
                <TypedIcon icon="close_small" />
              </S.CloseIconWrap>
            </S.UrlHeader>
          )}

          <Iframe
            url={viewUrl}
            position="relative"
            width="100%"
            height="100%"
            id="myId"
            className="myClassname"
          />
        </S.Section>
      </S.Main>
    </>
  );
};

export default HomePage;
