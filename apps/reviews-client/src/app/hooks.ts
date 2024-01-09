import { Review } from '@prisma/client';
import { useCallback, useMemo, useState } from 'react';
import { fetchReviews } from './http';
import { ReviewWithUserAndCompany } from './types';

export const useReviews = () => {
	const [reviews, setReviews] = useState<ReviewWithUserAndCompany[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const getAllReviews = useCallback(async () => {
		try {
			if (!isLoading) setIsLoading(true);
			if (error) setError(null);
			const data = await fetchReviews();
			setReviews(data.reviews);
			setIsLoading(false);
		} catch (err) {
			console.error(err);
			setIsLoading(false);
			setReviews([]);
			setError('Sorry there was a problem retrieving reviews.');
		}
	}, [isLoading, error]);

	return useMemo(() => {
		return {
			reviews,
			error,
			isLoading,
			getAllReviews,
		};
	}, [reviews, error, isLoading, getAllReviews]);
};
