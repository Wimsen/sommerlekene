import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";

import User from "./user";

const UserList = props => <div>{props.users.map(user => <User key={user.id} {...user} />)}</div>;

export default UserList;
