import { ReviewWithUserAndCompany } from './types';

const BASE_URL = '/api';

export const fetchReviews = (): Promise<{ reviews: ReviewWithUserAndCompany[] }> =>
	fetch(`${BASE_URL}/reviews`).then((res) => res.json());
