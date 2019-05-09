import {connect} from 'react-redux';
import BlogDetail from '../components/BlogDetail';

const mapStateToProps = state => {
    const id = state.selectedid
    return {
        post: state.posts[id]
    }
}

export default connect(mapStateToProps)(BlogDetail)