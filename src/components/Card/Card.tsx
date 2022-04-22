import React, { memo, useCallback, useState } from 'react';
import { TypedIcon } from 'typed-design-system';
import { useAppDispatch } from '@Store/hooks';
import { setList } from '@Store/resource';
import { S } from './Card.styles';

interface IProps {
  id: number;
  onClickDelete: (id: number) => void;
  onClickCard: (id: number) => () => void;
}

const Card = ({ id, onClickCard, onClickDelete }: IProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const [editable, setEditTable] = useState(true);

  const onClickEdit = useCallback(() => setEditTable((prev) => !prev), []);

  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => dispatch(setList({ id, value: e.target.value })),
    [id, dispatch],
  );

  const onBlurInput = useCallback(() => setEditTable((prev) => !prev), []);

  const onClickTrash = useCallback(() => {
    if (onClickDelete && typeof onClickDelete === 'function') onClickDelete(id);
  }, [onClickDelete, id]);

  return (
    <S.CardWrap onClick={onClickCard(id)}>
      <S.CustomInput disabled={editable} onChange={onChangeInput} onBlur={onBlurInput} />

      <S.IconWrap>
        <S.IconButton onClick={onClickEdit}>
          <TypedIcon icon="edit_small" />
        </S.IconButton>

        <S.IconButton onClick={onClickTrash}>
          <TypedIcon icon="trash_small" />
        </S.IconButton>
      </S.IconWrap>
    </S.CardWrap>
  );
};

export default memo(Card);