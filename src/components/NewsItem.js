import React, { Component } from 'react'

export default class NewsItem extends Component {


    render() {
        let { title, description, imageUrl, newsUrl, author, date ,source} = this.props
        return (
            <div className='my-3'>
                <div className="card" style={{ width: "22rem" }}>
                    <img src={!imageUrl ? "https://www.dsij.in/Portals/0/EasyDNNnews/30658/image_1059.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...  <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger z-n100" style={{left:"85%"}}>
                            {source}
                            <span class="visually-hidden">unread messages</span>
                        </span></h5>
                        <p className={`card-text`}>{description}...</p>
                        <p className="card-text"><small className='text-muted'>By {author} on {date} </small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}
