import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import './index.css'

class BlogsList extends Component {
  state = {active: true, blogList: []}

  componentDidMount() {
    this.renderDate()
  }

  renderDate = async () => {
    const {blogList, active} = this.state
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({blogList: updatedData, active: false})
  }

  render() {
    const {blogList, active} = this.state
    return (
      <div>
        {active ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul>
            {blogList.map(next => (
              <BlogItem key={next.id} send={next} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogsList
