import React from 'react'

import { Text } from './text'
// учти при переборе пробел

interface IStyleProps{
	fill?: string
	fillDuration?: string
	strokeColor?: string
	fontSize?: number
	strokeWidth?: string
	transition?: string
	opacity?: number
}

interface ISvgParamsProps{
	viewBox: string
	width: string
	height: string
}

interface IDrawStrokeTextProps{
	content: string
	className?: string
	svgParams?: ISvgParamsProps
	style: IStyleProps
}

const DrawStrokeText:React.FC<IDrawStrokeTextProps> = ({ content, className, svgParams, style }) => {
	return(
		<div className={className}>
			<svg 
				version="1.1" 
				xmlns="http://www.w3.org/2000/svg"
				viewBox={ svgParams?.viewBox || '0 0 100 100'}
				width={ svgParams?.viewBox ||'100%'}
				height={ svgParams?.viewBox ||'100%'}
			>
				<Text 
					word={ content }
					style={ style }
					key={ content }
				/>
			</svg>
		</div>
	)
}

export { DrawStrokeText }