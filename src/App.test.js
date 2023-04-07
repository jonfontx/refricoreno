import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './Components/BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})


describe('BookingForm component', () => {
  it('renders the date input with the correct attributes', () => {
    const { getByLabelText } = render(<BookingForm />);
    const dateInput = getByLabelText('Choose date');

    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toBeRequired();
    expect(dateInput).toHaveAttribute('min', new Date().toISOString().split('T')[0]);
  });

  it('renders the time select with the correct attributes', () => {
    const availableTimes = ['11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM'];
    const { getByLabelText } = render(<BookingForm availableTimes={availableTimes} />);
    const timeSelect = getByLabelText('Choose time');

    expect(timeSelect).toHaveAttribute('id', 'res-time');
    expect(timeSelect).toHaveValue('');
    expect(timeSelect).not.toBeRequired();
    expect(timeSelect).toHaveAttribute('name', 'time');
  });

  it('renders the guests input with the correct attributes', () => {
    const { getByLabelText } = render(<BookingForm />);
    const guestsInput = getByLabelText('Number of guests');

    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('id', 'guests');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toHaveValue('1');
    expect(guestsInput).toBeRequired();
  });

  it('renders the occasion select with the correct attributes', () => {
    const { getByLabelText } = render(<BookingForm />);
    const occasionSelect = getByLabelText('Occasion');

    expect(occasionSelect).toHaveAttribute('id', 'occasion');
    expect(occasionSelect).toHaveValue('Birthday');
    expect(occasionSelect).toBeRequired();
  });

  it('disables the submit button when the form is invalid', () => {
    const { getByRole, getByLabelText } = render(<BookingForm />);
    const submitButton = getByRole('button', { name: 'Make Your reservation' });
    const dateInput = getByLabelText('Choose date');
    const guestsInput = getByLabelText('Number of guests');

    fireEvent.input(dateInput, { target: { value: '' } });
    fireEvent.input(guestsInput, { target: { value: '0' } });

    expect(submitButton).toBeDisabled();
  });

  it('enables the submit button when the form is valid', () => {
    const { getByRole, getByLabelText } = render(<BookingForm />);
    const submitButton = getByRole('button', { name: 'Make Your reservation' });
    const dateInput = getByLabelText('Choose date');
    const guestsInput = getByLabelText('Number of guests');

    fireEvent.input(dateInput, { target: { value: new Date().toISOString().split('T')[0] } });
    fireEvent.input(guestsInput, { target: { value: '2' } });

    expect(submitButton).toBeEnabled();
  });
});

