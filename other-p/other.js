import '../auth/user.js';
import { signOutUser } from '../fetch-utils.js';

const signOutLink = document.getElementById('sign-out-link');

signOutLink.addEventListener('click', signOutUser());
