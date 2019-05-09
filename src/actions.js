
// Action types
export const ACTION_CREATE_POST = 'ACTION_CREATE_POST';
export const ACTION_UPDATE_POST = 'ACTION_UPDATE_POST';
export const ACTION_DELETE_POST = 'ACTION_DELETE_POST';

// Action creators

export function createPost(payload) {
    // assumes that the payload argument looks like this:
    // {
    //  title: 'lorem ipsum',
    //  content: 'dolor something something',
    // }
    return {
        type: ACTION_CREATE_POST,
        payload
    }
}
window.createPost = createPost

export function deletePost() {
    return {
        type: ACTION_DELETE_POST,
    }
};

export function updatePost() {
    return {
        type: ACTION_UPDATE_POST,
    }
}

