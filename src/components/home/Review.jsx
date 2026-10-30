import React from 'react'

function Review() {
  return (
    <div>
        <h2 className="text-3xl font-semibold text-center text-[#7A6960] uppercase pb-5">What Our Clients Says</h2>
        <div className="flex justify-center items-center mt-2">
        <div className="bg-red-600 h-1 w-16 rounded"></div>
      </div>
        <iframe src="https://widgets.sociablekit.com/google-reviews/iframe/25725773" frameBorder="0" width="100%" height="620px"></iframe>
    </div>
  )
}

export default Review