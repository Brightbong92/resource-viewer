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
    dispatch(addList({ id: Date.now(), imgUrl: '' }));
  }, [dispatch]);

  const onClickDelete = useCallback(
    (idx: number) => {
      const index = list.findIndex((v) => v.id === idx);
      if (index !== -1) {
        if (list[index].imgUrl === viewUrl) {
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
        if (list[idx].imgUrl.startsWith('http')) {
          dispatch(setViewUrl(list[idx].imgUrl));
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
