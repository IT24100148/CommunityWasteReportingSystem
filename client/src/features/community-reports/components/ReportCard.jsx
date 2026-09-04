import SeverityBadge from './SeverityBadge'
import StatusBadge from './StatusBadge'

function formatDate(value) {
	if (!value) return 'Date unavailable'

	const date = new Date(value)
	if (Number.isNaN(date.getTime())) return 'Date unavailable'

	return new Intl.DateTimeFormat('en-LK', {
		dateStyle: 'medium',
	}).format(date)
}

function ReportCard({ report }) {
	return (
		<article className="report-card">
			<div className="report-card-topline">
				<span className="report-type">{report.problemType}</span>
				<SeverityBadge severity={report.severity} />
			</div>
			<h3>{report.area}</h3>
			<p className="report-district">{report.district}</p>
			<p className="report-description">{report.description}</p>
			<div className="report-card-footer">
				<StatusBadge status={report.status} />
				<time dateTime={report.createdAt}>Reported {formatDate(report.createdAt)}</time>
			</div>
		</article>
	)
}

export default ReportCard
