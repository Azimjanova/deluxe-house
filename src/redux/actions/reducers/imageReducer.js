const initialState = {
    text: '新浪客\n国际站\n全球降\n平期高',
};

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_IMAGE_TEXT':
            return {
                ...state,
                text: action.payload,
            };
        default:
            return state;
    }
};

export default imageReducer;