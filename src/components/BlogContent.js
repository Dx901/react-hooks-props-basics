import React from "react";

/*function BlogContent(props) {
  return <div id="blog-content">{props.articleText}</div>;
}

export default BlogContent;
*/

function BlogContent(props) {
  //return <div>{props.articleText}</div>;
  console.log(props)

  if (!props.isPublished) {
    // hide unpublished content
    // return null means "don't display any DOM elements here"
    return null;
  } else {
    // show published content
    return (
      <div>
        <h1>{props.articleText}</h1>
        <p>{props.minutesToRead} minutes to read</p>
      </div>
    );
  }
}

export default BlogContent;