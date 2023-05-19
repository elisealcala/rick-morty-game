import { Card } from '@/components/card';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { mockCard } from './mock';
import { Header } from '@/components/header';
import { Button } from '@/components/button';

describe('Card Component', () => {
	test('render with data', async () => {
		render(<Card {...mockCard} />);

		expect(screen.getByTestId('name')).toHaveTextContent(mockCard.name);
		expect(screen.getByTestId('status')).toHaveTextContent(
			`${mockCard.status} - ${mockCard.species}`
		);
	});

	test('avoid clicking when blocked', async () => {
		const onClick = jest.fn();

		render(<Card {...mockCard} onClick={onClick} flipped blocked />);

		fireEvent.click(screen.getByTestId('container'));

		expect(onClick).toHaveBeenCalledTimes(0);
	});

	test('it should fire the event when card is flipped', async () => {
		const onClick = jest.fn();

		render(<Card {...mockCard} onClick={onClick} flipped />);

		fireEvent.click(screen.getByTestId('container'));

		expect(onClick).toHaveBeenCalledTimes(1);
	});
});

describe('Header Component', () => {
	test('render correctly', async () => {
		const { container } = render(<Header />);

		expect(container).toMatchSnapshot();
	});
});

describe('Button Component', () => {
	test('render correctly', async () => {
		const { container } = render(<Button text="Example" />);

		expect(container).toMatchSnapshot();
	});

	test('fire onClick event', async () => {
		const onClick = jest.fn();

		render(<Button text="Example" onClick={onClick} />);

		fireEvent.click(screen.getByTestId('container'));

		expect(onClick).toHaveBeenCalledTimes(1);
	});
});
