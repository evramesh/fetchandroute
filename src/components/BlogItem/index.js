import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {send} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = send
  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <li className="item-container">
        <img className="item-image" src={imageUrl} alt={`item${id}`} />
        <div className="item-info">
          <p className="item-topic">{topic}</p>
          <h1 className="item-title">{title}</h1>
          <div className="author-info">
            <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
