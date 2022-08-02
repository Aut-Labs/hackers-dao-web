import Collapsible from "react-collapsible";
import SwCollapsibleStyle from "./collapsible.style";
import { ic_keyboard_arrow_down } from "react-icons-kit/md/ic_keyboard_arrow_down";
import Icon from "react-icons-kit";

const SwCollapsible = ({ title, ...props }) => {
  return (
    <SwCollapsibleStyle className="sw-collapsible">
      <Collapsible
        id="test"
        lazyRender={false}
        // triggerElementProps={{
        //   instanceid: Math.floor(Math.random() * 100).toString(),
        //   id: Math.floor(Math.random() * 100).toString(),
        // }}
        triggerTagName="div"
        trigger={
          <>
            <span className="trigger-title">{title}</span>
            <Icon className="trigger-icon" icon={ic_keyboard_arrow_down} />
          </>
        }
        transitionCloseTime={null}
        transitionTime={150}
        {...props}
      />
    </SwCollapsibleStyle>
  );
};

export default SwCollapsible;
