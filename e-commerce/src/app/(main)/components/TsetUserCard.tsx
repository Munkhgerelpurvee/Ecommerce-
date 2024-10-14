import React from "react";
export type UserType = {
  first_name: String;
  last_name: String;
  email: String;
  gender: String;
  ip_address: String;
};

// type Props = { userProps: UserType; close: () => void };
type Props = { userProps: UserType; closeProps?: () => boolean };

export const TestUserCard = ({ userProps }: Props) => {
  return (
    <div className="container border p-6">
      {/* {userProps.first_name}:<div> Her last_name is:{userProps.last_name}</div>
      {userProps.first_name}:<div> Her email is:{userProps.email}</div>
      {userProps.first_name}:<div> Her gender is:{userProps.gender}</div> */}
      {userProps.first_name}:
      <button className="bg-green-200 rounded-lg p-3 mt-2">
        {" "}
        Her ip_address is:{userProps.ip_address}
      </button>
    </div>
  );
};
