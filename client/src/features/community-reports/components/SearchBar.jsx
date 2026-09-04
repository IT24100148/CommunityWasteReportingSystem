function SearchBar({ value, onChange }) {
	return (
		<label className="search-field">
			<span className="sr-only">Search by area</span>
			<span className="search-icon" aria-hidden="true">
				&#8981;
			</span>
			<input
				type="search"
				value={value}
				onChange={(event) => onChange(event.target.value)}
				placeholder="Search by area..."
				aria-label="Search reports by area"
			/>
		</label>
	)
}

export default SearchBar
