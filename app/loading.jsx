import React from 'react'

const loading = () => {
  return (
<div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
    <div class="border-t-transparent border-solid animate-spin  rounded-full bg-gradient-to-r to-emerald-600 from-sky-400 border-blue-400 border-8 h-64 w-64"></div>
</div>
  )
}

export default loading