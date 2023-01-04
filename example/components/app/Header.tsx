import { css } from "@emotion/react";
import {Button} from "../../../packages";


const AppHeader = ({bo,bo1,setBo1,setBo}) => {

  return (
      <div>
        <div css={css`cursor: pointer`} onClick={()=>{
            setBo1(!bo1)
        }}>切换明暗</div>
        <div css={css`cursor: pointer`} onClick={()=>{
            setBo(!bo)
        }}>切换语言</div>
      </div>
  );
};

export default AppHeader;
