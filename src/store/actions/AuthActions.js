export const signIn = () => async (dispatch, getState) => {
    dispatch({
        type: "SIGN_IN",
        payload: true,
    });
};

export const singOut = () => async (dispatch, getState) => {
    dispatch({
        type: "SIGN_OUT",
        payload: false,
    });
};
