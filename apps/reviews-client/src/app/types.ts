import { Company, Review, User } from '@prisma/client';

export interface ReviewWithUserAndCompany extends Review {
	user: User;
	company: Company;
}
