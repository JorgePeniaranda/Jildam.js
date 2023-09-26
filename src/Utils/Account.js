import PropTypes from "prop-types";

export class Account {
  constructor(id, web, user, pass) {
    this.id = id;
    this.web = web;
    this.userName = user;
    this.password = pass;
  }
}

Account.propTypes = {
  id: PropTypes.number.isRequired,
  web: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
};
