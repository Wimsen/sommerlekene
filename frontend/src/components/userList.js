import React from "react";
import List from "@material-ui/core/List";
import User from "./user";

const UserList = props => <List>{props.users.map(user => <User key={user.id} {...user} />)}</List>;

export default UserList;
