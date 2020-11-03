import React from 'react'
// учти при переборе пробел

interface IStyleProps{
	fill?: string
	fillDuration?: string
	fillDelay?: string
	strokeColor?: string
	fontSize?: number
	strokeWidth?: string
	transition?: string
	opacity?: number
}

interface ITextProps{
	word: string

	style: IStyleProps
}

const Text:React.FC<ITextProps> = React.memo(({ word, style}) => {
	const [styles, setStyles] = React.useState({
		opacity: 0,
		strokeDasharray: 0,
		strokeDashoffset: 0
	})
	const text:React.RefObject<SVGTextElement> = React.useRef(null)

	React.useEffect(()=>{
		const factor: number = style.fontSize || 30
		const elArea: number = text!.current!.clientWidth*factor/7
		setStyles(styles=>({
			...styles,
			strokeDasharray: Math.round(elArea),
			strokeDashoffset: Math.round(elArea),
			opacity: style.opacity || 1,
		}))

	}, [])

	React.useEffect(()=>{
		if(styles.strokeDashoffset > 0)setTimeout(anim, 10)
	},[styles.strokeDashoffset])

	const anim = ():void =>{
		setStyles(styles=>({
			...styles,
			strokeDashoffset: styles.strokeDashoffset - 1
		}));
	}	

	return(
		<text
			ref={ text }
			y={`${style.fontSize || 30}`}
			x='50%'
			textAnchor='middle'
			style={{
				fill: 'rgba(0,0,0,0)',
				fontSize: `${style.fontSize || 30}px`,
				opacity: styles.opacity,
				stroke: style.strokeColor || '#1280c9', 
				strokeWidth: style.strokeWidth || '1',
				strokeDasharray: styles.strokeDasharray,
				strokeDashoffset: styles.strokeDashoffset,
				strokeLinecap: 'round',
				transition: style.transition || 'none'
			}}
		>
			<animate
				attributeName='fill'
				from='rgba(0,0,0,0)'
				to={style.fill || 'rgba(0,0,0,0)'}
				dur={style.fillDuration || '0.25s'}
				begin={style.fillDelay || '2s'}
				fill='freeze'
			/>
			{word}
		</text>
	)
})

export { Text }