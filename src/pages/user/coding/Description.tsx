import React from 'react'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'
import rehypeSanitize from 'rehype-sanitize'

const markdown = '# Hi, *Pluto*!\n' + '```javascript\n' + 'console.log("Hello, World!")\n' + '```\n'

const Description = () => {
  return (
    <div className='px-6 py-8'>
      <ReactMarkdown
        className='prose prose-sm prose-neutral max-w-full'
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSanitize, rehypeRaw, rehypeHighlight]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  )
}

export default Description
