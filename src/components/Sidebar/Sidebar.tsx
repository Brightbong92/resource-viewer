import React from 'react';
import { S } from './Sidebar.styles';

const Sidebar = (): React.ReactElement => {
  return (
    <div>
      <aside>
        <S.CustomButton>URL 추가</S.CustomButton>
        <button>이미지 추가</button>
        <div className="notSticky_box">General Div Box</div>
        <div className="sticky_box">Position Sticky Box</div>
      </aside>
    </div>
  );
};

export default Sidebar;
