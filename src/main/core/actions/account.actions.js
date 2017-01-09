export const ACCOUNT_CHANGE_STATE = 'CHANGING_ACCOUNT_STATE';

export const AUTHENTICATE_WITH_TOKEN = 'AUTHENTICATE_WITH_TOKEN';

export const SIGN_IN_VIA_FACEBOOK = 'SIGN_IN_VIA_FACEBOOK';
export const BIND_FACEBOOK_ACCOUNT = 'BIND_FACEBOOK_ACCOUNT';
export const FACEBOOK_ACCOUNT_BOUND = 'FACEBOOK_ACCOUNT_BOUND';

export const SIGN_IN_VIA_GOOGLE = 'SIGN_IN_VIA_GOOGLE';
export const BIND_GOOGLE_ACCOUNT = 'BIND_GOOGLE_ACCOUNT';
export const GOOGLE_ACCOUNT_BOUND = 'GOOGLE_ACCOUNT_BOUND';

export const SIGN_OUT = 'SIGN_OUT';

export const accountStateChanged = (state) => ({ type: ACCOUNT_CHANGE_STATE, state });

export const facebookAccountBound = (state) => ({ type: FACEBOOK_ACCOUNT_BOUND, state });

export const googleAccountBound = (state) => ({ type: GOOGLE_ACCOUNT_BOUND, state });

export const authenticateWithToken = (token) => ({ type: AUTHENTICATE_WITH_TOKEN, token });

export const signInViaFacebook = () => (dispatch) => dispatch({ type: SIGN_IN_VIA_FACEBOOK });

export const signInViaGoogle = () => (dispatch) => dispatch({ type: SIGN_IN_VIA_GOOGLE });
