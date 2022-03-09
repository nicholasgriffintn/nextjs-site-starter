import { Field, Int, ObjectType, Query, Resolver } from 'type-graphql';
import { GqlContext } from '$src/server/gql-context';
import type { Context } from '$src/server/gql-context';
import { getAuth } from '$src/server/auth';

@ObjectType()
class Viewer {
	@Field((type) => Int)
	id: number;

	@Field()
	name: string;

	@Field()
	email: string;

	@Field({ nullable: true })
	image?: string;

	@Field()
	createdAt: Date;

	@Field()
	updatedAt: Date;
}

@Resolver((of) => Viewer)
export default class ViewerResolver {
	@Query((returns) => Viewer)
	async viewer(@GqlContext() ctx: Context) {
		const { user } = getAuth(ctx, { requireAuth: true });
		return user;
	}
}
