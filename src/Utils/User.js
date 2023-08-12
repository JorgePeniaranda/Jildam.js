import PropTypes from 'prop-types'
import { Account } from './Account';

export class User {
    constructor(id, email, user, name, lastName, bio, photo, accounts) {
        this.id = id;
        this.email = email;
        this.user = user;
        this.name = name;
        this.lastName = lastName;
        this.bio = bio;
        this.photo = photo;
        this.accounts = accounts;
    }
    addAccount(web, user, pass) {
        let account = new Account(this.accounts.lenght, web, user, pass);
        this.accounts.push(account);
    }
}

User.defaultProps = {
    name: "",
    lastName: "",
    bio: "",
    photo: "",
    accounts: [],
}

User.propTypes = {
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    name: PropTypes.string,
    lastName: PropTypes.string,
    bio: PropTypes.string,
    photo: PropTypes.string,
    accounts: PropTypes.array,
}