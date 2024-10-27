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

import {Slot, SlotProps} from '@radix-ui/react-slot';
import {cva, type VariantProps} from 'class-variance-authority';
import {ButtonHTMLAttributes, ForwardedRef, forwardRef, ForwardRefExoticComponent, RefAttributes} from 'react';
import {ClassProp} from 'class-variance-authority/types';
import {cn} from '@/lib/utils';

/**
 * `buttonVariants` defines the styles for different button variants and sizes using class-variance-authority.
 */
export const buttonVariants: (props?: (Record<string, unknown> & ClassProp) | undefined) => string = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        tertiary: 'bg-tertiary text-secondary-foreground dark:text-primary-foreground hover:bg-tertiary/90',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-full px-3',
        md: 'h-11 rounded-full px-8',
        lg: 'text-lg h-14 rounded-full px-10',
        xl: 'text-xl h-16 rounded-full px-11 py-6',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

/**
 * Props for the `Button` component.
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  /** If true, the button will render as a child component. */
  asChild?: boolean;
}

/**
 * `Button` is a React component that renders a button with various styles and sizes.
 *
 * @example
 * ```tsx
 * <Button variant="destructive" size="lg">Delete</Button>
 * ```
 *
 * @param props - Props for the component.
 * @returns Button as a React component.
 */
const Button: ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLButtonElement>> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({className, variant, size, asChild = false, ...props}: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const Comp: ForwardRefExoticComponent<SlotProps & RefAttributes<HTMLElement>> | 'button' = asChild ? Slot : 'button';
  return <Comp className={cn(buttonVariants({variant, size, className}))} ref={ref} {...props} />;
});

Button.displayName = 'Button';

export default Button;
