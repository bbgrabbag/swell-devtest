import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { ReviewWithUserAndCompany } from '../../types';
import { useCallback } from 'react';
import { StarRateOutlined, StarRateRounded } from '@mui/icons-material';

export const ReviewListItem: React.FC<{ review: ReviewWithUserAndCompany }> = ({ review }) => {
	const renderRating = useCallback((rating: number) => {
		return Array(5)
			.fill(null)
			.map((_, i) => {
				if (i + 1 <= rating)
					return <StarRateRounded data-testid="list-item-rating-star" key={i} color="primary" />;
				return <StarRateOutlined key={i} color="primary" />;
			});
	}, []);

	return (
		<Card sx={{ height: '100%' }}>
			<CardContent>
				<Typography variant="h3" gutterBottom>
					{review.company.name}
				</Typography>
				{review.rating !== null && <Typography>{renderRating(review.rating)}</Typography>}
				{review.reviewText && (
					<Typography variant="body2" gutterBottom>
						"{review.reviewText}"
					</Typography>
				)}
				<Typography sx={{ paddingLeft: '4px' }}>
					-{review.user.firstName} {review.user.lastName}
				</Typography>
				<Typography variant="caption">
					Reviewed on {new Date(review.createdOn).toLocaleDateString()}
				</Typography>
			</CardContent>
		</Card>
	);
};
