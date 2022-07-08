import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Burak Akkaya",
      image:
        "https://images.pexels.com/photos/12004258/pexels-photo-12004258.jpeg?cs=srgb&dl=pexels-leonardo-manjarrez-12004258.jpg&fm=jpg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
