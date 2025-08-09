import Avatar from "@assets/images/Avatar.png";
import Image from "@assets/images/Image.png";
import Logo from "@assets/images/Logo.png";
import { FC, useContext } from "react";
import { NavLink } from "react-router";
import { Badge, Button, Divider, Icon } from "src/components";
import { NavContext } from "src/context/NavContext";
import { routes } from "src/routes";

const SideBar: FC = () => {
  const { main, others } = routes;
  const { open, toggle } = useContext(NavContext);
  return (
    <div
      className={`sidebar  flex flex-col flex-shrink-0 h-screen px-4 py-0 md:py-6 w-full md:w-72 gap-y-6  md:fixed ${
        open ? "block md:block" : "hidden md:block"
      }`}
    >
      <div className={`px-4 sidebar-logo hidden md:block `}>
        <div className="mb-4 ">
          <img src={Logo} />
        </div>
        <label className="relative ">
          <Icon name="Search" className="absolute top-0 left-2 " />
          <input
            autoFocus
            className="rounded border-1 w-full pr-3.5 pl-8 py-2.5 border-purple-300 shadow-[0_0_0_4px_#F4EBFF,0_1px_2px_0_rgba(16,24,40,0.05)]"
            placeholder="Search"
          ></input>
        </label>
      </div>
      <div className="sidebar-main-nav mt-0 md:mt-4">
        {main.map(({ name, icon, path, badge }) => (
          <NavLink
            onClick={() => {
              if (open) toggle(!open);
            }}
            key={path}
            className={`flex px-3 justify-between py-2 hover:bg-gray-50 ${({
              isActive,
            }) => (isActive ? "active" : "")}
        `}
            to={path}
          >
            <div className="flex">
              <Icon name={icon} />
              <span className="ml-3">{name}</span>
            </div>
            {badge && <Badge value="10" />}
          </NavLink>
        ))}
      </div>
      <div className="sidebar-other-nav">
        {others.map(({ name, icon, path }) => (
          <NavLink
            onClick={() => {
              if (open) toggle(!open);
            }}
            className={`flex px-3 justify-between py-2 hover:bg-gray-50 ${({
              isActive,
            }) => (isActive ? "active" : "")}
            
       `}
            to={path}
          >
            <div className="flex">
              <Icon name={icon} />
              <span className="ml-3">{name}</span>
            </div>
          </NavLink>
        ))}
      </div>
      <div className="px-4 py-5 bg-gray-50 rounded-lg sidebar-feature-alert">
        <header className=" flex-col gap-1 inline-flex">
          <h4 className="text-gray-900 text-sm font-medium leading-tight">
            New feature available!
          </h4>
          <p className="text-gray-500 text-sm font-normal leading-tight">
            Check out the new dashboard view. Pages now load faster.
          </p>
        </header>
        <div className="my-4">
          <img src={Image} />
        </div>
        <Button
          label="Dismiss"
          className="text-gray-500 text-sm font-medium "
        />
        <Button
          label="What's New?"
          className="text-violet-700 text-sm font-medium ml-3"
        />
      </div>
      <Divider className="my-0" />
      <div className="flex justify-between sidebar-footer">
        <div className="flex items-center">
          <img src={Avatar} className="flex-shrink-0 w-10 h-10 mr-3" />
          <div>
            <p className="text-gray-900 text-sm font-medium leading-tight">
              Olivia Rhye
            </p>
            <p className="ext-gray-500 text-sm font-normal leading-tight">
              olivia@untitledui.com
            </p>
          </div>
        </div>
        <button>
          <Icon name="Logout" />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
