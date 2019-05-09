import {connect} from 'react-redux';
import BlogList from '../components/BlogList'
import { selectPost } from '../actions';

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleClick: id => {
            dispatch(selectPost(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogList)