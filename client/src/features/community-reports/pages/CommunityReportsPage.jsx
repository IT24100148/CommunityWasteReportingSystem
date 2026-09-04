import { useEffect, useState } from 'react'
import ReportCard from '../components/ReportCard'
import ReportFilters from '../components/ReportFilters'
import SearchBar from '../components/SearchBar'
import { getReports } from '../services/reportsApi'
import '../styles/communityReports.css'

const initialFilters = {
	area: '',
	district: '',
	problemType: '',
	status: '',
	severity: '',
}

function normalizeReports(payload) {
	if (Array.isArray(payload)) return payload
	if (Array.isArray(payload?.reports)) return payload.reports
	if (Array.isArray(payload?.data)) return payload.data
	return []
}

function CommunityReportsPage() {
	const [filters, setFilters] = useState(initialFilters)
	const [reports, setReports] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState('')

	useEffect(() => {
		let isCurrentRequest = true
		const timeoutId = window.setTimeout(async () => {
			setIsLoading(true)
			setError('')

			try {
				const payload = await getReports(filters)
				if (isCurrentRequest) setReports(normalizeReports(payload))
			} catch {
				if (isCurrentRequest) {
					setReports([])
					setError('We could not load reports right now. Please try again.')
				}
			} finally {
				if (isCurrentRequest) setIsLoading(false)
			}
		}, 300)

		return () => {
			isCurrentRequest = false
			window.clearTimeout(timeoutId)
		}
	}, [filters])

	function updateFilter(name, value) {
		setFilters((currentFilters) => ({ ...currentFilters, [name]: value }))
	}

	function resetFilters() {
		setFilters(initialFilters)
	}

	return (
		<main className="community-reports">
			<header className="reports-hero">
				<div>
					<p className="eyebrow">CleanLK / Community intelligence</p>
					<h1>Community reports</h1>
					<p className="hero-copy">
						See what is happening across the neighbourhood and find the reports
						that need attention.
					</p>
				</div>
				<div className="report-count" aria-live="polite">
					<strong>{isLoading ? '—' : reports.length}</strong>
					<span>{reports.length === 1 ? 'report found' : 'reports found'}</span>
				</div>
			</header>

			<section className="reports-workspace" aria-label="Report search and filters">
				<SearchBar value={filters.area} onChange={(value) => updateFilter('area', value)} />
				<ReportFilters
					filters={filters}
					onChange={updateFilter}
					onReset={resetFilters}
				/>
			</section>

			<section className="reports-results" aria-live="polite">
				{isLoading && <p className="state-message">Loading community reports...</p>}
				{!isLoading && error && (
					<div className="state-message state-error" role="alert">
						<h2>Reports are taking a pause</h2>
						<p>{error}</p>
						<button type="button" className="retry-button" onClick={() => setFilters({ ...filters })}>
							Try again
						</button>
					</div>
				)}
				{!isLoading && !error && reports.length === 0 && (
					<div className="state-message">
						<h2>No reports match those filters</h2>
						<p>Try a different area or clear the filters to see more reports.</p>
						<button type="button" className="retry-button" onClick={resetFilters}>
							Reset filters
						</button>
					</div>
				)}
				{!isLoading && !error && reports.length > 0 && (
					<div className="reports-grid">
						{reports.map((report) => (
							<ReportCard key={report._id || report.id} report={report} />
						))}
					</div>
				)}
			</section>
		</main>
	)
}

export default CommunityReportsPage
