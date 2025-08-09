import UserPng from "@assets/images/Paymentmethod.png";
import { User } from "@components/Table";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { Link } from "react-router";
import { Button, Divider, Icon, Table } from "src/components";

const roles = [
  {
    name: "Superadmin",
    lastActive: "06/2023",
  },
  {
    name: "Developeradmin",
    lastActive: "01/2023",
  },
  {
    name: "Supportadmin",
    lastActive: "10/2022",
  },
];

const Settings: FC = () => {
  const options: Array<string> = [
    "My details",
    "Profile",
    "Password",
    "Team",
    "Plan",
    "Roles",
    "Notification",
    "Integration",
    "Api",
  ];
  const [active, setActive] = useState("Superadmin");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setActive(value);
  };

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://3line-v8g7.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <>
      <header className="flex flex-col gap-y-6">
        <div>
          <h3 className="text-3xl font-medium text-gray-900">Settings</h3>
          <p className="text-base font-normal leading-normal text-gray-500 ">
            Manage your team and preference here
          </p>
        </div>
        <nav className="shadow overflow-x-auto border rounded-lg border-gray-300 mobile-nav no-scrollbar w-auto md:w-fit -mx-5 md:mx-0">
          <ul className="bg-white flex  divide-x divide-gray-300 ">
            {options.map((name) => (
              <li className=" hover:bg-gray-50 px-4 py-2.5">
                <Link to="/" className="p-3.5 whitespace-nowrap" key={name}>
                  <span className="text-sm font-medium  text-slate-700">
                    {name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* user role */}
      <section className="flex flex-col w-full ">
        <header className="user-role-header">
          <h4 className="text-lg font-medium leading-7 text-gray-900">
            User Roles
          </h4>
          <p className="text-sm font-normal leading-tight text-gray-500">
            Update your roles details and information
          </p>
        </header>
        <Divider className="mt-5 mb-6" />
        <form>
          {/* connected email */}
          <div className="flex gap-8 connected-email flex-col md:flex-row">
            <legend>
              <h4 className="text-sm font-medium text-slate-700">
                Connected email
              </h4>
              <p className="text-sm font-normal text-gray-500">
                Select role account
              </p>
            </legend>

            <div className="flex flex-col md:w-[512px] gap-y-4 ">
              <div className="flex w-full gap-x-2">
                <input
                  className="h-4 accent-purple-500"
                  type="radio"
                  value="account"
                  onChange={handleChange}
                  name="contactEmail"
                />
                <label>
                  <p className="text-sm font-medium leading-tight text-slate-700">
                    My account email
                  </p>
                  <p className="text-sm font-normal text-gray-500">
                    olivia@untitledui.com
                  </p>
                </label>
              </div>
              <div className="flex gap-x-2">
                <input
                  className="w-4 h-4  accent-purple-500"
                  type="radio"
                  value="email"
                  onChange={handleChange}
                  name="contactEmail"
                />
                <label className="w-full">
                  <p className="text-sm font-medium leading-tight text-slate-700">
                    An alternative email
                  </p>
                  <div className="relative mt-3 w-full">
                    <Icon name="Mail" className="absolute top-3 left-2" />
                    <input
                      className="rounded-lg border border-gray-300 pr-3.5 pl-10 py-2.5 w-full  bg-white "
                      placeholder="billing@untitledui.com"
                    ></input>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <Divider className="my-5" />

          {/* Active role */}
          <div className="flex gap-8 active-role flex-col md:flex-row">
            <legend className="active-role">
              <h4 className="text-sm font-medium text-slate-700">
                Active Role
              </h4>
              <p className="text-sm font-normal text-gray-500">
                Select active role available to the user.
              </p>
            </legend>

            <div className="user-role-list flex flex-col gap-y-4 w-full max-w-[784px] ">
              {roles.map(({ name, lastActive }) => {
                const isActive = active === name;
                return (
                  <div
                    className={`radio-group-item-Developeradmin  ${
                      isActive ? "bg-purple-50" : "bg-white"
                    }  hover:bg-purple-50 `}
                    onClick={() => setActive(name)}
                  >
                    <label
                      className="flex p-4 border border-gray-200 rounded-lg hover:border-purple-300"
                      htmlFor="user-role"
                    >
                      <div className="userImg">
                        <img src={UserPng} />
                      </div>
                      <div className="flex-grow-1 ml-3 last-active">
                        <div className="mb-2">
                          <p
                            className={`text-sm font-medium ${
                              isActive ? "text-purple-700" : "text-slate-700"
                            } `}
                          >
                            {name}
                          </p>
                          <p
                            className={`text-sm font-normal ${
                              isActive ? "text-purple-500" : "text-gray-500"
                            } `}
                          >
                            Last active {lastActive}
                          </p>
                        </div>
                        <span className="inline-flex">
                          <Button
                            className={`text-sm font-normal ${
                              isActive ? "text-purple-500" : "text-gray-500"
                            }`}
                            label="Set as default"
                          />
                          <Button
                            className="ml-3 text-violet-700"
                            label="Edit"
                          />
                        </span>
                      </div>
                      <span>
                        {isActive ? (
                          <Icon name="Checkboxbase" />
                        ) : (
                          <input type="radio" />
                        )}
                      </span>
                    </label>
                  </div>
                );
              })}
              <div className="add-payment">
                <Button
                  leftIcon="Plus"
                  className="text-gray-500"
                  label="Add role to user"
                />
              </div>
            </div>
          </div>
        </form>
      </section>
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="h-fit text-gray-900 text-lg font-medium leading-7">
            User Roles
          </h3>
          <Button
            className="bg-white rounded-lg shadow border border-gray-300 px-4 py-2.5"
            leftIcon="Download"
            label="Download all"
          />
        </div>
        <Table tableData={users} />
      </div>
    </>
  );
};

export default Settings;
