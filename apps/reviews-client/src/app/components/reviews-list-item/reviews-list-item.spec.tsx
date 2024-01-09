import { render } from '@testing-library/react';
import { ReviewListItem } from './reviews-list-item';
import mockReview from '../../../__mocks__/fixtures/review.json';

describe('ReviewsList', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<ReviewListItem review={mockReview} />);
		expect(baseElement).toBeTruthy();
	});

	it('should render review text if it exists', async () => {
		const cmp = render(<ReviewListItem review={mockReview} />);
		expect(await cmp.findByText(`"${mockReview.reviewText}"`)).toBeDefined();
	});

	it('should render rating correctly', async () => {
		const cmp = render(<ReviewListItem review={mockReview} />);
		expect(await cmp.findAllByTestId('list-item-rating-star')).toHaveLength(mockReview.rating);
	});

	it('should render reviewer correctly', async () => {
		const cmp = render(<ReviewListItem review={mockReview} />);
		expect(
			await cmp.findByText(`-${mockReview.user.firstName} ${mockReview.user.lastName}`),
		).toBeDefined();
	});

	it('should render created_on date correctly', async () => {
		const cmp = render(<ReviewListItem review={mockReview} />);
		expect(await cmp.findByText(`Reviewed on 1/11/2021`)).toBeDefined();
	});
});
