import axios from 'axios'

const API_BASE_URL =
	import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const reportsClient = axios.create({
	baseURL: API_BASE_URL,
})

export async function getReports(filters = {}) {
	const params = Object.fromEntries(
		Object.entries(filters).filter(([, value]) => value),
	)

	const response = await reportsClient.get('/reports', { params })
	return response.data
}

export async function getReportById(id) {
	const response = await reportsClient.get(`/reports/${id}`)
	return response.data
}
