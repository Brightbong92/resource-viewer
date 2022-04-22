import React, { useCallback } from 'react';
import {
  addList,
  deleteList,
  selectResource,
  setViewUrl,
  setViewUrlVisible,
} from '@Store/resource';
import { useAppDispatch, useAppSelector } from '@Store/hooks';
import { IResource } from '@Store/interface.d';

import Card from '@components/Card/Card';
import { S } from './Sidebar.styles';

const Sidebar = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { list, viewUrl } = useAppSelector(selectResource);

  const onClickaddUrl = useCallback(() => {
    const msg = 'URL을 입력해주세요 :D';
    const result = window.prompt(msg);
    if (result) {
      if (result.startsWith('http') || result.startsWith('https')) {
        dispatch(addList({ id: Date.now(), originImgUrl: result, inputUrl: result }));
      } else alert(msg);
    }
  }, [dispatch]);

  const onClickDelete = useCallback(
    (idx: number) => {
      const index = list.findIndex((v) => v.id === idx);
      if (index !== -1) {
        if (list[index].originImgUrl === viewUrl) {
          dispatch(setViewUrl(''));
          dispatch(setViewUrlVisible(false));
        }
      }
      dispatch(deleteList(idx));
    },
    [dispatch, list, viewUrl],
  );

  const onClickCard = useCallback(
    (id: number) => () => {
      const idx = list.findIndex((v) => v.id === id);
      if (idx !== -1) {
        if (list[idx].originImgUrl.startsWith('https')) {
          dispatch(setViewUrl(list[idx].originImgUrl));
        } else {
          dispatch(setViewUrl(''));
          dispatch(setViewUrlVisible(false));
        }
      }
    },
    [dispatch, list],
  );

  return (
    <div>
      <aside>
        <S.ButtonWrap>
          <S.CustomButton onClick={onClickaddUrl}>URL 추가</S.CustomButton>
          <S.FileLabel htmlFor="input-file">이미지 추가</S.FileLabel>
          <S.CustomInputFile type="file" id="input-file" multiple accept="jpg,png" />
        </S.ButtonWrap>

        <S.CardListWrap>
          {list?.map(({ id }: IResource) => {
            return (
              <Card key={id} {...{ id }} onClickCard={onClickCard} onClickDelete={onClickDelete} />
            );
          })}
        </S.CardListWrap>
      </aside>
    </div>
  );
};

export default Sidebar;
