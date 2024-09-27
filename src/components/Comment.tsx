import React from 'react'
import type { CommentProps } from '@/types'
import UserLogo from '@/icons/UserLogo'
import CommentLogo from '@/icons/CommentLogo'
const Comment = ({comment}: {comment: CommentProps}) => { //({post}:{post: PostProps})
  return (
    <li className="p-2 mb-4 flex flex-col">
    
    <div className="flex items-center mb-1 gap-1">
      <UserLogo />
    </div>
    
    <div className="flex items-center">
      <CommentLogo />
      <p >Body: {comment.commentBody}</p>
    </div>
  </li>
  )
}

export default Comment
