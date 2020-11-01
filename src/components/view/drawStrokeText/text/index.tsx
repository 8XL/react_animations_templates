import React from 'react'
// учти при переборе пробел

interface ITextProps{
	letter: string
	i: number
	svgRef: React.MutableRefObject<SVGSVGElement | null>
}

const Text:React.FC<ITextProps> = ({ letter, i, svgRef }) => {
	const [shiftX, setShiftX] =  React.useState(0)
	const [styles, setStyles] = React.useState({
		fill: 'none',
		fontSize: '30px',
		stroke: '#1280c9',
		opacity: 0,
		strokeWidth: '1',
		strokeDasharray: 0,
		strokeDashoffset: 0
	})

	React.useEffect(()=>{
		const elArea = svgRef!.current!.getElementById(`${i}`).clientWidth*30/4
		setStyles(styles=>({
			...styles,
			strokeDasharray: Math.round(elArea),
			strokeDashoffset: Math.round(elArea),
			opacity: 1,
		}))
		if(svgRef.current && i>0){
			for(let j = 0; j<i; j++){
				setShiftX(shiftX => shiftX += svgRef!.current!.getElementById(`${j}`).clientWidth)
			}
		}
	}, [])

	React.useEffect(()=>{
		if(styles.strokeDashoffset > 0)setTimeout(anim, 40)
	},[styles.strokeDashoffset])

	const anim = ():void =>{
		setStyles(styles=>({
			...styles,
			strokeDashoffset: styles.strokeDashoffset - 1
		}));
	}	

	return(
		<text
			className={styles.strokeDashoffset === 0 ? 'svgtext' : ''}
			id={`${i}`} 
			y='30'
			x={ shiftX }
			style={{
				fill: styles.fill,
				fontSize: styles.fontSize,
				opacity: styles.opacity,
				stroke: styles.stroke, 
				strokeWidth: styles.strokeWidth,
				strokeDasharray: styles.strokeDasharray,
				strokeDashoffset: styles.strokeDashoffset,
				strokeLinecap: 'round'
			}}
			key={i}
		>
			{letter}
		</text>
	)
}

export { Text }