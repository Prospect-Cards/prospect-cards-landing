import { SvgIcon } from '@material-ui/core'
import React from 'react'

interface Props {
  rotate?: number;
  color?: string;
}
const RightArrow = ({ rotate = 0, color = '#202020' }: Props): JSX.Element => {
  return (
    <SvgIcon
      width='22'
      height='16'
      viewBox='0 0 24 24'
      fill='none'
      preserveAspectRatio='xMidYMid'
    >
      <g transform={ `translate(1 6) rotate(${rotate} 12 7)` }>
        <path
          d='M21.5455 6.63636C18.1818 6.63636 15.3636 3.90909 15.3636 0.454545V0H13.5455V0.454545C13.5455 2.81818 14.6364 5.09091 16.4545 6.63636H0V8.45455H16.5455C14.7273 9.90909 13.6364 12.1818 13.6364 14.6364V15.0909H15.4545V14.5455C15.4545 11.1818 18.1818 8.36364 21.6364 8.36364H22.0909V6.54545H21.5455V6.63636Z'
          fill={ color }
        />
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect width='22' height='16' fill='white' />
        </clipPath>
      </defs>
    </SvgIcon>
  )
}

export default RightArrow
