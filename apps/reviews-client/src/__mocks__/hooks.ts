import { useReviews } from '../app/hooks';

export const mockUseReviews = jest.fn(
	(): ReturnType<typeof useReviews> => ({
		reviews: [],
		isLoading: false,
		error: null,
		getAllReviews: jest.fn(),
	}),
);

jest.mock('../app/hooks', () => ({
	useReviews: mockUseReviews,
}));
