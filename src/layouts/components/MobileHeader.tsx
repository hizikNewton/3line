import Logo from "@assets/images/Logo.png";
import { FC, useContext } from "react";
import { Icon } from "src/components";
import { NavContext } from "src/context/NavContext";

const MobileHeader: FC = () => {
  const { toggle, open } = useContext(NavContext);
  return (
    <div className="sidebar-logo lg:hidden flex py-2 px-3 justify-between items-center">
      <div className="">
        <img src={Logo} />
      </div>
      <div onClick={() => toggle(!open)}>
        <Icon name="Menu" />
      </div>
    </div>
  );
};

export default MobileHeader;
