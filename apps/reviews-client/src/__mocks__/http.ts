jest.mock('../app/http', () => {
	return {
		fetchReviews: jest.fn(() => Promise.resolve([])),
	};
});
