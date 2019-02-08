import React from 'react';
import { connect } from 'react-redux'
import { Button } from 'react-materialize';
import { article } from '../redux/thunk'

class Article extends React.Component {
  constructor (props) {
    super(props);
    this.state = { title: '' };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount () {
    const id = this.props.hash.substr(1);
    if(!this.props.data && id.length > 0) {
      console.log(this.props);
      this.props.getArticle(id);
    }
  }

  onChange (title) {
    this.setState({ title });
  }

  render () {
    if(this.props.data)
      return (
        <main>
          <div className='container'>
            {this.props.data.title && (<h5>{this.props.data.title}</h5>)}
            {this.props.id && (<Button waves='light' node='a' href={`cornell/${this.props.id}.pdf`}>Notes Template PDF</Button>)}
            <br />
            {this.props.data.audio && (<audio className='page-audio' controls='controls' src={this.props.data.audio} />)}
            <div className='poster-container'>
              {this.props.data.poster && (<img src={this.props.data.poster} />)}
            </div>
            {this.props.data.contents && this.props.data.contents.map((v, i) => <p key={i}>{v}</p>)}
          </div>
        </main>
      );
    else return <div />;
  }
}

const mapStateToProps = state => ({
  hash: state.router.location.hash,
  id: state.article.id,
  data: state.article.data
})

const mapDispatchToProps = dispatch => ({
  getArticle: (id) => dispatch(article(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Article)