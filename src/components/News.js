import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
    static defaultProps = {
        category: "general",
    }
    static propTypes = {
        category: PropTypes.string,
    }

    articles = []
    constructor(props) {
        super()

        this.state = {
            articles: this.articles,
            loading: true,
            page: 1,
            totalResults:0,

        }
    }

    async updateNews(){
        this.props.setProgress(0)
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=daf0e1ae00c647a38b419a79df80d034&page=${this.state.page}&pageSize=6`
        this.setState({ loading: true })
        let data = await fetch(url)
        this.props.setProgress(30)
        let parsedData = await data.json()
        this.props.setProgress(70)
        console.log(parsedData)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100)

    }
    async componentDidMount() {
        this.updateNews()

    }


    fetchMoreData = async() => {
        this.setState({
            page:this.state.page+1
        })
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=daf0e1ae00c647a38b419a79df80d034&page=${this.state.page}&pageSize=6`
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
        })
      };
    


    render() {
        console.log("render")
        return (
<>
                <h2 className='text-center  text-capitalize'>Newsking - Top Headline For ({this.props.category})</h2>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container my-5">
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={!element.author ? "unknown" : element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}

                    </div>
                    </div>
                </InfiniteScroll>

</>
        )
    }
}
