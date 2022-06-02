import './index.css'

const ThumbnailItem = props => {
  const {userDetails, updateImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, imageAltText, imageUrl} = userDetails

  const onClickImage = () => {
    updateImage(imageUrl, imageAltText)
  }
  const activeImgBtnClassName = isActive ? '' : 'active-img-btn'

  return (
    <li className="img-box">
      <button
        type="button"
        className={`img-btn ${activeImgBtnClassName}`}
        onClick={onClickImage}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} className="img-style" />
      </button>
    </li>
  )
}

export default ThumbnailItem
