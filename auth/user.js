import { getUser, signOutUser } from '../fetch-utils.js';

const signOutLink = document.getElementById('sign-out-link');

// > Part C:
// make sure we have a user!
const user = getUser();
//     - get the user (if there is one)
//     - check if there is not a user and if so do the redirect
if (!user) {
    const base =
        location.pathname === '/' || location.pathname === '/finishauth/user-auth/' ? './' : '../';
    //       redirect code: location.replace(`/auth/?redirectUrl=${encodeURIComponent(location)}`);
    location.replace(`${base}auth/?redirectUrl=${encodeURIComponent(location)}`);
}

// > Part B: attach event listener to signOutLink that calls signOutUser
signOutLink.addEventListener('click', signOutUser);
