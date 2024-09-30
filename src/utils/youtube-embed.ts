export const getYouTubeVideoId = (url: string) => {
  const regExp = new RegExp(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)
  const match = url.match(regExp)
  if (match && match[2].length === 11) {
    return match[2]
  } else {
    return null
  }
}
