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
            {this.props.data.engTitle && (<h4 className="eng">{this.props.data.engTitle}</h4>)}
            {this.props.data.title && (<h5 className="title">{this.props.data.title}</h5>)}
            {this.props.data.title && (<span className="author">{`撰稿: ${this.props.data.author}`}</span>)}
            {this.props.id && (<Button waves='light' node='a' href={`cornell/${this.props.id}.pdf`}>Notes Template PDF</Button>)}
            <br />
            {this.props.data.url && (<audio className='page-audio' controls='controls' src={this.props.data.url} />)}
            <div className='poster-container'>
              {this.props.data.posterUrl && (<img src={this.props.data.posterUrl} />)}
            </div>
            <div className='content-container'>
              {this.props.data.content && this.props.data.content.map((v, i) =>
                <div className='paragraph-container'>
                  <p key={i}>{v.text}</p>
                </div>
              )}
            </div>
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