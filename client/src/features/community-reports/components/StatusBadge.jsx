const statusClassNames = {
	Reported: 'reported',
	'In Progress': 'in-progress',
	Resolved: 'resolved',
}

function StatusBadge({ status }) {
	const className = statusClassNames[status] || 'default'

	return <span className={`report-badge status-badge ${className}`}>{status}</span>
}

export default StatusBadge
