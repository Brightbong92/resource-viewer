import React, { memo, useCallback, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@Store/hooks';
import { setList, selectResource } from '@Store/resource';
import { S } from './Card.styles';

const EditIcon = '/svgs/edit.svg';
const DeleteIcon = '/svgs/trash.svg';

interface IProps {
  id: number;
  onClickDelete: (id: number) => void;
  onClickCard: (id: number) => () => void;
}

const Card = ({ id, onClickCard, onClickDelete }: IProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { list } = useAppSelector(selectResource);
  const [editable, setEditTable] = useState(true);

  const inputValue = useMemo(() => {
    const idx = list.findIndex((v) => v.id === id);
    if (idx !== -1) return list[idx].inputUrl;
  }, [id, list]);

  const onClickEdit = useCallback((e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    setEditTable((prev) => !prev);
    e.stopPropagation();
  }, []);

  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => dispatch(setList({ id, value: e.target.value })),
    [id, dispatch],
  );

  const onBlurInput = useCallback(() => setEditTable((prev) => !prev), []);

  const onClickTrash = useCallback(
    (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      if (onClickDelete && typeof onClickDelete === 'function') {
        onClickDelete(id);
        e.stopPropagation();
      }
    },
    [onClickDelete, id],
  );

  return (
    <S.CardWrap onClick={onClickCard(id)}>
      <S.CustomInput
        disabled={editable}
        value={inputValue}
        onChange={onChangeInput}
        onBlur={onBlurInput}
      />

      <S.IconWrap>
        <S.IconButton onClick={onClickEdit}>
          <img src={EditIcon} alt="edit" width={15} height={15} />
        </S.IconButton>

        <S.IconButton onClick={onClickTrash}>
          <img src={DeleteIcon} alt="delete" width={15} height={15} />
        </S.IconButton>
      </S.IconWrap>
    </S.CardWrap>
  );
};

export default memo(Card);
