/**
 * MIT License
 *
 * Copyright (c) 2024, Brion Mario.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Greet from '../Greeting';
import useGreet from '../useGreeting';

// Mock the useGreet hook
jest.mock('./useGreet', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Greet component', () => {
  it('should render with the default element (p)', () => {
    (useGreet as jest.Mock).mockReturnValue({greeting: 'Hello! Brion'});

    render(<Greet />);

    const element = screen.getByText('Hello! Brion');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('P');
  });

  it('should render with a custom element (span)', () => {
    (useGreet as jest.Mock).mockReturnValue({greeting: 'Hello! Mario'});

    render(<Greet as="span" />);

    const element = screen.getByText('Hello! Mario');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('SPAN');
  });

  it('should apply additional class names', () => {
    (useGreet as jest.Mock).mockReturnValue({greeting: 'Hello! Brion'});

    render(<Greet className="additional-class" />);

    const element = screen.getByText('Hello! Brion');
    expect(element).toHaveClass('say-hola additional-class');
  });

  it('should forward ref to the underlying element', () => {
    const ref = React.createRef<HTMLParagraphElement>();
    (useGreet as jest.Mock).mockReturnValue({greeting: 'Hello! Brion'});

    render(<Greet ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
    expect(ref.current).toHaveTextContent('Hello! Brion');
  });
});
