import React from 'react'

import { Text } from './text'
// учти при переборе пробел

interface IDrawStrokeTextProps{
	content: string
}

const DrawStrokeText:React.FC<IDrawStrokeTextProps> = ({ content }) => {
	const [arr, setArr] = React.useState<string[]|[]>([])
	React.useEffect(()=>{
		const subString = content.split('')
		setArr(subString)
	},[])
	
	const svgRef:React.MutableRefObject<SVGSVGElement | null> = React.useRef(null)

	return(
		<div className='wrapper__drawer'>
			<svg 
				version="1.1" 
				xmlns="http://www.w3.org/2000/svg"  
				viewBox="0 0 300 100"
				ref={ svgRef }
			>
				{
					(arr as string[]).map((letter:string, i:number)=>
						<Text 
							letter={ letter }
							i={i}
							svgRef={ svgRef }

							key={ letter+i }
						/>
					)
				}
				
			</svg>
		</div>
	)
}

export { DrawStrokeText }