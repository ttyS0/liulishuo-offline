import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom';
import { SideNav, SideNavItem } from 'react-materialize';
import routes from '../routes/index.js';
import { list, article } from '../redux/thunk';

const isMobile = () => ($(window).width() < 993);
const getPageTitle = () => window.location.hash.substring(2) || 'react materialize';
const capitalize = path => path[0] ? path[0].toUpperCase() + path.substr(1) : '';

class Navigation extends React.Component {
  constructor (props) {
    super(props);
    this.state = { title: '' };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount () {
    this.props.getList();
    console.log(this.props);
    $('.button-collapse').sideNav({
      closeOnClick: isMobile(),
      edge: 'left' 
    });
  }

  onChange (title) {
    this.setState({ title });
  }

  render() {
    return (
      <header>
        <div className='container'>
          <a href='#' data-activates='nav-mobile' className='button-collapse top-nav full hide-on-large-only'>
            <i className='material-icons'>menu</i>
          </a>
          <span className="title">Liulishuo Reading 流利阅读</span>
        </div>
        <SideNav id='nav-mobile' options={{ closeOnClick: isMobile(), edge: 'left' } }>
          {this.props.data && this.props.data.map(this.renderNavItems.bind(this))}
        </SideNav>
      </header>
    )
  }

  renderNavItems(v, i) {
    return (
      <li key={`route${i}`}>
        <NavLink onClick={() => { this.props.getArticle(v.id); }} to={`/${v.id}`} activeClassName="active" className='waves-effect waves-teal sidenav-close'>
          {v.title}
        </NavLink>
      </li>
    );
  };
}

const mapStateToProps = state => ({
  hash: state.router.location.hash,
  router: state.router,
  data: state.list.data
})

const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(list()),
  getArticle: (id) => dispatch(article(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation))