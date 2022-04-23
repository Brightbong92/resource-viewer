import React, { useCallback, useMemo } from 'react';
import { addList, deleteList, selectResource, setHeaderViewUrl, setViewUrl } from '@Store/resource';
import { useAppDispatch, useAppSelector } from '@Store/hooks';
import { IResource } from '@Store/interface.d';

import Card from '@components/Card/Card';
import { S } from './Sidebar.styles';

const Sidebar = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { list, viewUrl } = useAppSelector(selectResource);

  const orderedList = useMemo(() => {
    const temp = [...list];
    return temp?.sort((a, b) => {
      const aDate = new Date(a.id);
      const bDate = new Date(b.id);
      return bDate.getTime() - aDate.getTime();
    });
  }, [list]);

  const onClickaddUrl = useCallback(() => {
    const msg = 'URL을 입력해주세요 :D';
    const result = window.prompt(msg);
    if (result) {
      if (result.startsWith('http') || result.startsWith('https')) {
        let inputUrl = result.trim();
        if (result.includes('watch?v=')) {
          inputUrl = result.replace('watch?v=', 'embed/');
          return dispatch(addList({ id: Date.now(), originImgUrl: inputUrl, inputUrl }));
        }
        return dispatch(addList({ id: Date.now(), originImgUrl: inputUrl, inputUrl }));
      } else alert(msg);
    }
  }, [dispatch]);

  const onClickDelete = useCallback(
    (idx: number) => {
      const index = list.findIndex((v) => v.id === idx);
      if (index !== -1) {
        if (list[index].originImgUrl === viewUrl) dispatch(setViewUrl(''));
      }
      dispatch(deleteList(idx));
    },
    [dispatch, list, viewUrl],
  );

  const onClickCard = useCallback(
    (id: number) => () => {
      const idx = list.findIndex((v) => v.id === id);
      if (idx !== -1) {
        const url = list[idx].originImgUrl;
        if (url.startsWith('https') || url.startsWith('data:image')) {
          dispatch(setViewUrl(list[idx].originImgUrl));
          dispatch(setHeaderViewUrl(list[idx].inputUrl));
        } else dispatch(setViewUrl(''));
      }
    },
    [dispatch, list],
  );

  const onChangeImgUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const { files } = e.target;
      const tempArr = [];
      if (files) for (let i = 0; i < files.length; i++) tempArr.push(files[i]);

      tempArr.forEach(async (f) => {
        let originImgUrl: string | ArrayBuffer | null | undefined;
        var reader = new FileReader();
        reader.readAsDataURL(f);
        await new Promise((resolve) => {
          reader.onloadend = (event) => {
            originImgUrl = event.target?.result;
            resolve(originImgUrl);
          };
        })
          .then(() => {
            dispatch(
              addList({
                id: Date.now(),
                originImgUrl,
                inputUrl: f.name,
              }),
            );
            alert('업로드 성공했습니다 :D');
          })
          .catch((err) => {
            alert('업로드 실패했습니다 :X');
            throw new Error(err);
          });
      });
    },
    [dispatch],
  );

  return (
    <div>
      <aside>
        <S.ButtonWrap>
          <S.CustomButton onClick={onClickaddUrl}>URL 추가</S.CustomButton>
          <S.FileLabel htmlFor="input-file">이미지 추가</S.FileLabel>
          <S.CustomInputFile
            type="file"
            id="input-file"
            accept="image/jpg, image/jpeg, image/png"
            multiple
            onChange={onChangeImgUpload}
          />
        </S.ButtonWrap>

        <S.CardListWrap>
          {orderedList?.map(({ id }: IResource) => {
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
