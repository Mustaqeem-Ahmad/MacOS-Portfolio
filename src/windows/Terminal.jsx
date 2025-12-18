import React from 'react'
import { techStack } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import { Check, Flag } from 'lucide-react'
import WindowControls from '#components/WindowControls'

const Terminal = () => {
  return (
    <>
      {/* Window Header */}
      <div id="window-header">
       <WindowControls target="terminal" />
        <h2>Tech Stack</h2>
      </div>

      {/* Terminal Content */}
      <div className="techstack">
        <p>
          <span className="font-bold">@mustaqeem % </span>
          Show Tech Stack
        </p>

        {/* Labels */}
        <div className="label">
          <p className="w-32">Category</p>
          <p>Technologies</p>
        </div>

        {/* Tech Stack List */}
        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li key={category} className="flex items-start">
              <Check className="check mt-1" size={18} />

              <div className="flex ms-5">
                <h3>{category}</h3>

                <p className="flex gap-1 flex-wrap">
                  {items.map((item, i) => (
                    <span key={i}>
                      {item}
                      {i < items.length - 1 && ','}
                    </span>
                  ))}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className='footnote'>
         <p>
            <Check size={20} /> 5 of 5 stack loaded successfully(100%)
         </p>
         <p className='text-black'>
            <Flag size={15} fill='black' />
            Render time: 6ms
         </p>
        </div>
      </div>
    </>
  )
}

const TerminalWindow = WindowWrapper(Terminal, 'terminal')
export default TerminalWindow
