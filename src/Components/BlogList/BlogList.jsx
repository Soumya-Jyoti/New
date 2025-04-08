import React from 'react'
import BlogBox from './BlogBox'

const BlogList = () => {
  return (
    <div className="flex justify-center px-1">
  <div className="max-w-8xl w-full overflow-x-auto scrollbar-hide">
    <ul className="flex space-x-4 snap-x snap-mandatory overflow-x-auto pb-4 justify-center">
      <li className="snap-start shrink-0 w-80">
        <BlogBox />
      </li>
      <li className="snap-start shrink-0 w-80">
        <BlogBox />
      </li>
    
      <li className="snap-start shrink-0 w-80">
        <BlogBox />
      </li>
      <li className="snap-start shrink-0 w-80">
        <BlogBox />
      </li>
      <li className="snap-start shrink-0 w-80">
        <BlogBox />
      </li>
      </ul>
  </div>
</div>

  )
}

export default BlogList