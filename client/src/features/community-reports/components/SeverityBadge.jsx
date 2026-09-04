const severityClassNames = {
	Low: 'low',
	Medium: 'medium',
	High: 'high',
}

function SeverityBadge({ severity }) {
	const className = severityClassNames[severity] || 'default'

	return (
		<span className={`report-badge severity-badge ${className}`}>
			{severity}
		</span>
	)
}

export default SeverityBadge
