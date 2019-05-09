import {connect} from 'react-redux';
import BlogList from '../components/BlogList'

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(BlogList)