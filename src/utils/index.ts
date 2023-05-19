import { GetCharactersQuery } from '../../generated';

type CharactersParam = NonNullable<
	NonNullable<GetCharactersQuery['characters']>['results']
>;

export const formatData = (characters: CharactersParam) => {
	const firstSixSorted = characters
		.sort(() => Math.random() - 0.5)
		.filter((_, i) => i < 6);

	const pairFormatted = firstSixSorted.reduce((init, val) => {
		return [...init, val, val];
	}, [] as CharactersParam);

	return pairFormatted;
};
