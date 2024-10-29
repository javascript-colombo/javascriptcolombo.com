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

import {useTheme} from 'next-themes';
import {ForwardedRef, forwardRef, ForwardRefExoticComponent, ReactElement, RefAttributes} from 'react';
import {cn} from '@/lib/utils';
import Button, {ButtonProps} from '@/components/Button';
import {TestableComponent} from '@/types/dom';
import {Theme} from '@/types/theme';
import Moon from '@/icons/Moon';
import Sun from '@/icons/Sun';

/**
 * The `ThemeSwitchProps` interface represents the props accepted by the `ThemeSwitch` component.
 */
export type ThemeSwitchProps = TestableComponent &
  ButtonProps & {
    /**
     * The variant of the theme switch component.
     * It can be either `'icon'` or `'labelled'`.
     *
     * @defaultValue `'icon'`
     */
    variant?: 'icon' | 'labelled';
  };

/**
 * `ThemeSwitch` is a React component that allows users to toggle between light and dark themes.
 *
 * @example
 * ```jsx
 * <ThemeSwitch variant="icon" className="my-4" />;
 * ```
 *
 * @param props - Props for the component.
 * @returns ThemeSwitch as a React component.
 */
const ThemeSwitch: ForwardRefExoticComponent<ThemeSwitchProps & RefAttributes<HTMLButtonElement>> = forwardRef<
  HTMLButtonElement,
  ThemeSwitchProps
>(
  (
    {children, className, variant = 'icon', bordered, ...rest}: ThemeSwitchProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ): ReactElement => {
    const {resolvedTheme, setTheme} = useTheme();

    return (
      <Button
        ref={ref}
        type="button"
        onClick={(): void => {
          setTheme(resolvedTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
        }}
        className={cn(
          'inline-flex h-14 items-center justify-center overflow-hidden rounded-full p-1 transition',
          {
            'border-secondary hover:border-primary focus:border-primary border-2 focus:outline-none': bordered,
            'w-14': variant === 'icon',
            'px-8': variant === 'labelled',
          },
          className,
        )}
        size="icon"
        variant="ghost"
        {...rest}
      >
        <div className="relative h-8 w-8">
          <span
            className="absolute inset-0 rotate-90 transform text-gray-500 hover:text-black transition duration-1000 motion-reduce:duration-[0s] dark:rotate-0 dark:hover:text-white dark:text-slate-500"
            style={{transformOrigin: '50% 100px'}}
          >
            <Moon height={32} width={32} />
          </span>
          <span
            className="absolute inset-0 rotate-0 transform text-gray-500 hover:text-black transition duration-1000 motion-reduce:duration-[0s] dark:-rotate-90 dark:hover:text-white dark:text-slate-500"
            style={{transformOrigin: '50% 100px'}}
          >
            <Sun height={32} width={32} />
          </span>
        </div>
      </Button>
    );
  },
);

export default ThemeSwitch;
