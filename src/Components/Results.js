import React from 'react'

import Result from './Result'

function Results ({results, openpopup }) {
	
	return (
		<section className="row">
			{/* {console.log(results)} */}
			{results.map(result => (
				<Result key={result.id} result={result} openpopup={openpopup} />
			))} 
		</section>
	)
}

export default Results
