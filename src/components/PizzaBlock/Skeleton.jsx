import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    className="pizza-block"
    speed={1}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#d6d6d6"
    foregroundColor="#ffffff"
  >
    <circle cx="130" cy="125" r="120" /> 
    <rect x="0" y="260" rx="5" ry="5" width="280" height="27" /> 
    <rect x="0" y="307" rx="5" ry="5" width="280" height="88" /> 
    <rect x="0" y="424" rx="4" ry="4" width="91" height="27" /> 
    <rect x="140" y="415" rx="20" ry="20" width="140" height="45" />
  </ContentLoader>
)

export default Skeleton