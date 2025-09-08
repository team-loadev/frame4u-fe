'use client'

import React from "react"

function NoImgIcon () {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 18.7L1.3 0L0 1.3L1 2.3V17C1 18.1 1.9 19 3 19H17.7L18.7 20L20 18.7ZM3 17V4.3L10.6 11.9L9.1 13.8L7 11.1L4 15H13.7L15.7 17H3ZM6.8 3L4.8 1H17C18.1 1 19 1.9 19 3V15.2L17 13.2V3H6.8Z" fill="#E9E9E9"/>
    </svg>
  )
}

export default React.memo(NoImgIcon)