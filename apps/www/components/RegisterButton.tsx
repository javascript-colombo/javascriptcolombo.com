/**
 * MIT License
 *
 * Copyright (c) 2024, Brion Mario
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

import {ForwardedRef, forwardRef, ForwardRefExoticComponent, HTMLAttributes, RefAttributes} from 'react';
import {cn} from '@/lib/utils';
import {TestableComponent} from '@/types/dom';

export type HeroProps = HTMLAttributes<HTMLDivElement> & TestableComponent;

const RegisterButton: ForwardRefExoticComponent<HeroProps & RefAttributes<HTMLDivElement>> = forwardRef<
  HTMLDivElement,
  HeroProps
>(({className, children, ...rest}: HeroProps, ref: ForwardedRef<HTMLDivElement>) => (
  <div
    className={cn(
      'register-button',
      'h-20 flex items-center gap-3 border border-input bg-primary text-primary-foreground hover:bg-tertiary hover:text-accent-foreground rounded-full px-6 py-5 cursor-pointer',
      className,
    )}
    ref={ref}
    {...rest}
  >
    <div className="text-2xl font-medium">{children}</div>
    <div className="ml-auto rounded-full bg-background w-14 h-14 flex justify-center items-center">
      <svg
        className="text-primary"
        data-testid="geist-icon"
        height="28"
        strokeLinejoin="round"
        viewBox="0 0 16 16"
        width="28"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.53033 2.21968L9 1.68935L7.93934 2.75001L8.46967 3.28034L12.4393 7.25001H1.75H1V8.75001H1.75H12.4393L8.46967 12.7197L7.93934 13.25L9 14.3107L9.53033 13.7803L14.6036 8.70711C14.9941 8.31659 14.9941 7.68342 14.6036 7.2929L9.53033 2.21968Z"
          fill="currentColor"
        />
      </svg>
    </div>
  </div>
));

export default RegisterButton;
