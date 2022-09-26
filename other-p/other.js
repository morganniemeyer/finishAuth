import { getUser, signOutUser } from '../fetch-utils.js';
import '../auth/user.js';

const user = getUser();

const signOutLink = document.getElementById('sign-out-link');

signOutLink.addEventListener('click', signOutUser());
