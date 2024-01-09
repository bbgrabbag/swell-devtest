import { render } from '@testing-library/react';
import ReviewsList from './reviews-list';
import { mockUseReviews } from '../../../__mocks__/hooks';
import mockReviews from '../../../__mocks__/fixtures/reviews.json';

describe('ReviewsList', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<ReviewsList />);
		expect(baseElement).toBeTruthy();
	});

	it('should render a loading message while fetching data', async () => {
		mockUseReviews.mockImplementationOnce(() => ({
			reviews: [],
			error: null,
			isLoading: true,
			getAllReviews: jest.fn(),
		}));
		const cmp = render(<ReviewsList />);
		expect(await cmp.findByTestId('review-list-loading-msg')).toBeDefined();
	});

	it('should render list of reviews', async () => {
		mockUseReviews.mockImplementationOnce(() => ({
			reviews: mockReviews,
			error: null,
			isLoading: false,
			getAllReviews: jest.fn(),
		}));
		const cmp = render(<ReviewsList />);
		expect((await cmp.findByTestId('review-list-data')).childElementCount).toBe(mockReviews.length);
	});

	it('should display message if no reviews are found', async () => {
		mockUseReviews.mockImplementationOnce(() => ({
			reviews: [],
			error: null,
			isLoading: false,
			getAllReviews: jest.fn(),
		}));
		const cmp = render(<ReviewsList />);
		expect(await cmp.findByTestId('review-list-no-data')).toBeDefined();
	});

	it('should display message if there is an error during fetching', async () => {
		mockUseReviews.mockImplementationOnce(() => ({
			reviews: [],
			error: 'There was a problem loading data',
			isLoading: false,
			getAllReviews: jest.fn(),
		}));
		const cmp = render(<ReviewsList />);
		expect(await cmp.findByTestId('review-list-err-msg')).toBeDefined();
	});

	// Feel free to add any additional tests you think are necessary
});
