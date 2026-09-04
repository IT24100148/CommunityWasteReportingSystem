const filterOptions = {
	district: ['Jaffna', 'Kilinochchi', 'Mannar', 'Mullaitivu', 'Vavuniya'],
	problemType: [
		'Illegal Dumping',
		'Uncollected Garbage',
		'Overflowing Bin',
		'Roadside Waste',
		'Waste Burning',
		'Other',
	],
	status: ['Reported', 'In Progress', 'Resolved'],
	severity: ['Low', 'Medium', 'High'],
}

function ReportFilters({ filters, onChange, onReset }) {
	return (
		<div className="filter-panel">
			<div className="filter-heading">
				<div>
					<span className="eyebrow">Narrow the view</span>
					<h2>Filter reports</h2>
				</div>
				<button type="button" className="reset-button" onClick={onReset}>
					Clear filters
				</button>
			</div>

			<div className="filter-grid">
				{Object.entries(filterOptions).map(([name, options]) => (
					<label className="filter-field" key={name}>
						<span>{name === 'problemType' ? 'Problem type' : name}</span>
						<select
							value={filters[name]}
							onChange={(event) => onChange(name, event.target.value)}
						>
							<option value="">All</option>
							{options.map((option) => (
								<option value={option} key={option}>
									{option}
								</option>
							))}
						</select>
					</label>
				))}
			</div>
		</div>
	)
}

export default ReportFilters
