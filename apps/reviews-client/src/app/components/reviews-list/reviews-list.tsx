import Alert from '@mui/material/Alert';
import { useReviews } from '../../hooks';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import { ReviewListItem } from '../reviews-list-item/reviews-list-item';

/* eslint-disable-next-line */
export interface ReviewsListProps {}

export function ReviewsList(props: ReviewsListProps) {
	const { getAllReviews, isLoading, error, reviews } = useReviews();

	useEffect(() => {
		getAllReviews();
	}, []);

	if (isLoading || error)
		return (
			<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
				<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					{isLoading && (
						<>
							<Typography data-testid="review-list-loading-msg">Loading Reviews...</Typography>
							<CircularProgress />
						</>
					)}
					{error && (
						<Alert data-testid="review-list-err-msg" severity="error">
							<Typography>{error}</Typography>
						</Alert>
					)}
				</Box>
			</Box>
		);

	return (
		<Box>
			{!reviews.length && (
				<Alert data-testid="review-list-no-data" severity="info">
					<Typography>No reviews found</Typography>
				</Alert>
			)}

			{reviews.length && (
				<Grid data-testid="review-list-data" container rowSpacing={2} columnSpacing={2}>
					{reviews.map((review) => (
						<Grid key={review.id} item xs={12} sm={6} lg={4} xl={3}>
							<ReviewListItem review={review} />
						</Grid>
					))}
				</Grid>
			)}
		</Box>
	);
}

export default ReviewsList;
